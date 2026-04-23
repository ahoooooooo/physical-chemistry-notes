const notes = window.NOTES_DATA || [];
const units = window.UNITS_DATA || [];

const params = new URLSearchParams(location.search);
const state = {
  currentSubId: params.get("sub") || null,
  currentPlaceholderId: null,
  legacyPageSlug: params.get("page") || null,
  query: ""
};

const pageNav = document.querySelector("#pageNav");
const noteContent = document.querySelector("#noteContent");
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");
const drawer = document.querySelector("#drawer");
const drawerBackdrop = document.querySelector("#drawerBackdrop");
const menuBtn = document.querySelector("#menuBtn");
const pagePager = document.querySelector("#pagePager");
const siteTitle = document.querySelector("#siteTitle");
const pageTitle = document.querySelector("#pageTitle");
const pageEyebrow = document.querySelector("#pageEyebrow");

const isDesktop = () => window.matchMedia("(min-width: 900px)").matches;

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  const lines = match[1].split("\n");
  let currentList = null;

  for (const line of lines) {
    const listMatch = line.match(/^\s+-\s+(.*)$/);
    if (listMatch && currentList) {
      meta[currentList].push(stripQuotes(listMatch[1].trim()));
      continue;
    }

    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) continue;

    const key = pair[1];
    const value = pair[2].trim();
    if (value === "") {
      meta[key] = [];
      currentList = key;
    } else {
      meta[key] = stripQuotes(value);
      currentList = null;
    }
  }

  return { meta, body: match[2] };
}

function stripQuotes(value) {
  return value.replace(/^["']|["']$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function markdownToHtml(markdown) {
  const blocks = [];
  let source = markdown.replace(/\r\n/g, "\n");

  source = source.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    const token = `@@MATH${blocks.length}@@`;
    blocks.push(`<div class="math-block">$$${math.trim()}$$</div>`);
    return token;
  });

  const lines = source.split("\n");
  const html = [];
  let listType = null;
  let paragraph = [];
  let inTable = false;
  let tableBuffer = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = null;
  };

  const flushTable = () => {
    if (!inTable) return;
    const [header, sep, ...rows] = tableBuffer;
    const parseRow = (row) =>
      row
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim());
    const headers = parseRow(header);
    const bodyRows = rows.map(parseRow);
    html.push(
      `<table><thead><tr>${headers
        .map((h) => `<th>${inlineMarkdown(h)}</th>`)
        .join("")}</tr></thead><tbody>${bodyRows
        .map(
          (r) =>
            `<tr>${r.map((c) => `<td>${inlineMarkdown(c)}</td>`).join("")}</tr>`
        )
        .join("")}</tbody></table>`
    );
    inTable = false;
    tableBuffer = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^\|.*\|$/.test(trimmed) && !inTable) {
      flushParagraph();
      closeList();
      inTable = true;
      tableBuffer.push(trimmed);
      continue;
    }
    if (inTable) {
      if (/^\|.*\|$/.test(trimmed)) {
        tableBuffer.push(trimmed);
        continue;
      }
      flushTable();
    }

    if (!trimmed) {
      flushParagraph();
      closeList();
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = slugify(text);
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      closeList();
      html.push(
        `<blockquote>${inlineMarkdown(trimmed.replace(/^>\s?/, ""))}</blockquote>`
      );
      continue;
    }

    const unordered = trimmed.match(/^[-*]\s+(.*)$/);
    const ordered = trimmed.match(/^\d+\.\s+(.*)$/);
    if (unordered || ordered) {
      flushParagraph();
      const wanted = unordered ? "ul" : "ol";
      if (listType !== wanted) {
        closeList();
        listType = wanted;
        html.push(`<${listType}>`);
      }
      html.push(`<li>${inlineMarkdown((unordered || ordered)[1])}</li>`);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  closeList();
  flushTable();

  return html
    .join("\n")
    .replace(/@@MATH(\d+)@@/g, (_, index) => blocks[Number(index)]);
}

function removeNonCleanSections(markdown) {
  return markdown.replace(/\n## Original Page Notes[\s\S]*$/g, "").trim();
}

function inlineMarkdown(text) {
  const mathTokens = [];
  const imgTokens = [];

  let pre = text.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g, (_, alt, src, title) => {
    const token = `@@IMG${imgTokens.length}@@`;
    const captionHtml = title ? `<figcaption>${escapeHtml(title)}</figcaption>` : "";
    imgTokens.push(
      `<figure class="note-figure"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" />${captionHtml}</figure>`
    );
    return token;
  });

  let safe = escapeHtml(pre).replace(/\$([^$\n]+)\$/g, (_, math) => {
    const token = `@@INLINE${mathTokens.length}@@`;
    mathTokens.push(`$${math}$`);
    return token;
  });

  safe = safe
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");

  safe = safe.replace(/@@INLINE(\d+)@@/g, (_, index) => mathTokens[Number(index)]);
  return safe.replace(/@@IMG(\d+)@@/g, (_, index) => imgTokens[Number(index)]);
}

