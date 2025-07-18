import { defineStore } from "pinia";
import { ref } from "vue";
import type { School } from "@/typings";
import i18n from "../i18n/index.js";

const { t } = i18n.global;

// School factory
const createSchool = (
  date: { from: string; to?: string; duration?: string },
  degreeKey: string,
  descriptionKey: string,
  location: string,
  image = "",
): School => ({
  date,
  degree: t(`school.degrees.${degreeKey}.title`),
  description: t(`school.degrees.${degreeKey}.description`),
  location,
  image,
});

export const useSchoolStore = defineStore("school", () => {
  const schools = ref<School[]>([
    createSchool(
      { from: "2018", to: "2019" },
      "master",
      "master",
      "EPSI Grenoble, France",
    ),
    createSchool(
      { from: "2018" },
      "toeic",
      "toeic",
      "EPSI Grenoble, France",
    ),
    createSchool(
      { from: "2016", to: "2018" },
      "bachelor",
      "bachelor",
      "EPSI Grenoble, France",
    ),
    createSchool(
      { from: "2015", to: "2016" },
      "deust",
      "deust",
      "Université de Limoges, France",
    ),
  ]);

  return {
    schools,
  };
});
