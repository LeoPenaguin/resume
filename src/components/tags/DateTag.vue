<script setup lang="ts">
import type { ItemDate } from "@/typings/index";
import type { PropType } from "vue";
import BaseTag from "./BaseTag.vue";

const props = defineProps({
  date: {
    type: Object as PropType<ItemDate>,
    required: true,
  },
});

const text = `${props.date.from} ${props.date.to ? 'to ' + props.date.to : ''} ${props.date.duration ? '(' + props.date.duration + ')' : ''}`
</script>

<template>
  <BaseTag
    class="date-tag"
    :text="text"
    icon="Calendar"
  />
</template>

<style scoped lang="scss">
.date-tag {
  color: var(--tag-date-color);
}
</style>
