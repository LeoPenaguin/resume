<template>
  <div class="flex flex-col gap-6 max-w-4xl mx-auto p-4">
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
