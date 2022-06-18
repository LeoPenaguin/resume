<template>
  <div class="sections">
    <ColorSwitch />
    <Description />
    <Experience />
    <School />
  </div>
</template>

<script setup lang="ts">
import ColorSwitch from "@/components/ColorSwitch.vue";
import Description from "@/components/Sections/DescriptionSection.vue";
import Experience from "@/components/Sections/ExperienceSection.vue";
import School from "@/components/Sections/SchoolSection.vue";
</script>

<style lang="scss">
.sections {
  flex-direction: column;
  align-items: flex-start;
  grid-area: content;
  font-size: 1.3em;

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    padding-top: 3rem;

    .section-center {
      width: 1000px;
    }

    a {
      text-decoration: none;
    }

    img {
      max-width: 100%;
    }
  }
}
</style>
