import { defineStore } from "pinia";
import { ref } from "vue";
import type { School } from "@/typings";
import i18n from "../i18n/index.js";

const { t } = i18n.global;

// School factory
const createSchool = (
  date: { from: string; duration?: string },
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
      { from: "January 2019", duration: "2 years" },
      "master",
      "master",
      "EPSI Grenoble, France",
    ),
    createSchool(
      { from: "October 2018" },
      "toeic",
      "toeic",
      "EPSI Grenoble, France",
    ),
    createSchool(
      { from: "January 2016", duration: "3 years" },
      "bachelor",
      "bachelor",
      "EPSI Grenoble, France",
    ),
    createSchool(
      { from: "October 2013", duration: "2 years" },
      "deust",
      "deust",
      "Limoges, France",
    ),
    createSchool(
      { from: "January 2013", duration: "2 years" },
      "bts",
      "bts",
      "Valence, France",
    ),
    createSchool(
      { from: "January 2011" },
      "bac",
      "bac",
      "Valence, France",
    ),
  ]);

  return {
    schools,
  };
});
