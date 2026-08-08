# Offer history

What has been applied to, what was answered, and what each one revealed.
Update this whenever a new offer is worked on — the recurring-gap column is the
most useful thing in the file.

Last updated: 8 August 2026.

---

## Applied or in progress

| Empresa | Puesto | CV usado | Pedido | Hueco que expuso |
|---|---|---|---|---|
| **Secture** | Ingeniero AI (remoto) | Ingeniero-IA | — | LangGraph, MCP, Docker, cloud |
| **PrimeIT España** | Data Scientist | Data-Scientist | 46.000 € | Justificar los 6 años declarados |
| **Sngular** | AI Engineer (remoto) | Ingeniero-IA | 45.000 € | **Cloud: contestó "No"** |
| **COTESA** | Desarrollador IA | Desarrollador-IA | — | Java + Spring |
| **The Whiteam** | AI Engineer (LLMs) | Ingeniero-IA | 46.861 € / 400 €·día | GCP / Vertex AI |

Plus an unknown number of LinkedIn Easy Apply submissions never logged. The
authoritative list is at `linkedin.com/my-items/saved-jobs/` → *Solicitadas*.

Full tracker: `~/Descargas/candidaturas-2026-08.md`.

---

## The recurring gap

**Cloud appeared in three of five offers.** In The Whiteam it sits under
*Requisitos*, not *valorable*.

It is the only technical gap that repeats, and it is not a capability problem:
he runs production deployments daily with Docker, Traefik and CI/CD, and uses
Dokploy — a self-hosted PaaS, so he already holds the mental model. What is
missing is **a deployment he can link to**.

The fix, still pending: push `Hybrid-RAG-example` or `feedpulse` to Cloud Run
or Azure Container Apps with Docker and CI/CD, and document it. Cloud Run's
perpetual free tier scales to zero — a demo visited three times a month costs
nothing. He avoided cloud believing it was expensive; the correction is that
what costs money is leaving things *running*, not deploying.

---

## Per-offer notes worth keeping

**Secture** — culture line: *"personas que no solo utilicen herramientas de IA,
sino que disfruten entendiendo cómo funcionan"*. That sentence is written for a
physicist; the cover letter answers it directly. Wanted LangGraph and MCP as
nice-to-haves — **both are actually held**, which was missed on the first pass.

**COTESA** — remote sensing. The strongest differentiated fit of the five:
teledetección *is* radiative transfer, and `snow-mcrt` is a forward model of
exactly that signal. Java/Spring is a whole block of the job and is absent —
handle in interview via NestJS + Clean Architecture, never on the CV. Contact:
**Marcos Herráez**, Data Scientist – Graduate, 1st degree. Messaged asking
whether the offer is still live (it had been posted ~5 months).
**Not yet submitted.** Applications go through their own portal, not LinkedIn.

**The Whiteam** — best pure skills match. Conversational agents, WhatsApp,
guardrails, observability, evaluation: all held. Asks about **EU Security
Clearance**, which means they staff European institutional projects — relevant
given his public-sector work. Ask which end client the project is for.

**Sngular** — his LinkedIn lists "Google Cloud" as a skill while he answered
"No" to their cloud question. **Unresolved contradiction**: either the answer
was too conservative or the skill should come off LinkedIn.

**PrimeIT** — published range 40.000–50.000. He initially entered 40.000, the
floor. Corrected to 46.000.

---

## LinkedIn profile — pending fixes

Audited 7 Aug. Still outstanding as far as is known:

1. 🔴 **Position reads `CDS`** — an abbreviation nobody knows, and invisible to
   recruiter title searches. → `Data Scientist & Lead AI Engineer`
2. Headline has no searchable keywords
3. Typos live on the profile: "Freelance Data **Analist**"; duplicate skill
   "Large **lenguage** models"
4. Languages section empty
5. Grado en Física missing from education
6. "Cofundador" of BlakIA vs "Fundador" on the CV
7. Six roles with no description — precisely the ones that would evidence the
   declared years
8. Skills missing SQL, PostgreSQL, pandas, scikit-learn, PyTorch

None of the CV work matters much while the first one stands.
