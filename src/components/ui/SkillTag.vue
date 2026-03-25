<template>
  <span
    class="skill-tag inline-flex items-center justify-center rounded-md border px-2.5 py-1 text-sm"
    :class="categoryClass"
  >
    <svg-icon
      v-if="icon"
      type="mdi"
      :path="icon"
      class="icon mr-1 h-4 w-4"
      aria-hidden="true"
    />
    <span class="block uppercase tracking-wide">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import type { SkillCategory } from "@/data/resume";

const props = defineProps<{
  label: string;
  icon?: string;
  category?: SkillCategory;
}>();

const categoryClass = computed(() => {
  const colors: Record<SkillCategory, string> = {
    frontend: "skill-tag--frontend",
    backend: "skill-tag--backend",
    database: "skill-tag--database",
    devops: "skill-tag--devops",
    design: "skill-tag--design",
    other: "skill-tag--other",
  };

  return colors[props.category || "other"];
});
</script>
