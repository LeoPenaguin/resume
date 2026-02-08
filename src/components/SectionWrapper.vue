<template>
  <section class="section w-full max-w-4xl" :aria-labelledby="titleId">
    <!-- Section Header -->
    <header class="mb-6">
      <h2
        :id="titleId"
        class="text-2xl font-bold text-foreground tracking-tight font-heading"
      >
        {{ title }}
      </h2>
    </header>
    <div v-if="!!slots.content">
      <slot name="content" />
    </div>
    <div v-if="!!slots.grid" class="grid w-full gap-6">
      <slot name="grid" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSlots, computed } from "vue";
const slots = useSlots();

const props = defineProps<{
  title: string;
}>();

const titleId = computed(
  () => `section-${props.title.toLowerCase().replace(/\s+/g, "-")}`,
);
</script>
