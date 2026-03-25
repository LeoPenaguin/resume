<template>
  <section class="section w-full max-w-4xl" :aria-labelledby="titleId">
    <header class="mb-7">
      <h2
        :id="titleId"
        class="font-heading text-[1.75rem] font-bold tracking-tight text-foreground sm:text-3xl"
      >
        {{ title }}
      </h2>
    </header>

    <div class="grid w-full gap-8">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
}>();

const titleId = computed(
  () =>
    `section-${props.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`,
);
</script>
