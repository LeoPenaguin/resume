<template>
  <div class="section">
    <header>
      <h2><span class="title-icon">#</span> {{ title }}</h2>
    </header>
    <main v-if="!!slots.content">
      <slot name="content" />
    </main>
    <div
      v-if="!!slots.grid"
      class="grid"
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

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 760px;
  header {
    width: 100%;
    margin-bottom: var(--space2);
  }
  .grid {
    width: 100%;
    max-width: 760px;
    display: grid;
    gap: var(--space4);
  }
}
</style>
