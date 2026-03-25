<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <div
    class="app-toolbar fixed right-5 top-5 z-20 flex flex-wrap gap-3 sm:right-6"
  >
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
      aria-label="Print or save the resume as a PDF"
      @click="handlePrint"
    />
  </div>

  <div
    v-if="showBackToTop"
    class="back-to-top fixed bottom-6 right-5 z-20 sm:right-6"
  >
    <action-button
      label="Top"
      :icon="mdiArrowUp"
      tone="surface"
      aria-label="Back to top"
      @click="scrollToTop"
    />
  </div>

  <main
    id="main-content"
    tabindex="-1"
    class="mx-auto flex max-w-5xl flex-col gap-8 px-5 pt-24 pb-28 sm:px-6 sm:pt-28"
  >
    <profile-section
      :name="resume.name"
      :about="resume.about"
      :social-links="resume.socialLinks"
    />
    <resume-entries-section
      title="Experience"
      :entries="resume.experiences"
      layout="timeline"
    />
    <resume-entries-section title="Education" :entries="resume.education" />
  </main>
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
import ProfileSection from "@/components/resume/ProfileSection.vue";
import ResumeEntriesSection from "@/components/resume/ResumeEntriesSection.vue";
import resume from "@/data/resume";

type Theme = "light" | "dark";

const showBackToTop = ref(false);
const theme = ref<Theme>("light");
const prefersReducedMotion = ref(false);
const hasExplicitTheme = ref(false);

let colorSchemeQuery: MediaQueryList | null = null;
let handleSystemThemeChange: ((event: MediaQueryListEvent) => void) | null =
  null;

const themeToggleLabel = computed(() =>
  theme.value === "dark" ? "Light mode" : "Dark mode",
);

const themeToggleIcon = computed(() =>
  theme.value === "dark" ? mdiWhiteBalanceSunny : mdiWeatherNight,
);

const updateThemeColor = (nextTheme: Theme) => {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (themeColorMeta instanceof HTMLMetaElement) {
    themeColorMeta.content = nextTheme === "dark" ? "#0f172a" : "#f8fafc";
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
  applyTheme(theme.value === "dark" ? "light" : "dark");
};

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

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

  if (colorSchemeQuery && handleSystemThemeChange) {
    colorSchemeQuery.removeEventListener("change", handleSystemThemeChange);
  }
});
</script>
