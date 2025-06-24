# 🌿 Astro-Based Minimalist Portfolio Web CV

This is a **modern, minimal, and ultra-fast** portfolio web CV built with [Astro](https://astro.build), showcasing best practices in performance, accessibility, and reusable content.

---

## 🚀 Why Astro?

- **Lightning-fast static sites**—Astro ships zero JavaScript by default, delivering only essential, fast-loading HTML :contentReference[oaicite:1]{index=1}.
- **Island architecture** means interactive parts are loaded *only where needed*—ideal for a streamlined CV.
- **Framework-agnostic**: mix React, Vue, Svelte or plain HTML—all in a single site :contentReference[oaicite:2]{index=2}.

---

## 💡 Key Features

- **Minimal & print-ready layout**: A4‑like structure, optimized for screen and PDF export.
- **Data-driven content**: Loads via a JSON Resume schema (`resume.json`) compliant with the [JSON Resume standard](https://jsonresume.org) :contentReference[oaicite:3]{index=3}.
- **Two-column skills + language sections**: Clean, structured display of technical and language skills.
- **Reusable components**: Sections like `About`, `Experience`, `Education`, etc., are dynamic and maintainable.

---

## 🛠️ Tech Stack & Architecture

- **Astro**: Static site generation with zero JS by default.
- **Tailwind CSS**: Utility-first styling for a clean, responsive design.
- **JSON Resume**: Standard schema defines all content—name, work, education, skills, languages.
- **GitHub Pages**: Automated deployment using `withastro/action` and `deploy-pages` via GitHub Actions.

---

## 🧩 Quick Start

```sh
git clone https://github.com/FullFran/cv.git
cd cv
npm install
npm run dev      # local dev server
npm run build
npm run preview
````

---

## 📚 Learn More

* Check out the **[JSON Resume schema](https://jsonresume.org/schema/)** to customize your data.
* See **Astro docs** for component islands, content collection, SEO, etc.

---

✅ This portfolio is perfect for:

* Developers seeking a **fast, datadriven site**
* Anyone needing a **print-ready, A4‑styled digital CV**
* Technical users who **value maintainability and standards compliance**



