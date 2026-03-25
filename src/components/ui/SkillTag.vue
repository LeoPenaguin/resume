<template>
  <span
    class="tag inline-flex items-center justify-center rounded-md px-2.5 py-1 text-sm"
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
    frontend: "bg-blue-50 text-blue-700",
    backend: "bg-green-50 text-green-700",
    database: "bg-purple-50 text-purple-700",
    devops: "bg-amber-50 text-amber-800",
    design: "bg-pink-50 text-pink-700",
    other: "bg-background-muted text-foreground-muted",
  };

  return colors[props.category || "other"];
});
</script>
