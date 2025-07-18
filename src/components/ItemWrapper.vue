<template>
  <div class="item flex flex-col gap-3">
    <header class="flex flex-col">
      <h3 v-if="title" class="text-xl font-semibold text-black mb-3 font-mono flex items-center gap-2">
        <span class="text-green-500">##</span>
        {{ title }}
      </h3>
      <div class="info-details flex items-center gap-3 mb-2 text-base text-gray-600">
        <div v-if="company" class="flex items-center gap-1">
          <svg-icon
            type="mdi"
            :path="mdiOfficeBuilding"
            class="w-5 h-5 text-gray-600"
          />
          <span>{{ company }}</span>
        </div>
        <span v-if="company && location" class="text-gray-400">•</span>
        <div v-if="location" class="flex items-center gap-1">
          <svg-icon
            type="mdi"
            :path="mdiMapMarker"
            class="w-5 h-5 text-gray-600"
          />
          <span>{{ location }}</span>
        </div>
        <span v-if="(company || location) && date" class="text-gray-400">•</span>
        <div v-if="date" class="flex items-center gap-1">
          <svg-icon
            type="mdi"
            :path="mdiCalendar"
            class="w-5 h-5 text-gray-600"
          />
          <span>{{ formatDate(date) }}</span>
        </div>
      </div>
    </header>
    <main>
      <p class="text-base text-black leading-relaxed">{{ text }}</p>
    </main>
    <footer v-if="tags">
      <div class="tags-by-category">
        <div class="all-tags inline-flex flex-wrap gap-1">
          <base-tag
            v-for="tag in sortedTags"
            :key="tag.label"
            :svg-icon-path="tag.svgIconPath"
            :text="tag.label"
            :category="tag.category"
            :title="tag.category"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { ItemDate, Tag } from "@/typings";
import BaseTag from "./BaseTag.vue";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMapMarker, mdiCalendar, mdiOfficeBuilding  } from '@mdi/js';
import { computed } from 'vue';

const props = defineProps<{
  title?: string;
  text: string;
  date?: ItemDate;
  location?: string;
  company?: string;
  tags?: Tag[];
}>();

const formatDate = (date: ItemDate) => {
  if (date.to) {
    return `${date.from} - ${date.to}`;
  } else if (date.duration) {
    return `${date.from} (${date.duration})`;
  } else {
    return date.from;
  }
};

const sortedTags = computed(() => {
  if (!props.tags) return [];

  // Définir l'ordre des catégories
  const categoryOrder = ['frontend', 'backend', 'database', 'devops', 'design', 'other'];

  // Grouper par catégorie
  const grouped: Record<string, Tag[]> = {};

  props.tags.forEach(tag => {
    const category = tag.category || 'other';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(tag);
  });

  // Trier et aplatir
  const sorted: Tag[] = [];
  categoryOrder.forEach(category => {
    if (grouped[category]) {
      sorted.push(...grouped[category]);
    }
  });

  return sorted;
});
</script>
