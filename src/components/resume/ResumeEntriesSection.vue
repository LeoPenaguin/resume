<template>
  <resume-section :title="title">
    <div :class="wrapperClass">
      <div
        v-if="layout === 'timeline'"
        aria-hidden="true"
        class="absolute bottom-2 left-[1.125rem] top-2 w-px bg-border"
      />

      <ol class="m-0 grid list-none gap-8 p-0">
        <li v-for="entry in entries" :key="entry.id" class="list-none">
          <resume-entry :entry="entry" :layout="layout" />
        </li>
      </ol>
    </div>
  </resume-section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ResumeEntry as ResumeEntryData } from "@/data/resume";
import ResumeEntry from "./ResumeEntry.vue";
import ResumeSection from "./ResumeSection.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    entries: ResumeEntryData[];
    layout?: "default" | "timeline";
  }>(),
  {
    layout: "default",
  },
);

const wrapperClass = computed(() =>
  props.layout === "timeline" ? "relative grid gap-8 pl-12" : "grid gap-8",
);
</script>
