import type { Social } from "@/typings/index.js";
import { defineStore } from "pinia";
import i18n from "../i18n/index.js";

const { t } = i18n.global;

export default defineStore({
  id: "description",
  state: () => ({
    social: [
      {
        name: "mail",
        link: "mailto:PenaguinLeo@gmail.com",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/leo-penaguin",
      },
      {
        name: "github",
        link: "https://github.com/LeoPenaguin",
      },
      {
        name: "malt",
        link: "https://www.malt.fr/profile/leopenaguin",
      },
    ] as Social[],
    text: [
      t("description.presentation.introduction")
    ] as string[],
  }),
});
