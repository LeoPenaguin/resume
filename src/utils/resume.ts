import type {
  ResumeDate,
  ResumeEntryType,
  Skill,
  SkillCategory,
} from "@/data/resume";
import { SKILL_CATEGORY_ORDER } from "@/data/resume";

const monthFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  year: "numeric",
});

const skillCategoryIndex = SKILL_CATEGORY_ORDER.reduce(
  (accumulator, category, index) => {
    accumulator[category] = index;
    return accumulator;
  },
  {} as Record<SkillCategory, number>,
);

export const formatResumeDate = (date: ResumeDate) => {
  if (date.precision === "year") {
    return date.value;
  }

  const [year, month] = date.value.split("-").map(Number);
  return monthFormatter.format(new Date(Date.UTC(year, month - 1, 1)));
};

export const getDateTimeValue = (date: ResumeDate) =>
  date.precision === "month" ? `${date.value}-01` : date.value;

export const sortSkillsByCategory = (skills: Skill[]) =>
  [...skills].sort((left, right) => {
    const categoryDelta =
      skillCategoryIndex[left.category] - skillCategoryIndex[right.category];

    if (categoryDelta !== 0) {
      return categoryDelta;
    }

    return left.label.localeCompare(right.label);
  });

export const formatResumeType = (type?: ResumeEntryType) => {
  if (type === "internship") {
    return "Internship";
  }

  if (type === "work-study") {
    return "Work-study";
  }

  return "";
};
