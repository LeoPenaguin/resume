<template>
  <span
    class="tag inline-flex items-center justify-center text-xs rounded-md px-2 py-0.5"
    :class="categoryClass"
    :title="category"
    role="listitem"
  >
    <svg-icon
      v-if="icon"
      type="mdi"
      :path="icon"
      class="icon w-3.5 h-3.5 mr-1"
      aria-hidden="true"
    />
    <span class="uppercase block tracking-wide">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";

const props = defineProps<{
  label: string;
  icon?: string;
  category?:
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "design"
    | "other";
}>();

const categoryClass = computed(() => {
  const colors: Record<string, string> = {
    frontend: "bg-blue-50 text-blue-700",
    backend: "bg-green-50 text-green-700",
    database: "bg-purple-50 text-purple-700",
    devops: "bg-amber-50 text-amber-800",
    design: "bg-pink-50 text-pink-700",
    other: "bg-background-muted text-foreground-muted",
  };
  return colors[props.category || "other"] || colors.other;
});
</script>
