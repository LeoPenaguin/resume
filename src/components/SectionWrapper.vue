<template>
  <div class="section w-full max-w-4xl">
    <!-- Section Header -->
    <header class="mb-4">
      <h1 class="text-3xl font-bold text-black mb-4 flex items-center gap-2 font-mono">
        <span class="text-green-500 text-xl">#</span>
        {{ title }}
      </h1>
    </header>
    <main v-if="!!slots.content">
      <slot name="content" />
    </main>
    <div
      v-if="!!slots.grid"
      class="grid w-full gap-6"
    >
      <slot name="grid" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";
const slots = useSlots();

defineProps<{
  title: string;
}>();
</script>
