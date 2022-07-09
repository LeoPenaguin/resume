<script setup lang="ts">
import { computed } from "vue";
import type { Component, PropType } from "vue";
import { getIcon } from "../icons";

const props = defineProps({
  icon: {
    type: [Object, String] as PropType<Component | string>,
    default: undefined
  },
  text: {
    type: String,
    required: true,
  },
  small: {
    type: Boolean,
    default: false,
  },
});

const IconComponent = computed(() => {
  if (typeof props.icon === 'string') {
    return getIcon(props.icon)
  } else {
    return props.icon
  }
})
</script>

<template>
  <span
    :class="{small}"
    class="tag"
  >
    <component
      :is="IconComponent"
      class="icon"
    />

    <span>{{ text }}</span>
  </span>
</template>

<style scoped lang="scss">
.tag {
  padding: 0;
  border-radius: var(--border-radius-1);
  margin: 0 var(--space1) var(--space1) 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  .icon {
    margin-right: var(--space1);
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
  }

  &.small {
    font-size: 0.8rem;
    .icon {
      margin-right: var(--space1);
      display: flex;
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  span {
    padding: 0 var(--space1) 0 0;
  }
}
</style>
