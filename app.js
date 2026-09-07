const root = document.documentElement;
const themeBtn = document.querySelector('[data-el="theme-btn"]');
const themeIconUse = document.querySelector('[data-el="theme-icon-use"]');
const themeLabel = document.querySelector('[data-el="theme-label"]');
const backToTop = document.querySelector(".back-to-top");

let hasExplicitTheme = false;
let themeTransitionTimeout = 0;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getThemeTransitionDuration = () => {
  const value = Number.parseFloat(
    getComputedStyle(root).getPropertyValue("--theme-transition-duration-ms"),
  );

  return Number.isFinite(value) && value > 0 ? value : 560;
};

const applyTheme = (theme, persist = true) => {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.content = theme === "dark" ? "#0f172a" : "#f8fafc";
  }

  const label = theme === "dark" ? "Light mode" : "Dark mode";
  themeLabel.textContent = label;
  themeBtn.setAttribute("aria-label", label);
  themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
  themeIconUse.setAttribute(
    "href",
    theme === "dark" ? "/icons.svg#white-balance-sunny" : "/icons.svg#weather-night",
  );

  if (persist) {
    hasExplicitTheme = true;
    window.localStorage.setItem("resume-theme", theme);
  }
};

const toggleTheme = () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

  if (prefersReducedMotion) {
    applyTheme(nextTheme);
    return;
  }

  window.clearTimeout(themeTransitionTimeout);
  root.dataset.themeTransition = "true";
  applyTheme(nextTheme);

  themeTransitionTimeout = window.setTimeout(() => {
    delete root.dataset.themeTransition;
  }, getThemeTransitionDuration() + 80);
};

const updateBackToTopVisibility = () => {
  backToTop.classList.toggle("hidden", root.scrollTop <= 320);
};

const ACTIONS = {
  "toggle-theme": toggleTheme,
  print: () => window.print(),
  "scroll-top": () =>
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }),
};

document.addEventListener("click", (event) => {
  const action = event.target.closest?.("[data-action]")?.dataset.action;

  if (action) {
    ACTIONS[action]?.();
  }
});

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

const storedTheme = window.localStorage.getItem("resume-theme");

if (storedTheme === "light" || storedTheme === "dark") {
  hasExplicitTheme = true;
  applyTheme(storedTheme, false);
} else {
  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  applyTheme(colorSchemeQuery.matches ? "dark" : "light", false);

  colorSchemeQuery.addEventListener("change", (event) => {
    if (!hasExplicitTheme) {
      applyTheme(event.matches ? "dark" : "light", false);
    }
  });
}

updateBackToTopVisibility();
