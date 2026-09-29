# CV web: dark by default, touch mode switcher, no titles

## Objective
Make the web CV (`/cv`) the complete master CV, presented the same way as the new fullfran.com home, with a nicer dark look by default, the classic light "cv" look one tap away, and controls that work without a keyboard.

## Scope (authorized 2026-09-29)
- Content (`public/cv.json`, `public/cv-es.json`): remove "Lead" and similar self-granted titles/roles ("Lead AI Engineer", "Responsable del dominio"), aligned with the home ("llevo la IA en Hagalink"). Hagalink position becomes "Ingeniero de IA" / "AI Engineer" (same as BlakIA in #11). Keep every entry: it stays the master CV.
- Look: new default dark theme matching fullfran.com (Tokyo Night palette); existing `cv` (light, printable), `tui` and `slides` modes stay available.
- Controls: visible buttons for mode and language, usable on mobile; a button back to fullfran.com.
- Print always uses the light cv styles.

## Constraints
- No invented facts; no em dash in copy; peninsular Spanish.
- TDD: global strict TDD is on but the project has no test runner; checks are `npm run build` + rendered visual check (desktop/mobile, each mode, print).

## Tasks
- [x] T1 Content: remove titles, align header and summary (route: delegated writer, same unit as T2)
- [x] T2 Dark default theme, touch mode/lang switcher, back link (route: delegated writer, trigger: 3+ non-trivial files)
- [x] T3 Build + visual check (desktop/mobile, dark/cv/tui/slides, print)
- [x] T4 PR, merge to main, confirm Pages deploy
- [x] T5 Returning visitors stuck in light mode: old code saved `cv:mode=cv` on every load; bump the storage key so the new dark default applies (route: delegated writer, same unit as T6)
- [x] T6 Polish the default dark mode so it feels like the home (terminal prompt, `~/` section headings, richer timeline and cards)

## Evidence
- T1: label "Físico · Ingeniero de IA", Hagalink position "Ingeniero de IA"/"AI Engineer", summary "Llevo la IA en Hagalink"/"I run the AI side at Hagalink", two Hagalink highlights drop "Own the AI/ML domain". Remaining hits only "lead capture"/"captación de leads" (sales). No entry removed.
- T2: `dark` default mode (Tokyo Night), no-flash head script, ControlBar (back to fullfran.com, Dark/CV/TUI/Slides, EN/ES, PDF), print forced to light cv.
- T3: browser check 1440 and 390: default dark, each button switches mode, lang switch, mode+lang persist on reload, overflow 0, no page errors. Print: pre-existing bug on main (section `break-inside: avoid` left page 1 nearly blank, skip link printed) fixed: 4 -> 3 pages, entries kept whole. Keyboard hints hidden on touch/narrow screens.
- T4: PR #12 squash-merged (fd7b4f4), Pages run 36499441217 success, live /cv/ serves data-mode="dark", "Ingeniero de IA", back link; "Lead AI" absent.
- T5: mode key bumped to `cv:mode:v2` (head script + KeyboardManager), no storage write on load. Browser: visitor seeded with old `cv:mode=cv` now gets dark; `cv:mode:v2` stays null after load, set only on click.
- T6: dark mode polish (prompt line, cv.md window bar, `~/section` headings, gradient timeline with green current dots, hover lift, tinted skill groups). Checked 1440 and 390, cv mode unchanged, overflow 0, print 3 pages, no page errors.
