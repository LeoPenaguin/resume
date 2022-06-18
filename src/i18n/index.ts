import locales from "./locales";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  legacy: false,
  messages: locales,
  globalInjection: true,
});

export default i18n;