function prepareNote(raw) {
  const parsed = parseFrontmatter(raw.content);
  return {
    ...raw,
    ...parsed,
    pageNumber: Number(parsed.meta.page || raw.slug.replace(/\D/g, "")),
    title: parsed.meta.title || raw.slug
  };
}

const notesBySlug = new Map(notes.map((n) => [n.slug, prepareNote(n)]));

const subs = [];
const subById = new Map();
for (const unit of units) {
  if (!unit.subs) continue;
  for (const sub of unit.subs) {
    const withUnit = { ...sub, unitId: unit.id, unitTitle: unit.title, unitSubtitle: unit.subtitle };
    subs.push(withUnit);
    subById.set(sub.id, withUnit);
  }
}

function resolveInitialSub() {
  let id = state.currentSubId;
  if (id && id.startsWith("u2-") && !subById.has(id)) {
    id = id.replace(/^u2-/, "u4-");
  }
  if (id && subById.has(id)) return id;
  if (state.legacyPageSlug) {
    const found = subs.find((s) => s.pages.includes(state.legacyPageSlug));
    if (found) return found.id;
  }
  return subs[0]?.id || null;
}

state.currentSubId = resolveInitialSub();

function renderNav() {
  const parts = [];
  for (const unit of units) {
    const hasSubs = Array.isArray(unit.subs) && unit.subs.length;
    const placeholderClass = unit.placeholder ? " placeholder" : "";
    parts.push(`<div class="unit-group${placeholderClass}">`);
    parts.push(
      `<div class="unit-head">
        <strong>${escapeHtml(unit.title)}</strong>
        ${unit.subtitle ? `<small>${escapeHtml(unit.subtitle)}</small>` : ""}
      </div>`
    );
    if (hasSubs) {
      parts.push(`<div class="sub-list">`);
      for (const sub of unit.subs) {
        const active = sub.id === state.currentSubId ? " active" : "";
        parts.push(
          `<button class="sub-link${active}" data-sub="${sub.id}">
            <strong>${escapeHtml(sub.title)}</strong>
            ${sub.summary ? `<small>${escapeHtml(sub.summary)}</small>` : ""}
          </button>`
        );
      }
      parts.push(`</div>`);
    } else if (unit.placeholder) {
      parts.push(
        `<button class="sub-link placeholder-link" data-placeholder="${unit.id}">
          <small>點擊查看說明</small>
        </button>`
      );
    }
    parts.push(`</div>`);
  }
  pageNav.innerHTML = parts.join("");
}

function renderPager() {
  const idx = subs.findIndex((s) => s.id === state.currentSubId);
  const prev = subs[idx - 1];
  const next = subs[idx + 1];

  const btn = (s, label, cls) => {
    if (!s) {
      return `<button class="pager-btn ${cls}" disabled><small>${label}</small><strong>—</strong></button>`;
    }
    return `
      <button class="pager-btn ${cls}" data-sub="${s.id}">
        <small>${label}</small>
        <strong>${escapeHtml(s.title)}</strong>
      </button>
    `;
  };

  pagePager.innerHTML = btn(prev, "← Prev", "prev") + btn(next, "Next →", "next");
}

function renderSub() {
  const sub = subById.get(state.currentSubId);
  if (!sub) return;
  state.currentPlaceholderId = null;

  const unitDisplay = `${sub.unitTitle}${sub.unitSubtitle ? " · " + sub.unitSubtitle : ""}`;
  document.title = `${sub.title} · ${unitDisplay}`;
  siteTitle.innerHTML = `${escapeHtml(sub.title)} <small>· ${escapeHtml(sub.unitTitle)}</small>`;
  pageTitle.textContent = sub.title;
  pageEyebrow.textContent = `${unitDisplay}${sub.summary ? " · " + sub.summary : ""}`;

  const pageNotes = sub.pages
    .map((slug) => notesBySlug.get(slug))
    .filter(Boolean);

  const tagSet = new Set();
  for (const note of pageNotes) {
    if (Array.isArray(note.meta.tags)) {
      for (const t of note.meta.tags) tagSet.add(t);
    }
  }
  const tagRow = tagSet.size
    ? `<div class="tag-row">${[...tagSet]
        .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
        .join("")}</div>`
    : "";

  const pageBlocks = pageNotes
    .map((note) => {
      const num = String(note.pageNumber).padStart(2, "0");
      const chapter = note.meta.chapter ? `Ch.${note.meta.chapter} · ` : "";
      const marker = `
        <div class="page-marker" id="page-${num}">
          <span>${chapter}Page ${num}</span>
          <span class="marker-title">${escapeHtml(note.title)}</span>
        </div>`;
      return marker + markdownToHtml(removeNonCleanSections(note.body));
    })
    .join("");

  noteContent.innerHTML = tagRow + pageBlocks;
  renderNav();
  renderPager();
  history.replaceState(null, "", `?sub=${sub.id}`);

  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise([noteContent]);
  }
}

