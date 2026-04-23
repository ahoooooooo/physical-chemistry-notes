const notes = window.NOTES_DATA || [];

const state = {
  currentSlug: new URLSearchParams(location.search).get("page") || "page-01",
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

  for (const line of lines) {
    const trimmed = line.trim();

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

  return html
    .join("\n")
    .replace(/@@MATH(\d+)@@/g, (_, index) => blocks[Number(index)]);
}

function removeNonCleanSections(markdown) {
  return markdown.replace(/\n## Original Page Notes[\s\S]*$/g, "").trim();
}

function inlineMarkdown(text) {
  const mathTokens = [];
  let safe = escapeHtml(text).replace(/\$([^$\n]+)\$/g, (_, math) => {
    const token = `@@INLINE${mathTokens.length}@@`;
    mathTokens.push(`$${math}$`);
    return token;
  });

  safe = safe
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");

  return safe.replace(/@@INLINE(\d+)@@/g, (_, index) => mathTokens[Number(index)]);
}

function getPreparedNotes() {
  return notes.map((note) => {
    const parsed = parseFrontmatter(note.content);
    return {
      ...note,
      ...parsed,
      pageNumber: Number(parsed.meta.page || note.slug.replace(/\D/g, "")),
      title: parsed.meta.title || note.slug
    };
  });
}

const preparedNotes = getPreparedNotes();

function renderNav() {
  pageNav.innerHTML = preparedNotes
    .map((note) => {
      const active = note.slug === state.currentSlug ? " active" : "";
      const num = String(note.pageNumber).padStart(2, "0");
      return `
        <button class="page-link${active}" data-slug="${note.slug}">
          <strong>Page ${num}</strong>
          <small>${escapeHtml(note.title)}</small>
        </button>
      `;
    })
    .join("");
}

function renderPager(note) {
  const idx = preparedNotes.findIndex((n) => n.slug === note.slug);
  const prev = preparedNotes[idx - 1];
  const next = preparedNotes[idx + 1];

  const btn = (n, label, cls) => {
    if (!n) {
      return `<button class="pager-btn ${cls}" disabled><small>${label}</small><strong>—</strong></button>`;
    }
    return `
      <button class="pager-btn ${cls}" data-slug="${n.slug}">
        <small>${label}</small>
        <strong>${escapeHtml(n.title)}</strong>
      </button>
    `;
  };

  pagePager.innerHTML = btn(prev, "← Prev", "prev") + btn(next, "Next →", "next");
}

function renderNote() {
  const note =
    preparedNotes.find((item) => item.slug === state.currentSlug) ||
    preparedNotes[0];
  if (!note) return;

  state.currentSlug = note.slug;
  const num = String(note.pageNumber).padStart(2, "0");

  document.title = `Page ${num} · ${note.title} — Ch.4 Quantum Theory`;
  siteTitle.innerHTML = `${escapeHtml(note.title)} <small>· Page ${num}</small>`;
  pageTitle.textContent = note.title;
  pageEyebrow.textContent = `Page ${num}${note.meta.source ? " · " + note.meta.source : ""}`;

  const tagRow = Array.isArray(note.meta.tags) && note.meta.tags.length
    ? `<div class="tag-row">${note.meta.tags
        .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
        .join("")}</div>`
    : "";

  noteContent.innerHTML = tagRow + markdownToHtml(removeNonCleanSections(note.body));
  renderNav();
  renderPager(note);
  history.replaceState(null, "", `?page=${note.slug}`);

  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise([noteContent]);
  }
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

  const results = preparedNotes
    .map((note) => {
      const haystack = `${note.title}\n${note.content}`.toLowerCase();
      const index = haystack.indexOf(query);
      if (index === -1) return null;
      const plain = note.content.replace(/[#*`$>-]/g, " ");
      const plainLower = plain.toLowerCase();
      const plainIndex = plainLower.indexOf(query);
      const excerpt =
        plainIndex >= 0
          ? plain.slice(Math.max(0, plainIndex - 60), plainIndex + 120)
          : note.title;
      return { note, excerpt };
    })
    .filter(Boolean)
    .slice(0, 8);

  searchResults.hidden = false;
  searchResults.innerHTML = `
    <p class="results-title">${results.length} Result${results.length === 1 ? "" : "s"}</p>
    ${results
      .map(
        ({ note, excerpt }) => `
      <button class="result-item" data-slug="${note.slug}">
        <strong>Page ${String(note.pageNumber).padStart(2, "0")} — ${escapeHtml(note.title)}</strong>
        <small>${escapeHtml(excerpt.trim())}</small>
      </button>
    `
      )
      .join("") || `<p style="padding: 0.5rem; color: var(--muted);">No matches.</p>`}
  `;
}

function goto(slug, { scrollTop = true } = {}) {
  state.currentSlug = slug;
  renderNote();
  if (!isDesktop()) closeDrawer();
  if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
}

menuBtn.addEventListener("click", openDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);

pageNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-slug]");
  if (!button) return;
  goto(button.dataset.slug);
});

pagePager.addEventListener("click", (event) => {
  const button = event.target.closest("[data-slug]");
  if (!button) return;
  goto(button.dataset.slug);
});

searchResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-slug]");
  if (!button) return;
  state.query = "";
  searchInput.value = "";
  renderSearch();
  goto(button.dataset.slug);
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderSearch();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
  if (event.target === searchInput) return;
  const idx = preparedNotes.findIndex((n) => n.slug === state.currentSlug);
  if (event.key === "ArrowLeft" && preparedNotes[idx - 1]) {
    goto(preparedNotes[idx - 1].slug);
  } else if (event.key === "ArrowRight" && preparedNotes[idx + 1]) {
    goto(preparedNotes[idx + 1].slug);
  }
});

renderNote();
