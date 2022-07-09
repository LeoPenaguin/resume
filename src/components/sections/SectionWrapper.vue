<script setup lang="ts">
import { useSlots } from "vue";
const slots = useSlots();
</script>

<template>
  <div class="section">
    <header>
      <slot name="header" />
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

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  padding-top: 3rem;
  main {
    width: 100%;
    max-width: 1000px;
  }
  .grid {
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space2);
  }

  @media screen and (max-width: 1040px) {
    .grid {
      display: flex;
      flex-direction: column;
      padding: var(--space2);
    }
  }
}
</style>
