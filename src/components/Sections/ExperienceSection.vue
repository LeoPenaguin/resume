<template>
  <div id="experience" class="section">
    <h1>
      <i class="fa fa-building-o" aria-hidden="true"></i>{{ $t("experience.title") }}
    </h1>
    <div class="section-center experience-grid">
      <experience-item v-for="item in experienceStore.experiences" :key="item.title" :experience="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useExperienceStore from "@/stores/experience";
import experienceItem from "@/components/Sections/Items/ExperienceItem.vue";

const experienceStore = useExperienceStore();
</script>

<style lang="scss" scoped>
.experience-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
