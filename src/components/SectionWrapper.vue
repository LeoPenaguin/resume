<template>
  <div class="section flex flex-col items-center w-full max-w-3xl">
    <header class="w-full mb-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-2 border-b-2 border-accent-color pb-2 flex items-center gap-3">
        <span class="text-accent-color text-3xl font-mono">#</span>
        {{ title }}
      </h1>
    </header>
    <main v-if="!!slots.content">
      <slot name="content" />
    </main>
    <div
      v-if="!!slots.grid"
      class="grid w-full max-w-3xl gap-16"
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
