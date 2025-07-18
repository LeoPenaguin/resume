<template>
  <span
    class="tag inline-flex items-center justify-center flex-row cursor-pointer rounded-md"
    :class="{ 'text-lg': big }"
  >
    <svg-icon
      v-if="svgIconPath"
      type="mdi"
      :path="svgIconPath"
      class="icon w-5 h-5"
    />
    <span class="p-0 uppercase block">
      {{ lol }}
    </span>
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
