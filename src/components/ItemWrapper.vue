<template>
  <article class="item flex flex-col gap-3">
    <header class="flex flex-col">
      <h3
        v-if="title"
        class="text-lg font-semibold text-foreground mb-2 font-heading"
      >
        {{ title }}
        <span
          v-if="type"
          class="text-sm font-normal text-foreground-muted ml-2"
        >
          ({{ type === "internship" ? "Internship" : "Work-study" }})
        </span>
      </h3>
      <div
        class="info-details flex items-center gap-3 mb-2 text-sm text-foreground-muted"
      >
        <div v-if="company" class="flex items-center gap-1">
          <svg-icon
            type="mdi"
            :path="mdiOfficeBuilding"
            class="w-4 h-4 text-foreground-muted"
            aria-hidden="true"
          />
          <span>{{ company }}</span>
        </div>
        <span
          v-if="company && location"
          class="text-foreground-subtle"
          aria-hidden="true"
          >•</span
        >
        <div v-if="location" class="flex items-center gap-1">
          <svg-icon
            type="mdi"
            :path="mdiMapMarker"
            class="w-4 h-4 text-foreground-muted"
            aria-hidden="true"
          />
          <span>{{ location }}</span>
        </div>
        <span
          v-if="(company || location) && from"
          class="text-foreground-subtle"
          aria-hidden="true"
          >•</span
        >
        <div v-if="from" class="flex items-center gap-1">
          <svg-icon
            type="mdi"
            :path="mdiCalendar"
            class="w-4 h-4 text-foreground-muted"
            aria-hidden="true"
          />
          <span>{{ formatDate() }}</span>
        </div>
      </div>
    </header>
    <div>
      <p class="text-sm text-foreground-muted leading-relaxed">{{ text }}</p>
    </div>
    <footer v-if="skills?.length">
      <ul class="tags-by-category" aria-label="Skills and technologies">
        <li class="all-tags inline-flex flex-wrap gap-1">
          <base-tag
            v-for="skill in sortedSkills"
            :key="skill.label"
            :icon="skill.icon"
            :label="skill.label"
            :category="skill.category"
          />
        </li>
      </ul>
    </footer>
  </article>
</template>

<script setup lang="ts">
import type { Skill } from "@/data/resume";
import BaseTag from "./BaseTag.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMapMarker, mdiCalendar, mdiOfficeBuilding } from "@mdi/js";
import { computed } from "vue";

const props = defineProps<{
  title?: string;
  text: string;
  from?: string;
  to?: string;
  duration?: string;
  location?: string;
  company?: string;
  type?: "internship" | "work-study";
  skills?: Skill[];
}>();

const formatDate = () => {
  if (props.to) {
    return `${props.from} - ${props.to}`;
  } else if (props.duration) {
    return `${props.from} (${props.duration})`;
  }
  return props.from;
};

const sortedSkills = computed(() => {
  if (!props.skills) return [];

  const categoryOrder = [
    "frontend",
    "backend",
    "database",
    "devops",
    "design",
    "other",
  ];
  const grouped: Record<string, Skill[]> = {};

  props.skills.forEach((skill) => {
    const category = skill.category || "other";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(skill);
  });

  const sorted: Skill[] = [];
  categoryOrder.forEach((category) => {
    if (grouped[category]) sorted.push(...grouped[category]);
  });

  return sorted;
});
</script>
