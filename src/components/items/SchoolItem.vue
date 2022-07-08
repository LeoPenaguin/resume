<script setup lang="ts">
import ItemWrapper from "@/components/ItemWrapper.vue";
import DateTag from "@/components/tags/DateTag.vue";
import LocationTag from "@/components/tags/LocationTag.vue";
import type { PropType } from "vue";
import type { School } from "@/typings";

defineProps({
  school: {
    type: Object as PropType<School>,
    required: true,
  },
});
</script>

<template>
  <ItemWrapper>
    <template #header>
      <div class="shoot-item-header">
        <date-tag :date="school.date" />
        <p>
          <b>{{ school.degree }}</b> -
          {{ school.description }}
        </p>
      </div>
    </template>
    <template #footer>
      <div class="shoot-item-footer">
        <img :src="`src/assets/logos/${school.image}`">
        <location-tag :location="school.location" />
      </div>
    </template>
  </ItemWrapper>
</template>

<style lang="scss" scoped>
.shoot-item-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space1);
}
.shoot-item-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space2);
  img {
    border-radius: var(--border-radius-1);
    overflow: hidden;
    width: 65px;
    height: 65px;
  }
}
</style>
