<template>
  <span
    class="tag"
    :class="{'tag-big': big}"
  >
    <svg-icon
      v-if="svgIconPath"
      type="mdi"
      :path="svgIconPath"
      class="icon"
      :size="20"
    />
    <span>{{ lol }}</span>
  </span>
</template>

<script setup lang="ts">
import type { ItemDate } from "@/typings/index";
import { computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';

const props = defineProps<
{
  text: string | ItemDate;
  svgIconPath?: string;
  big?: boolean;
}
>();

const lol = computed(() => {
  if (typeof props.text !== 'string' && 'from' in props.text) {
    return `${props.text.from} ${props.text.to ? 'to ' + props.text.to : ''} ${props.text.duration ? '(' + props.text.duration + ')' : ''}`
  } else {
    return props.text;
  }
})
</script>

<style scoped lang="scss">
.tag {
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  flex-direction: row;
  gap: var(--space0);
  border-radius: var(--border-radius-1);
  cursor: pointer;

  span {
    padding: 0;
    text-transform: uppercase;
    display: block;
  }

  &-big {
    font-size: 1.1rem;
  }
}
</style>
