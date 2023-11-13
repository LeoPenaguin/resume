<template>
  <div class="sections">
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

<style lang="scss">
@import '../node_modules/typeface-roboto/index.css';

* {
  box-sizing: border-box;
}

@import "./styles/reset.css";
@import "./styles/themes";

#app {
  font-family: Roboto;
}

body {
  background: var(--background-color);
  color: var(--primary-color);
}

h1 {
  display: inline-block;
}

h2 {
  text-transform: uppercase;
}

h3 {
  text-transform: uppercase;
}

p {
  margin: 0;
  padding: 0;
}

a {
  color: var(--primary-color);
  &:visited {
    color: var(--primary-color);
  }
  &:active {
    color: var(--primary-color);
  }
}

.title-icon {
  color: var(--accent-color);
}

.sections {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space2);
  margin-bottom: 20vh;
  padding: var(--space2);
}
</style>