function renderPlaceholder(unitId) {
  const unit = units.find((u) => u.id === unitId);
  if (!unit) return;
  state.currentPlaceholderId = unitId;
  state.currentSubId = null;

  document.title = `${unit.title} — 待補`;
  siteTitle.innerHTML = `${escapeHtml(unit.title)} <small>· 待補</small>`;
  pageTitle.textContent = unit.title;
  pageEyebrow.textContent = "尚未建立";

  noteContent.innerHTML = `
    <div class="placeholder-card">
      <h3>這個單元還沒有內容</h3>
      <p>${escapeHtml(unit.title)}${unit.subtitle ? `（${escapeHtml(unit.subtitle)}）` : ""}預定之後會由作者填入筆記。</p>
      <p class="muted">目前可以先看「單元二 · Ch.4 Quantum Theory」的內容。</p>
    </div>
  `;
  renderNav();
  pagePager.innerHTML = "";
  history.replaceState(null, "", `?placeholder=${unit.id}`);
}

function openDrawer() {
  drawer.classList.add("open");
  drawerBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function renderSearch() {
  const query = state.query.trim().toLowerCase();
  if (!query) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    return;
  }

  const results = [];
  for (const sub of subs) {
    const pageNotes = sub.pages.map((slug) => notesBySlug.get(slug)).filter(Boolean);
    for (const note of pageNotes) {
      const haystack = `${note.title}\n${note.content}`.toLowerCase();
      const index = haystack.indexOf(query);
      if (index === -1) continue;
      const plain = note.content.replace(/[#*`$>-]/g, " ");
      const plainLower = plain.toLowerCase();
      const plainIndex = plainLower.indexOf(query);
      const excerpt =
        plainIndex >= 0
          ? plain.slice(Math.max(0, plainIndex - 60), plainIndex + 120)
          : note.title;
      results.push({ sub, note, excerpt });
      if (results.length >= 8) break;
    }
    if (results.length >= 8) break;
  }

  searchResults.hidden = false;
  searchResults.innerHTML = `
    <p class="results-title">${results.length} Result${results.length === 1 ? "" : "s"}</p>
    ${results
      .map(
        ({ sub, note, excerpt }) => `
      <button class="result-item" data-sub="${sub.id}" data-anchor="page-${String(note.pageNumber).padStart(2, "0")}">
        <strong>${escapeHtml(sub.title)} · Page ${String(note.pageNumber).padStart(2, "0")}</strong>
        <small>${escapeHtml(note.title)} — ${escapeHtml(excerpt.trim())}</small>
      </button>
    `
      )
      .join("") || `<p style="padding: 0.5rem; color: var(--muted);">No matches.</p>`}
  `;
}

function gotoSub(subId, { scrollTop = true, anchor = null } = {}) {
  state.currentSubId = subId;
  renderSub();
  if (!isDesktop()) closeDrawer();
  if (anchor) {
    const target = document.getElementById(anchor);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }
  if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
}

function gotoPlaceholder(unitId) {
  renderPlaceholder(unitId);
  if (!isDesktop()) closeDrawer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

menuBtn.addEventListener("click", openDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);

pageNav.addEventListener("click", (event) => {
  const subBtn = event.target.closest("[data-sub]");
  if (subBtn) {
    gotoSub(subBtn.dataset.sub);
    return;
  }
  const ph = event.target.closest("[data-placeholder]");
  if (ph) {
    gotoPlaceholder(ph.dataset.placeholder);
  }
});

pagePager.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sub]");
  if (!button) return;
  gotoSub(button.dataset.sub);
});

searchResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sub]");
  if (!button) return;
  state.query = "";
  searchInput.value = "";
  renderSearch();
  gotoSub(button.dataset.sub, { anchor: button.dataset.anchor });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderSearch();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
  if (event.target === searchInput) return;
  if (!state.currentSubId) return;
  const idx = subs.findIndex((s) => s.id === state.currentSubId);
  if (event.key === "ArrowLeft" && subs[idx - 1]) {
    gotoSub(subs[idx - 1].id);
  } else if (event.key === "ArrowRight" && subs[idx + 1]) {
    gotoSub(subs[idx + 1].id);
  }
});

const placeholderParam = params.get("placeholder");
if (placeholderParam) {
  renderPlaceholder(placeholderParam);
} else {
  renderSub();
}
