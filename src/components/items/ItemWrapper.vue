<script setup lang="ts">
import { useSlots } from "vue";
const slots = useSlots();

const hasContent = !!slots.content;
const hasFooter = !!slots.footer;
</script>

<template>
  <div class="item">
    <header>
      <slot name="header" />
    </header>
    <main v-if="hasContent">
      <slot name="content" />
    </main>
    <footer v-if="hasFooter">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.item {
  border-radius: var(--border-radius-2);
  background: var(--items-bgc);
  padding: var(--space2);
  overflow: hidden;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space2);
  min-height: 100%;

  main {
    flex: 1;
  }
}
</style>
