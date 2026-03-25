<template>
  <div class="app-shell relative isolate min-h-screen">
    <a href="#main-content" class="skip-link">{{ copy.skipLink }}</a>

    <dot-field-background />

    <div
      class="app-toolbar fixed right-5 top-5 z-20 flex flex-wrap gap-3 sm:right-6"
    >
      <action-button
        :label="localeToggleLabel"
        tone="surface"
        :aria-label="localeToggleLabelAria"
        @click="toggleLocale"
      />
      <action-button
        :label="themeToggleLabel"
        :icon="themeToggleIcon"
        tone="surface"
        :aria-label="themeToggleLabel"
        :aria-pressed="theme === 'dark'"
        @click="toggleTheme"
      />
      <action-button
        label="PDF"
        :icon="mdiPrinter"
        tone="surface"
        :aria-label="copy.printResume"
        @click="handlePrint"
      />
    </div>

    <div
      v-if="showBackToTop"
      class="back-to-top fixed bottom-6 right-5 z-20 sm:right-6"
    >
      <action-button
        :label="copy.topButton"
        :icon="mdiArrowUp"
        tone="surface"
        :aria-label="copy.backToTop"
        @click="scrollToTop"
      />
    </div>

    <main
      id="main-content"
      tabindex="-1"
      class="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 px-5 pt-24 pb-28 sm:px-6 sm:pt-28"
    >
      <profile-section
        :name="resume.name"
        :about="resume.about"
        :social-links="resume.socialLinks"
        :portrait-alt="copy.portraitAlt(resume.name)"
        :social-nav-label="copy.socialNav"
        :external-link-label="copy.externalLink"
      />
      <resume-entries-section
        :title="copy.experienceSection"
        :entries="resume.experiences"
        :locale="locale"
        :details-label="copy.entryDetails"
        :present-label="copy.present"
        :skills-label="copy.skillsAndTechnologies"
        layout="timeline"
      />
      <resume-entries-section
        :title="copy.educationSection"
        :entries="resume.education"
        :locale="locale"
        :details-label="copy.entryDetails"
        :present-label="copy.present"
        :skills-label="copy.skillsAndTechnologies"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  mdiArrowUp,
  mdiPrinter,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
} from "@mdi/js";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import ActionButton from "@/components/ui/ActionButton.vue";
import DotFieldBackground from "@/components/ui/DotFieldBackground.vue";
import ProfileSection from "@/components/resume/ProfileSection.vue";
import ResumeEntriesSection from "@/components/resume/ResumeEntriesSection.vue";
import resumes, { type Locale } from "@/data/resume";
import { uiCopy } from "@/i18n";

type Theme = "light" | "dark";

const showBackToTop = ref(false);
const theme = ref<Theme>("light");
const locale = ref<Locale>("en");
const prefersReducedMotion = ref(false);
const hasExplicitTheme = ref(false);

let colorSchemeQuery: MediaQueryList | null = null;
let handleSystemThemeChange: ((event: MediaQueryListEvent) => void) | null =
  null;
let themeTransitionTimeout = 0;

const copy = computed(() => uiCopy[locale.value]);
const resume = computed(() => resumes[locale.value]);

const themeToggleLabel = computed(() =>
  theme.value === "dark" ? copy.value.lightMode : copy.value.darkMode,
);

const themeToggleIcon = computed(() =>
  theme.value === "dark" ? mdiWhiteBalanceSunny : mdiWeatherNight,
);

const localeToggleLabel = computed(() => (locale.value === "fr" ? "EN" : "FR"));

const localeToggleLabelAria = computed(() =>
  locale.value === "fr"
    ? copy.value.switchToEnglish
    : copy.value.switchToFrench,
);

const updateThemeColor = (nextTheme: Theme) => {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (themeColorMeta instanceof HTMLMetaElement) {
    themeColorMeta.content = nextTheme === "dark" ? "#0f172a" : "#f8fafc";
  }
};

const getThemeTransitionDuration = () => {
  const value = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--theme-transition-duration-ms",
    ),
  );

  return Number.isFinite(value) && value > 0 ? value : 560;
};

const updateMetaContent = (selector: string, content: string) => {
  const element = document.querySelector(selector);

  if (element instanceof HTMLMetaElement) {
    element.content = content;
  }
};

const applyLocale = (nextLocale: Locale, persist = true) => {
  locale.value = nextLocale;
  document.documentElement.lang = copy.value.htmlLang;
  document.title = copy.value.metaTitle;
  updateMetaContent('meta[name="description"]', copy.value.metaDescription);
  updateMetaContent('meta[property="og:title"]', copy.value.metaTitle);
  updateMetaContent('meta[property="og:description"]', copy.value.metaDescription);
  updateMetaContent('meta[property="og:locale"]', copy.value.ogLocale);
  updateMetaContent('meta[name="twitter:title"]', copy.value.metaTitle);
  updateMetaContent('meta[name="twitter:description"]', copy.value.metaDescription);

  if (persist) {
    window.localStorage.setItem("resume-locale", nextLocale);
  }
};

const applyTheme = (nextTheme: Theme, persist = true) => {
  theme.value = nextTheme;
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;
  updateThemeColor(nextTheme);

  if (persist) {
    hasExplicitTheme.value = true;
    window.localStorage.setItem("resume-theme", nextTheme);
  }
};

const updateBackToTopVisibility = () => {
  const { scrollTop } = document.documentElement;
  showBackToTop.value = scrollTop > 320;
};

const handlePrint = () => {
  window.print();
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion.value ? "auto" : "smooth",
  });
};

const toggleTheme = () => {
  const nextTheme = theme.value === "dark" ? "light" : "dark";

  if (prefersReducedMotion.value) {
    applyTheme(nextTheme);
    return;
  }

  window.clearTimeout(themeTransitionTimeout);
  document.documentElement.dataset.themeTransition = "true";
  applyTheme(nextTheme);

  themeTransitionTimeout = window.setTimeout(() => {
    delete document.documentElement.dataset.themeTransition;
  }, getThemeTransitionDuration() + 80);
};

const toggleLocale = () => {
  applyLocale(locale.value === "fr" ? "en" : "fr");
};

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const storedLocale = window.localStorage.getItem("resume-locale");

  if (storedLocale === "en" || storedLocale === "fr") {
    applyLocale(storedLocale, false);
  } else {
    applyLocale(
      window.navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en",
      false,
    );
  }

  const storedTheme = window.localStorage.getItem("resume-theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    hasExplicitTheme.value = true;
    applyTheme(storedTheme, false);
  } else {
    colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    applyTheme(colorSchemeQuery.matches ? "dark" : "light", false);

    handleSystemThemeChange = (event) => {
      if (!hasExplicitTheme.value) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    };

    colorSchemeQuery.addEventListener("change", handleSystemThemeChange);
  }

  updateBackToTopVisibility();
  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateBackToTopVisibility);
  window.clearTimeout(themeTransitionTimeout);
  delete document.documentElement.dataset.themeTransition;

  if (colorSchemeQuery && handleSystemThemeChange) {
    colorSchemeQuery.removeEventListener("change", handleSystemThemeChange);
  }
});
</script>
