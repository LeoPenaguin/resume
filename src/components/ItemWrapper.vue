<template>
  <div class="item">
    <header>
      <h3 v-if="title">
        {{ title }}
      </h3>
      <div class="tags">
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
    <main>
      <p>{{ text }}</p>
    </main>
    <footer v-if="tags">
      <div class="tags">
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

<style lang="scss" scoped>
.item {
  overflow: hidden;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space0);
  min-height: 100%;

  header {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0 0 var(--space1) 0;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space0);
      @media screen and (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
  main {
    flex: 1;
    p {
      color: var(--accent-color);
    }
  }
  footer {
    width: 100%;
    .tags {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space0);
      width: 100%;
      @media screen and (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>
