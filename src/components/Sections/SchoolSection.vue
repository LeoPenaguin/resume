<template>
  <div id="school" class="section">
    <h1>{{ $t("academic") }}</h1>
    <div class="section-center school-grid">
      <school-item v-for="item in schoolStore.schools" :key="item.degree" :school="item">
      </school-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSchoolStore from "@/stores/school";
import SchoolItem from "@/components/Sections/Items/SchoolItem.vue";

const schoolStore = useSchoolStore();
</script>

<style lang="scss" scoped>
.school-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 5em;
}
</style>
