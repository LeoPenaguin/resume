<script setup lang="ts">
import BaseTag from "./BaseTag.vue";

defineProps({
  companyName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <BaseTag
    class="company-tag"
    :text="companyName"
    icon="Home"
  />
</template>

<style scoped lang="scss">
.company-tag {
  color: var(--tag-company-color);
}
</style>
