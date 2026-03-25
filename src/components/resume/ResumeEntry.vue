<template>
  <article class="item flex flex-col gap-4" :class="articleClass">
    <div
      v-if="layout === 'timeline'"
      aria-hidden="true"
      class="absolute left-[-2.5rem] top-1.5 h-5 w-5 rounded-full border-[5px] border-background bg-foreground"
    />

    <header class="flex flex-col">
      <h3
        class="mb-3 font-heading text-xl font-semibold leading-snug text-foreground sm:text-[1.375rem]"
      >
        {{ entry.title }}
        <span
          v-if="entryTypeLabel"
          class="ml-2 text-base font-normal text-foreground-muted"
        >
          ({{ entryTypeLabel }})
        </span>
      </h3>

      <ul
        class="info-details mb-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-foreground-muted"
        :aria-label="detailsLabel"
      >
        <li
          v-for="item in metaItems"
          :key="item.label"
          class="inline-flex items-center gap-1.5"
        >
          <svg-icon
            type="mdi"
            :path="item.icon"
            class="h-[18px] w-[18px] text-foreground-subtle"
            aria-hidden="true"
          />
          <span>{{ item.label }}</span>
        </li>

        <li class="inline-flex items-center gap-1.5">
          <svg-icon
            type="mdi"
            :path="mdiCalendar"
            class="h-[18px] w-[18px] text-foreground-subtle"
            aria-hidden="true"
          />
          <span class="flex flex-wrap items-center gap-1">
            <time :datetime="getDateTimeValue(entry.period.start)">
              {{ formatResumeDate(entry.period.start, locale) }}
            </time>
            <template v-if="entry.period.end">
              <span aria-hidden="true">-</span>
              <time :datetime="getDateTimeValue(entry.period.end)">
                {{ formatResumeDate(entry.period.end, locale) }}
              </time>
            </template>
            <template v-else-if="entry.period.current">
              <span aria-hidden="true">-</span>
              <span>{{ presentLabel }}</span>
            </template>
            <span
              v-if="entry.period.durationLabel"
              class="text-foreground-subtle"
            >
              ({{ entry.period.durationLabel }})
            </span>
          </span>
        </li>
      </ul>
    </header>

    <p class="text-base leading-7 text-foreground-muted sm:text-[1.0625rem]">
      {{ entry.description }}
    </p>

    <footer v-if="sortedSkills.length">
      <ul
        class="tags-by-category flex flex-wrap gap-2"
        :aria-label="skillsLabel"
      >
        <li v-for="skill in sortedSkills" :key="skill.label" class="list-none">
          <skill-tag
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
import { mdiCalendar, mdiMapMarker, mdiOfficeBuilding } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { computed } from "vue";
import type { Locale, ResumeEntry } from "@/data/resume";
import {
  formatResumeDate,
  formatResumeType,
  getDateTimeValue,
  sortSkillsByCategory,
} from "@/utils/resume";
import SkillTag from "@/components/ui/SkillTag.vue";

const props = defineProps<{
  entry: ResumeEntry;
  locale: Locale;
  detailsLabel: string;
  presentLabel: string;
  skillsLabel: string;
  layout?: "default" | "timeline";
}>();

const articleClass = computed(() =>
  props.layout === "timeline" ? "relative" : "",
);

const metaItems = computed(() => {
  const items: Array<{ icon: string; label: string }> = [];

  if (props.entry.organization) {
    items.push({
      icon: mdiOfficeBuilding,
      label: props.entry.organization,
    });
  }

  if (props.entry.location) {
    items.push({
      icon: mdiMapMarker,
      label: props.entry.location,
    });
  }

  return items;
});

const entryTypeLabel = computed(() =>
  formatResumeType(props.entry.type, props.locale),
);

const sortedSkills = computed(() =>
  sortSkillsByCategory(props.entry.skills ?? [], props.locale),
);
</script>
