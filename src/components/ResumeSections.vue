<script setup lang="ts">
import Description from "@/components/sections/DescriptionSection.vue";
import Experience from "@/components/sections/ExperienceSection.vue";
import School from "@/components/sections/SchoolSection.vue";
</script>

<template>
  <div class="sections">
    <Description />
    <Experience />
    <School />
  </div>
</template>

<style lang="scss">
.sections {
  flex-direction: column;
  align-items: flex-start;
  grid-area: content;
  font-size: 1.3em;
  margin-bottom: 20vh;
}
</style>


