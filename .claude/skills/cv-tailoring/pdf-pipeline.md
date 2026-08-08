# Producing the PDF

Mechanics, templates and the tactics for keeping a CV to two pages.

---

## The toolchain, verified

| Tool | Status |
|---|---|
| **WeasyPrint 68.1** | `~/.local/bin/weasyprint`. The renderer |
| Chromium / wkhtmltopdf / pandoc | **Not installed.** Do not reach for them |
| **Fira Sans** | The only good sans on the machine. No Inter, Lato, Roboto |
| `pdftoppm`, `pdfinfo` | Available. Use them to *look* at the output |

```bash
weasyprint -e utf8 cv.html "/home/franblakia/Descargas/CV-Francisco-Olmedo-<Perfil>.pdf"
pdfinfo "<...>.pdf" | rg Pages          # must say 2
pdftoppm -png -r 70 -f 1 -l 1 "<...>.pdf" preview   # then Read the PNG
```

**Always render the preview and look at it.** Page count alone hides broken
wraps, orphaned headings and half-empty last pages.

## Output location

`/home/franblakia/Descargas` — the real downloads folder.

⚠️ `~/Downloads` also exists and is nearly empty. It is the wrong one.

## Naming

`CV-Francisco-Olmedo-<Perfil>.pdf`

**No company name.** He asked for this explicitly after the first file was
called `...-Secture.pdf`: the CVs must be reusable for the next offer without
looking recycled.

Existing variants:

| File | Focus |
|---|---|
| `CV-Francisco-Olmedo-Ingeniero-IA.pdf` | Generative AI, RAG, agents. Blue `#1d4ed8` |
| `CV-Francisco-Olmedo-Data-Scientist.pdf` | ML, data lifecycle, model evaluation. Teal `#0e7490` |
| `CV-Francisco-Olmedo-Desarrollador-IA.pdf` | Physics, remote sensing, scientific ML. Indigo `#4338ca` |

⚠️ An unrelated `CV-Francisco-Olmedo-Cortes.pdf` (4 Aug, 19 KB) also sits in
that folder, plus a stale `... (1).pdf`. Do not attach either by mistake.

---

## The template

`templates/cv-base.html` is the working AI-Engineer CV, complete. Copy it and
edit; do not rebuild from scratch.

Structure:

```
header      name, role line, contact (all one line, nowrap)
Perfil      justified paragraph, ~7 lines
Competencias  label + tag rows
Experiencia   job blocks, bulleted
Proyectos     name + link line + one-paragraph description
Formación y publicaciones   two columns
```

Key CSS decisions already solved in it:

- `@page` with a `@bottom-center` margin box for the footer
- `.contact span { white-space: nowrap }` — without it the LinkedIn handle
  breaks mid-word
- `page-break-inside: avoid` on `.job`, `.project`, `.skill-row`
- Tags are inline-block spans with `white-space: nowrap`

`templates/deck-base.html` is the 16:9 slide deck (`size: 338mm 190mm`,
`margin: 0`, dark theme, `.slide` flex-centred). Reuse it for any slides.

---

## Two pages. Always.

Three pages is a failure, not a variant. When it overflows, apply in this
order — cheapest and least damaging first:

1. **Base font and line height.** The single most effective lever.
   `9.4pt/1.42` → `9.0pt/1.33` reclaims roughly a third of a page.
2. **Vertical margins.** `section` 3.6mm → 2.6mm, `.job` 3mm → 2.2mm,
   `li` 0.9mm → 0.7mm, `.project` 1.9mm → 1.5mm.
3. **Drop the least relevant project** for this offer, or swap it for a more
   relevant one.
4. **Drop the weakest bullet.** There is always one that is generic —
   "nexo técnico con cliente", "reutilizo componentes propios".
5. **Shorten a project description** by one clause.

Never shrink below ~8.6pt: it stops reading as a document and starts reading
as a cramped one.

### Gotchas

- **`sd` with multi-line patterns silently fails.** Use Python `str.replace`
  for anything spanning newlines. This cost a debugging round.
- A `weasyprint` run that succeeds still needs `pdfinfo` checked — it will
  happily produce three pages without complaining.
- Editing a template in the scratchpad and forgetting to re-render is the most
  common mistake. Re-render, re-check the page count, re-read the preview.

---

## Keeping the web CV in sync

`public/cv.json` (EN) and `public/cv-es.json` (ES) drive
[fullfran.com/cv](https://www.fullfran.com/cv).

**They must not diverge from the PDFs.** A recruiter who compares the CV you
sent against your public one and finds different claims will doubt both.

- Rendered sections: Hero, About, Experience, Projects, Publications,
  Education, Skills. **There is no Awards section** — awards go as a highlight
  bullet inside the relevant work entry.
- `CVData = typeof en`, so the two files must stay structurally parallel.
- **Edit surgically.** A `json.load`/`json.dump` round-trip reformats every
  array and turns a 14-line change into a 138-line diff. Use targeted string
  replacement and keep `keywords` arrays on one line, `highlights` multi-line.
- `npm run build` must pass before committing.
- Deployment is GitHub Pages on push to `main`. Verify with
  `gh run list` and then fetch the live HTML to confirm the new strings.

## Git workflow for this repo

Branch, conventional commit, PR, squash-merge. **No `Co-Authored-By` and no AI
attribution** — his standing rule.

⚠️ **`gh pr merge --squash -q` can fail silently.** It happened twice in one
session; the command did nothing and the following `echo` gave false
confirmation. Always verify:

```bash
gh pr view <N> --json state --jq .state    # must say MERGED
```

⚠️ Do not commit `.atl/` — tooling output.
