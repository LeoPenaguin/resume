<template>
  <div class="item overflow-hidden h-fit flex flex-col items-start gap-4 min-h-full">
    <header class="flex flex-col">
      <h3 v-if="title" class="text-2xl font-semibold text-gray-800 mb-4 leading-tight">
        {{ title }}
      </h3>
      <div class="tags flex flex-wrap gap-2 max-md:grid max-md:grid-cols-1">
        <base-tag
          v-if="date"
          :text="date"
          :svg-icon-path="mdiCalendar"
        />
        <base-tag
          v-if="location"
          :text="location"
          :svg-icon-path="mdiMapMarker"
        />
        <base-tag
          v-if="company"
          :text="company"
          :svg-icon-path="mdiOfficeBuilding"
        />
      </div>
    </header>
    <main class="flex-1">
      <p class="text-base text-gray-700 leading-relaxed">{{ text }}</p>
    </main>
    <footer v-if="tags" class="w-full">
      <div class="tags grid grid-cols-4 gap-2 w-full max-md:grid-cols-2">
        <div
          v-for="tag in tags"
          :key="tag.label"
        >
          <base-tag
            :svg-icon-path="tag.svgIconPath"
            :text="tag.label"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { ItemDate, Tag } from "@/typings";
import BaseTag from "./BaseTag.vue";
import { mdiMapMarker, mdiCalendar, mdiOfficeBuilding  } from '@mdi/js';

defineProps<{
  title?: string;
  text: string;
  date?: ItemDate;
  location?: string;
  company?: string;
  tags?: Tag[];
}>()
</script>
