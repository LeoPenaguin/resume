<script setup lang="ts">
import type { Locations } from "@/typings/enums/locations";
import type { PropType } from "vue";
import BaseTag from "./BaseTag.vue";

defineProps({
  location: {
    type: String as PropType<Locations>,
    required: true,
  },
});
</script>

<template>
  <BaseTag
    class="location-tag"
    :text="location"
    icon="MapPin"
  />
</template>

<style scoped lang="scss">
.location-tag {
  color: var(--tag-location-color);
}
</style>
