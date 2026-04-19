import en from "@cv";
import es from "@cv-es";

export type Locale = "en" | "es";
export type Mode = "cv" | "tui" | "slides";

export const data = { en, es } as const;

export type CVData = typeof en;

export const labels: Record<Locale, Record<string, string>> = {
  en: {
    about: "About",
    experience: "Experience",
    projects: "Selected Projects",
    education: "Education",
    skills: "Technical Skills",
    languages: "Languages",
    publications: "Publications",
    present: "Present",
    web: "Web",
    email: "Email",
  },
  es: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos Destacados",
    education: "Educación",
    skills: "Habilidades Técnicas",
    languages: "Idiomas",
    publications: "Publicaciones",
    present: "Actualidad",
    web: "Web",
    email: "Email",
  },
};

export const dateLocale: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
};
