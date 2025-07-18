<template>
  <div class="sections flex flex-col items-center justify-center gap-8 mb-56 p-8 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <description-section />
    <experience-section />
    <school-section />
  </div>
</template>

<script setup lang="ts">
import DescriptionSection from "@/components/sections/DescriptionSection.vue";
import ExperienceSection from "@/components/sections/ExperienceSection.vue";
import SchoolSection from "@/components/sections/SchoolSection.vue";
</script>
