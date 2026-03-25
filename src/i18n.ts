import type { Locale } from "@/data/resume";

export type UiCopy = {
  skipLink: string;
  experienceSection: string;
  educationSection: string;
  lightMode: string;
  darkMode: string;
  printResume: string;
  topButton: string;
  backToTop: string;
  switchToFrench: string;
  switchToEnglish: string;
  socialNav: string;
  externalLink: string;
  entryDetails: string;
  skillsAndTechnologies: string;
  present: string;
  portraitAlt: (name: string) => string;
  metaTitle: string;
  metaDescription: string;
  htmlLang: Locale;
  ogLocale: string;
};

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    skipLink: "Skip to main content",
    experienceSection: "Experience",
    educationSection: "Education",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    printResume: "Print or save the resume as a PDF",
    topButton: "Top",
    backToTop: "Back to top",
    switchToFrench: "Switch language to French",
    switchToEnglish: "Switch language to English",
    socialNav: "Contact and social links",
    externalLink: "(opens in new tab)",
    entryDetails: "Resume entry details",
    skillsAndTechnologies: "Skills and technologies",
    present: "Present",
    portraitAlt: (name) => `Portrait of ${name}`,
    metaTitle: "Léo Penaguin | Full Stack Developer Resume",
    metaDescription:
      "Resume of Léo Penaguin, full stack developer focused on frontend engineering, clean architecture, and product UX.",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  fr: {
    skipLink: "Aller au contenu principal",
    experienceSection: "Expérience",
    educationSection: "Formation",
    lightMode: "Mode clair",
    darkMode: "Mode sombre",
    printResume: "Imprimer ou enregistrer le CV en PDF",
    topButton: "Haut",
    backToTop: "Retour en haut",
    switchToFrench: "Passer le site en français",
    switchToEnglish: "Passer le site en anglais",
    socialNav: "Liens de contact et réseaux",
    externalLink: "(ouvre dans un nouvel onglet)",
    entryDetails: "Détails de l'entrée du CV",
    skillsAndTechnologies: "Compétences et technologies",
    present: "Aujourd'hui",
    portraitAlt: (name) => `Portrait de ${name}`,
    metaTitle: "Léo Penaguin | CV Développeur Full Stack",
    metaDescription:
      "CV de Léo Penaguin, développeur full stack spécialisé en ingénierie frontend, architecture propre et expérience produit.",
    htmlLang: "fr",
    ogLocale: "fr_FR",
  },
};
