import { defineStore } from "pinia";
import { ref } from "vue";
import type { Experience, Tag } from "@/typings";
import i18n from "../i18n/index.js";
import skill from "@/services/skills";

const { t } = i18n.global;

// Date utilities
const createDateFormat = {
  month: (count: number) => `${count} ${t("date.month")}`,
  months: {
    january: t("date.january"),
    march: t("date.march"),
    may: t("date.may"),
    december: t("date.december"),
  },
} as const;

// Experience factory
const createExperience = (
  title: string,
  company: string,
  location: string,
  date: { from: string; to?: string; duration?: string },
  context: string,
  skills: Tag[] = [],
  primary = false,
  type?: string,
): Experience => ({
  primary,
  title,
  company,
  location,
  date,
  context: t(context),
  ...(skills.length && { skills }),
  ...(type && { type: t(type) }),
});

export const useExperienceStore = defineStore("experience", () => {
  const experiences = ref<Experience[]>([
    createExperience(
      "Frontend developer",
      "Bedrock Streaming",
      "Lyon, France",
      { from: "2022", to: "now" },
      "experience.context.bedrock",
      [
        skill.vue, skill.jest, skill.cypress, skill.pinia,
        skill.css, skill.tailwind, skill.figma, skill.gha,
        skill.github, skill.git, skill.scrumEvents,
      ],
      true,
    ),
    createExperience(
      "Frontend developer",
      "Ubitransport",
      "Lyon, France",
      { from: "2021", to: "2022" },
      "experience.context.ubitransport",
      [
        skill.vue, skill.jest, skill.gitlab,
        skill.git, skill.jenkins, skill.scrumEvents,
      ],
      true,
    ),
    createExperience(
      "Fullstack developer",
      "Smart Mobile Factory GmBH",
      "Berlin, Germany",
      { from: "2018", to: "2021" },
      "experience.context.smf",
      [
        skill.vue, skill.angular, skill.unitTest, skill.php,
        skill.symfony, skill.phpUnit, skill.go, skill.wordpress,
        skill.postgresql, skill.mysql, skill.git, skill.github,
        skill.jenkins, skill.scrumEvents,
      ],
      true,
    ),
    createExperience(
      "JAVA developer",
      "Crédit Agricole",
      "Grenoble, France",
      { from: "2016", to: "2018" },
      "experience.context.cats",
      [
        skill.soap,
        skill.java,
        skill.redis,
      ],
      false,
      "experience.type.sandwichcourse",
    ),
    createExperience(
      "C# developer",
      "HM Clause",
      "Valence, France",
      { from: "2015", to: "2016" },
      "experience.context.hmclause",
      [
        skill.csharp,
        skill.windowsForm,
        skill.postgresql,
        skill.sql,
      ],
      false,
      "experience.type.sandwichcourse",
    ),
    createExperience(
      "Web developer",
      "Mediacraft",
      "Grenoble, France",
      { from: `${createDateFormat.months.march} 2015`, duration: createDateFormat.month(6) },
      "experience.context.mediacraft",
      [],
      false,
      "experience.type.internship",
    ),
    createExperience(
      "Backend developer",
      "Smart Mobile Factory",
      "Berlin, Germany",
      { from: `${createDateFormat.months.march} 2014`, duration: createDateFormat.month(6) },
      "experience.context.smf2014",
      [],
      false,
      "experience.type.internship",
    ),
    createExperience(
      "Backend developer",
      "Crédit Agricole",
      "Valence, France",
      { from: `${createDateFormat.months.january} 2013`, duration: createDateFormat.month(1) },
      "experience.context.cats2013",
      [],
      false,
      "experience.type.internship",
    ),
    createExperience(
      "Backend developer",
      "Agentur Webfox",
      "Berlin, Germany",
      { from: `${createDateFormat.months.may} 2012`, duration: createDateFormat.month(3) },
      "experience.context.webfox",
      [],
      false,
      "experience.type.internship",
    ),
    createExperience(
      "Designer",
      "SVD Studio",
      "Valence, France",
      { from: `${createDateFormat.months.december} 2007`, duration: createDateFormat.month(1) },
      "experience.context.svd",
      [],
      false,
      "experience.type.internship",
    ),
    createExperience(
      "Computer technician",
      "By Micro",
      "Romans, France",
      { from: `${createDateFormat.months.december} 2006`, duration: createDateFormat.month(1) },
      "experience.context.bymicro",
      [],
      false,
      "experience.type.internship",
    ),
  ]);

  return {
    experiences,
  };
});
