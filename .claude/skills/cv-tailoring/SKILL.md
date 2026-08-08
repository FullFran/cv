---
name: cv-tailoring
description: "Build a CV tailored to a specific job offer for Francisco Olmedo, grounded in his verified profile. Trigger: a job offer is pasted, or a CV/cover letter is requested, adapted, or reviewed."
license: MIT
metadata:
  author: FullFran
  version: "1.0"
---

## When to Use

- A job offer is pasted and a CV is wanted for it.
- An existing CV variant needs updating or re-targeting.
- A cover letter or application-form answer is needed.
- The profile itself needs auditing against a repository or a claim.

## The one rule that outranks the others

**Never invent a capability.** Not a framework, not a cloud provider, not a
language. If it is not verified, it does not go on the CV.

The cost is asymmetric: a missing keyword loses one application, a fabricated
one loses credibility in the first technical interview and taints everything
else on the page.

Corollary, learned the hard way: **the repository is not the whole truth
either.** `public/cv-es.json` has repeatedly *undersold* him. Before writing,
ask or verify. Five capabilities were missing on the first pass:

| Missing from the JSON | Verified where |
|---|---|
| Data science and LLM/SLM evaluation at Hagalink | He said so directly |
| Docker, Docker Compose, Traefik, CI/CD, Dokploy | He said so directly |
| MCP | `training-mcp`, `vertir`, `Agent-skills-POC` — three public repos |
| LangGraph and Mastra | `blakia-agent-launchpad`, and GDR uses LangGraph.js |
| FastAPI, autoencoders, physics-informed nets | `Tesis-Francisco-Olmedo` org |

**He systematically undervalues what he finds easy.** Counteract it actively.
When he says "that's trivial" about something an offer explicitly asks for,
that is the signal to put it in, not to leave it out.

---

## Step 1 — Read the offer properly

Extract, in this order:

1. **Must-haves** — every one is a filter.
2. **Nice-to-haves** — cheap wins if genuinely held.
3. **Their exact vocabulary** — mirror it. If they write "ciclo completo del
   dato", the CV says that, not "data pipeline".
4. **The cultural sentence** — most offers contain one line about the kind of
   person they want. It is the best material for the cover letter.

## Step 2 — Map against the verified profile

See `profile.md` in this directory for the full catalogue with evidence.

Then decide: which of the three CV variants is the base, or whether the offer
warrants a new one.

## Step 3 — Reorder, do not rewrite

Tailoring is mostly **ordering**, not new prose.

- The headline names the role they are hiring for.
- The skills block leads with their must-haves.
- Experience bullets lead with the words they used.
- Projects are reordered so the most relevant opens.

## Step 4 — Keywords vs narrative

**His stated preference, respect it:**

- **Skill tags are filters.** Recruiters and ATS search them. If a technology
  is real, it goes in the tags — always.
- **Narratives are interview ammunition.** The LangGraph-to-Mastra migration
  story, product ownership, the reasoning behind a decision. Keep them *out* of
  the CV. A CV that leaves good gaps provokes the question he wants asked.

He has twice asked to cut narrative detail. Do not re-add it.

**Avoid self-congratulatory phrasing.** "Con herramientas propias, publicadas"
was cut as cringe. State the fact, name the repository, and let the reader draw
the conclusion. The CV should never sound like it is admiring itself.

## Step 5 — Honest gaps

Never claim a missing capability. Handle it in one of three ways:

1. **Leave it out** of the CV entirely (Java, Flask, TensorFlow).
2. **Offer the adjacent truth** in the cover letter: "backend en producción con
   NestJS y arquitectura hexagonal; Java/Spring no lo he usado, pero los
   patrones son los mismos".
3. **Say it plainly** when the culture rewards it: "en cloud gestionado es
   donde más margen de crecimiento tengo".

---

## Producing the PDF

See `pdf-pipeline.md` for the full mechanics, templates and page-fitting
tactics. The essentials:

- **WeasyPrint** at `~/.local/bin/weasyprint`. No Chromium, no wkhtmltopdf.
- **Fira Sans** is the only good sans installed.
- Output goes to `/home/franblakia/Descargas` — **not** `~/Downloads`, which
  exists but is nearly empty and is the wrong one.
- **Two pages, always.** Never three.
- **No company name in the filename.** He asked explicitly: the files must be
  reusable across offers.

## Cover letters

Each paragraph does a different job. Never four paragraphs asserting the same
thing:

1. **Position** — who he is, in one sentence.
2. **Prove with proper nouns** — Ayuntamiento de Córdoba, the peer-reviewed
   publication, the repository. Never "he desplegado soluciones".
3. **Answer their culture sentence** — quote it back and meet it.
4. **Verifiable evidence** — github.com/FullFran, with what is in there.

Cut every "creo que", "puede que", "considero que". Hedging in a cover letter
reads as doubt about his own work.

Peninsular Spanish, not Rioplatense — he is in Córdoba writing to Spanish
companies. This applies to every artefact, regardless of the conversation's
tone.

## Application-form answers

- **Years of experience**: "experiencia" is not "experiencia laboral". Read
  which one is asked. He counts Python and databases from 2020 (personal
  projects), professional from 2022. If a form asks the unqualified version, 6
  is honest — but prepare the sentence that reconciles it with a CV starting
  in 2022.
- **Salary**: see `profile.md`. Short version — never the floor of a published
  range; 45.000-47.000 when no range is published; 400 €/día freelance, floor
  350.
- **Freelance**: always answer "open to both". He is autónomo and a partner at
  Hagalink, so freelance suits him, but closing the employed door halves the
  opportunities for free.

---

## Reviewing projects

When an offer makes a repository relevant, or he asks whether a project is
worth doing, **verify before advising**. The discipline that has already paid
for itself twice:

> Identify the single assumption that would kill the idea, and test that first.

Concretely:
- Is there already a closed form, a library, or a published result? Search.
- Does the compute budget exist? Benchmark it, do not estimate it.
- Is the niche empty for a good reason? Empty niches usually are.

A surrogate-model project was killed in one afternoon this way — his own repo
already had a 1%-accurate closed form, the emulator was already published, and
the dataset would have cost hundreds of GPU-hours he does not have. Recorded
in `~/fullfran/ideas-proyectos.md`.

**Report negative findings plainly.** He would rather lose an idea than lose an
interview defending one.

---

## Files in this skill

| File | What it holds |
|---|---|
| `profile.md` | The verified profile catalogue, with evidence for each claim |
| `pdf-pipeline.md` | Templates, WeasyPrint mechanics, page-fitting tactics |
| `offer-history.md` | Offers already applied to, what was answered, known gaps |
