const notes = window.NOTES_DATA || [];

const state = {
  currentSlug: new URLSearchParams(location.search).get("page") || "page-01",
  query: ""
};

const pageNav = document.querySelector("#pageNav");
const noteContent = document.querySelector("#noteContent");
const tocNav = document.querySelector("#tocNav");
const focusBox = document.querySelector("#focusBox");
const heroTitle = document.querySelector("#heroTitle");
const pageCounter = document.querySelector("#pageCounter");
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");

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
  return value
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
      html.push(`<blockquote>${inlineMarkdown(trimmed.replace(/^>\s?/, ""))}</blockquote>`);
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

  return html.join("\n").replace(/@@MATH(\d+)@@/g, (_, index) => blocks[Number(index)]);
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
  pageCounter.textContent = `${preparedNotes.length} pages`;
  pageNav.innerHTML = preparedNotes
    .map((note) => {
      const active = note.slug === state.currentSlug ? " active" : "";
      return `
        <button class="page-link${active}" data-slug="${note.slug}">
          <strong>Page ${String(note.pageNumber).padStart(2, "0")}</strong>
          <small>${escapeHtml(note.title)}</small>
        </button>
      `;
    })
    .join("");
}

function renderNote() {
  const note = preparedNotes.find((item) => item.slug === state.currentSlug) || preparedNotes[0];
  if (!note) return;

  state.currentSlug = note.slug;
  heroTitle.textContent = note.title;

  const tagRow = Array.isArray(note.meta.tags)
    ? `<div class="tag-row">${note.meta.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>`
    : "";

  noteContent.innerHTML = tagRow + markdownToHtml(note.body);
  renderToc();
  renderFocus(note);
  renderNav();
  history.replaceState(null, "", `?page=${note.slug}`);

  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise([noteContent, focusBox]);
  }
}

function renderToc() {
  const headings = [...noteContent.querySelectorAll("h2, h3")].slice(0, 16);
  tocNav.innerHTML = headings
    .map((heading) => `<a href="#${heading.id}" class="${heading.tagName.toLowerCase()}">${heading.textContent}</a>`)
    .join("");
}

function renderFocus(note) {
  const sections = Array.isArray(note.meta.sections) ? note.meta.sections : [];
  focusBox.innerHTML = sections.length
    ? sections.map((section) => `<p>${escapeHtml(section)}</p>`).join("")
    : "<p>No sections listed.</p>";
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
      const excerpt = plainIndex >= 0
        ? plain.slice(Math.max(0, plainIndex - 70), plainIndex + 150)
        : note.title;
      return { note, excerpt };
    })
    .filter(Boolean)
    .slice(0, 8);

  searchResults.hidden = false;
  searchResults.innerHTML = `
    <p class="toc-title">${results.length} Search Result${results.length === 1 ? "" : "s"}</p>
    ${results.map(({ note, excerpt }) => `
      <button class="result-item" data-slug="${note.slug}">
        <strong>Page ${String(note.pageNumber).padStart(2, "0")} — ${escapeHtml(note.title)}</strong>
        <small>${escapeHtml(excerpt.trim())}</small>
      </button>
    `).join("") || "<p>No matches found.</p>"}
  `;
}

pageNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-slug]");
  if (!button) return;
  state.currentSlug = button.dataset.slug;
  renderNote();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

searchResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-slug]");
  if (!button) return;
  state.currentSlug = button.dataset.slug;
  state.query = "";
  searchInput.value = "";
  renderSearch();
  renderNote();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderSearch();
});

renderNav();
renderNote();
