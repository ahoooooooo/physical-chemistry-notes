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

  const diagram = diagramFor(note.slug);
  noteContent.innerHTML = tagRow + diagram + markdownToHtml(removeNonCleanSections(note.body));
  renderToc();
  renderFocus(note);
  renderNav();
  history.replaceState(null, "", `?page=${note.slug}`);

  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise([noteContent, focusBox]);
  }
}

function diagramFor(slug) {
  const diagrams = {
    "page-01": {
      title: "SHM and Wave Parameters",
      caption: "Spring displacement and wave variables from the opening page.",
      svg: `
        <svg viewBox="0 0 720 260" role="img" aria-label="Simple harmonic motion and wave parameters">
          <defs>
            <marker id="arrowA" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path>
            </marker>
          </defs>
          <g class="axis">
            <path d="M48 196 H675" marker-end="url(#arrowA)"></path>
            <path d="M72 222 V28" marker-end="url(#arrowA)"></path>
          </g>
          <path class="wave copper" d="M72 126 C108 30 144 30 180 126 S252 222 288 126 S360 30 396 126 S468 222 504 126 S576 30 612 126"></path>
          <path class="guide" d="M72 126 H632"></path>
          <path class="measure" d="M180 126 V30"></path>
          <text x="188" y="68">A</text>
          <path class="measure" d="M180 232 H396"></path>
          <text x="278" y="250">λ</text>
          <text x="628" y="211">t or x</text>
          <text x="22" y="46">x(t)</text>
          <g transform="translate(480 42)">
            <rect x="0" y="0" width="150" height="58" rx="14"></rect>
            <text x="17" y="25">ω = √(k/m)</text>
            <text x="17" y="47">λν = c</text>
          </g>
        </svg>
      `
    },
    "page-02": {
      title: "EM Wave and Standing Wave",
      caption: "Electric and magnetic fields are perpendicular; standing waves arise by superposition.",
      svg: `
        <svg viewBox="0 0 720 280" role="img" aria-label="Electromagnetic wave and standing wave">
          <defs>
            <marker id="arrowB" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path>
            </marker>
          </defs>
          <g class="axis">
            <path d="M60 92 H320" marker-end="url(#arrowB)"></path>
            <path d="M84 162 V26" marker-end="url(#arrowB)"></path>
            <path d="M84 162 L42 206" marker-end="url(#arrowB)"></path>
          </g>
          <text x="325" y="97">propagation</text>
          <text x="94" y="36">E</text>
          <text x="31" y="220">B/H</text>
          <path class="wave copper" d="M70 92 C96 40 122 40 148 92 S200 144 226 92 S278 40 304 92"></path>
          <path class="wave cyan" d="M84 160 C115 197 145 197 176 160 S238 123 269 160 S331 197 362 160" transform="translate(-14 -68)"></path>
          <g transform="translate(405 32)">
            <path class="guide" d="M0 92 H250"></path>
            <path class="wave copper" d="M0 92 C34 10 68 10 102 92 S170 174 204 92 S272 10 306 92"></path>
            <path class="wave cyan" d="M0 92 C34 174 68 174 102 92 S170 10 204 92 S272 174 306 92"></path>
            <path class="wave gold thick" d="M0 92 C34 10 68 10 102 92 S170 174 204 92 S272 10 306 92"></path>
            <text x="44" y="220">y = 2A sin(kx) cos(ωt)</text>
          </g>
        </svg>
      `
    },
    "page-03": {
      title: "Fixed-End Standing Wave Modes",
      caption: "Boundary conditions force λ = 2l/n and make allowed modes discrete.",
      svg: `
        <svg viewBox="0 0 720 250" role="img" aria-label="Standing wave modes n equals 1 and 2">
          <g transform="translate(70 48)">
            <path class="guide dark" d="M0 70 H245"></path>
            <circle cx="0" cy="70" r="5"></circle><circle cx="245" cy="70" r="5"></circle>
            <path class="wave copper thick" d="M0 70 C62 -20 183 -20 245 70"></path>
            <text x="102" y="140">n = 1</text>
            <text x="74" y="162">one antinode</text>
          </g>
          <g transform="translate(395 48)">
            <path class="guide dark" d="M0 70 H245"></path>
            <circle cx="0" cy="70" r="5"></circle><circle cx="122.5" cy="70" r="5"></circle><circle cx="245" cy="70" r="5"></circle>
            <path class="wave cyan thick" d="M0 70 C31 -20 92 -20 122.5 70 S214 160 245 70"></path>
            <text x="102" y="140">n = 2</text>
            <text x="74" y="162">two antinodes</text>
          </g>
          <text x="222" y="225">Allowed wavelengths: λₙ = 2l / n</text>
        </svg>
      `
    },
    "page-05": {
      title: "Blackbody Spectrum",
      caption: "Higher temperature raises intensity and shifts the peak toward higher frequency.",
      svg: `
        <svg viewBox="0 0 720 300" role="img" aria-label="Blackbody spectrum curves">
          <defs><marker id="arrowC" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <g class="axis"><path d="M70 238 H650" marker-end="url(#arrowC)"></path><path d="M70 238 V38" marker-end="url(#arrowC)"></path></g>
          <path class="wave muted" d="M80 232 C150 210 190 175 242 134 C286 104 334 121 392 158 C440 188 508 211 620 224"></path>
          <path class="wave cyan thick" d="M80 228 C150 204 216 134 274 86 C330 40 388 83 452 134 C506 177 568 205 636 217"></path>
          <path class="wave copper thick" d="M80 224 C166 188 236 94 300 54 C362 16 430 74 488 124 C540 170 590 197 642 209"></path>
          <text x="98" y="64">ρν</text>
          <text x="625" y="260">ν</text>
          <text x="455" y="67">T ↑</text>
          <path class="measure" d="M410 72 L482 48" marker-end="url(#arrowC)"></path>
        </svg>
      `
    },
    "page-04": {
      title: "Wavelength vs Structure Size",
      caption: "Diffraction becomes important when wavelength is comparable to aperture, obstacle, or spacing.",
      svg: `
        <svg viewBox="0 0 720 280" role="img" aria-label="Wavelength compared with object size and spacing">
          <defs><marker id="arrowK" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <path class="ray" d="M52 76 H240" marker-end="url(#arrowK)"></path>
          <path class="ray" d="M52 140 H240" marker-end="url(#arrowK)"></path>
          <path class="ray" d="M52 204 H240" marker-end="url(#arrowK)"></path>
          <g transform="translate(288 48)">
            <circle class="nucleus" cx="42" cy="92" r="28"></circle>
            <circle class="nucleus" cx="126" cy="92" r="28"></circle>
            <circle class="nucleus" cx="210" cy="92" r="28"></circle>
            <path class="measure" d="M42 40 H126"></path>
            <text x="76" y="30">d</text>
            <path class="measure" d="M16 92 H68"></path>
            <text x="29" y="133">δ</text>
          </g>
          <path class="wave copper thick" d="M488 140 C524 84 560 84 596 140 S668 196 704 140"></path>
          <text x="70" y="42">λ &lt; d: transmission approx.</text>
          <text x="70" y="242">λ ≈ d or δ: diffraction / scattering</text>
        </svg>
      `
    },
    "page-07": {
      title: "Planck vs Rayleigh-Jeans",
      caption: "Classical theory diverges at high frequency; Planck's result remains finite.",
      svg: `
        <svg viewBox="0 0 720 300" role="img" aria-label="Planck result compared with Rayleigh Jeans">
          <defs><marker id="arrowD" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <g class="axis"><path d="M70 238 H650" marker-end="url(#arrowD)"></path><path d="M70 238 V38" marker-end="url(#arrowD)"></path></g>
          <path class="wave copper thick" d="M78 230 C155 192 245 72 330 68 C428 62 504 172 636 216"></path>
          <path class="wave cyan thick" d="M78 234 C210 190 360 122 640 36"></path>
          <text x="430" y="176">Planck</text>
          <text x="474" y="76">Rayleigh–Jeans</text>
          <text x="96" y="58">ρν</text>
          <text x="626" y="260">ν</text>
          <text x="442" y="38">ultraviolet catastrophe</text>
        </svg>
      `
    },
    "page-09": {
      title: "Photoelectric Effect",
      caption: "Threshold frequency exists; frequency controls kinetic energy, intensity controls photoelectron count.",
      svg: `
        <svg viewBox="0 0 720 280" role="img" aria-label="Photoelectric effect">
          <defs><marker id="arrowE" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <g transform="translate(42 38)">
            <rect class="metal" x="214" y="38" width="55" height="150" rx="10"></rect>
            <path class="ray" d="M10 68 L198 76" marker-end="url(#arrowE)"></path>
            <path class="ray" d="M10 126 L198 126" marker-end="url(#arrowE)"></path>
            <path class="ray" d="M10 176 L198 160" marker-end="url(#arrowE)"></path>
            <path class="electron" d="M272 74 C318 42 358 38 416 52" marker-end="url(#arrowE)"></path>
            <path class="electron" d="M272 126 C330 116 366 126 426 146" marker-end="url(#arrowE)"></path>
            <text x="16" y="30">E = hν</text>
            <text x="202" y="216">φ = hν₀</text>
          </g>
          <g transform="translate(500 26)">
            <path class="axis" d="M0 64 H150 M0 64 V8"></path>
            <path class="wave copper" d="M12 54 H140"></path>
            <text x="8" y="90">K.E. vs intensity</text>
            <path class="axis" d="M0 148 H150 M0 148 V92"></path>
            <path class="wave cyan" d="M26 148 H58 L140 102"></path>
            <text x="46" y="166">ν₀</text>
            <text x="8" y="188">Kmax vs ν</text>
            <path class="axis" d="M0 232 H150 M0 232 V176"></path>
            <path class="wave gold" d="M8 226 L140 184"></path>
            <text x="0" y="258">photoelectrons vs intensity</text>
          </g>
        </svg>
      `
    },
    "page-10": {
      title: "Compton Scattering",
      caption: "A photon loses energy to a recoil electron, so λf > λi.",
      svg: `
        <svg viewBox="0 0 720 280" role="img" aria-label="Compton scattering">
          <defs><marker id="arrowF" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <circle class="electron-dot" cx="350" cy="140" r="18"></circle>
          <path class="ray" d="M70 140 H320" marker-end="url(#arrowF)"></path>
          <path class="ray copper" d="M372 132 C450 90 524 72 642 70" marker-end="url(#arrowF)"></path>
          <path class="electron" d="M366 154 C430 190 486 216 586 230" marker-end="url(#arrowF)"></path>
          <path class="measure" d="M425 110 A80 80 0 0 1 450 178"></path>
          <text x="82" y="126">incident photon λi</text>
          <text x="508" y="56">scattered photon λf &gt; λi</text>
          <text x="482" y="228">recoil electron</text>
          <text x="430" y="150">θ</text>
          <text x="234" y="252">Δλ = h/(mₑc)(1 − cos θ)</text>
        </svg>
      `
    },
    "page-11": {
      title: "Bohr Orbit",
      caption: "Coulomb attraction supplies the centripetal force; allowed radii scale as n²/Z.",
      svg: `
        <svg viewBox="0 0 720 280" role="img" aria-label="Bohr atomic orbit">
          <defs><marker id="arrowG" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <circle class="orbit" cx="360" cy="140" r="62"></circle>
          <circle class="orbit" cx="360" cy="140" r="112"></circle>
          <circle class="nucleus" cx="360" cy="140" r="24"></circle>
          <circle class="electron-dot" cx="472" cy="140" r="12"></circle>
          <path class="measure" d="M360 140 H472" marker-end="url(#arrowG)"></path>
          <path class="electron" d="M472 140 A112 112 0 0 1 437 221" marker-end="url(#arrowG)"></path>
          <text x="338" y="147">+Ze</text>
          <text x="410" y="126">rₙ</text>
          <text x="488" y="136">e⁻</text>
          <text x="210" y="252">rₙ = (n²/Z)a₀,  mvr = nℏ</text>
        </svg>
      `
    },
    "page-14": {
      title: "Matter Wave Scale",
      caption: "A 100 V electron has λ ≈ 1.23 Å, comparable to atomic distances.",
      svg: `
        <svg viewBox="0 0 720 260" role="img" aria-label="de Broglie wavelength of electron">
          <defs><marker id="arrowH" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <path class="axis" d="M70 132 H650" marker-end="url(#arrowH)"></path>
          <circle class="electron-dot" cx="120" cy="132" r="14"></circle>
          <path class="wave copper thick" d="M160 132 C190 82 220 82 250 132 S310 182 340 132 S400 82 430 132 S490 182 520 132 S580 82 610 132"></path>
          <path class="measure" d="M250 202 H430"></path>
          <text x="326" y="224">λ ≈ 1.23 Å</text>
          <text x="84" y="100">100 V e⁻</text>
          <text x="450" y="72">atomic-scale wave behavior</text>
        </svg>
      `
    },
    "page-15": {
      title: "Electron Standing Wave and Uncertainty",
      caption: "Allowed Bohr orbits match integer de Broglie wavelengths; measurement trades position for momentum.",
      svg: `
        <svg viewBox="0 0 720 300" role="img" aria-label="Standing wave orbit and uncertainty tradeoff">
          <defs><marker id="arrowI" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <g transform="translate(70 40)">
            <circle class="orbit" cx="110" cy="110" r="82"></circle>
            <path class="wave copper thick" d="M28 110 C50 30 92 30 110 110 S170 190 192 110 S132 30 110 110 S50 190 28 110"></path>
            <text x="40" y="224">2πr = nλ</text>
          </g>
          <g transform="translate(360 42)">
            <path class="ray" d="M0 54 H210" marker-end="url(#arrowI)"></path>
            <text x="0" y="34">short λ: position ↑</text>
            <text x="72" y="82">momentum disturbance ↑</text>
            <path class="ray cyan" d="M0 164 C58 132 130 196 210 154" marker-end="url(#arrowI)"></path>
            <text x="0" y="142">long λ: disturbance ↓</text>
            <text x="78" y="194">position resolution ↓</text>
          </g>
        </svg>
      `
    },
    "page-16": {
      title: "Uncertainty Relations",
      caption: "Conjugate quantities cannot both have arbitrarily small uncertainty.",
      svg: `
        <svg viewBox="0 0 720 260" role="img" aria-label="Uncertainty relation cards">
          <g class="uncertainty-card" transform="translate(58 44)">
            <rect x="0" y="0" width="260" height="72" rx="18"></rect>
            <text x="28" y="43">Δx Δp ≥ ℏ / 2</text>
          </g>
          <g class="uncertainty-card" transform="translate(400 44)">
            <rect x="0" y="0" width="260" height="72" rx="18"></rect>
            <text x="28" y="43">ΔE Δt ≥ ℏ / 2</text>
          </g>
          <g class="uncertainty-card" transform="translate(58 150)">
            <rect x="0" y="0" width="260" height="72" rx="18"></rect>
            <text x="28" y="43">Δx Δv ≥ ℏ / 2m</text>
          </g>
          <g class="uncertainty-card" transform="translate(400 150)">
            <rect x="0" y="0" width="260" height="72" rx="18"></rect>
            <text x="28" y="43">Δφ ΔL ≥ ℏ / 2</text>
          </g>
        </svg>
      `
    },
    "page-17": {
      title: "Natural Linewidth",
      caption: "Short excited-state lifetime produces large energy uncertainty and broader spectral lines.",
      svg: `
        <svg viewBox="0 0 720 280" role="img" aria-label="Spectral line broadening from short lifetime">
          <defs><marker id="arrowJ" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"></path></marker></defs>
          <g class="axis"><path d="M70 220 H650" marker-end="url(#arrowJ)"></path><path d="M70 220 V42" marker-end="url(#arrowJ)"></path></g>
          <path class="wave cyan thick" d="M120 220 C205 218 246 206 286 108 C310 48 336 48 360 108 C400 206 442 218 528 220"></path>
          <path class="wave copper thick" d="M390 220 C438 216 468 188 492 124 C516 62 548 62 572 124 C596 188 626 216 674 220"></path>
          <text x="278" y="44">short lifetime → broader line</text>
          <text x="612" y="244">ν</text>
          <text x="92" y="58">intensity</text>
        </svg>
      `
    }
  };

  const diagram = diagrams[slug];
  if (!diagram) return "";

  return `
    <section class="concept-diagram">
      <div class="diagram-copy">
        <span>Concept Figure</span>
        <h2>${escapeHtml(diagram.title)}</h2>
        <p>${escapeHtml(diagram.caption)}</p>
      </div>
      <div class="diagram-art">${diagram.svg}</div>
    </section>
  `;
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
