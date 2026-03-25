<template>
  <component
    :is="tag"
    v-bind="componentAttrs"
    class="action-button inline-flex items-center gap-2 rounded-full border px-4 py-2 text-base font-medium shadow-sm transition-[background-color,color,border-color,transform] duration-200 hover:-translate-y-px active:translate-y-0"
    :class="toneClass"
  >
    <svg-icon
      v-if="icon"
      type="mdi"
      :path="icon"
      class="h-[18px] w-[18px]"
      aria-hidden="true"
    />
    <span>{{ label }}</span>
    <span v-if="external" class="sr-only"> (opens in new tab)</span>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";

type ActionButtonTone = "surface" | "email" | "linkedin" | "github";

const props = withDefaults(
  defineProps<{
    label: string;
    icon?: string;
    tone?: ActionButtonTone;
    href?: string;
    external?: boolean;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    icon: undefined,
    tone: "surface",
    href: undefined,
    external: false,
    type: "button",
  },
);

const tag = computed(() => (props.href ? "a" : "button"));

const componentAttrs = computed(() =>
  props.href
    ? {
        href: props.href,
        target: props.external ? "_blank" : undefined,
        rel: props.external ? "me noopener noreferrer" : undefined,
      }
    : {
        type: props.type,
      },
);

const toneClass = computed(() => {
  const classes: Record<ActionButtonTone, string> = {
    surface: "action-button--surface",
    email: "action-button--email",
    linkedin: "action-button--linkedin",
    github: "action-button--github",
  };

  return classes[props.tone];
});
</script>
