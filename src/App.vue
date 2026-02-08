<template>
  <button
    @click="handlePrint"
    class="print-button fixed top-4 right-4 flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    aria-label="Download CV as PDF"
  >
    <svg-icon type="mdi" :path="mdiDownload" :size="20" />
    <span class="text-sm font-medium">PDF</span>
  </button>

  <main id="main-content" class="flex flex-col gap-6 max-w-4xl mx-auto p-4">
    <h1 class="sr-only">Léo Penaguin - Resume</h1>
    <description-section />
    <experience-section />
    <school-section />
  </main>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiDownload } from "@mdi/js";
import DescriptionSection from "@/components/sections/DescriptionSection.vue";
import ExperienceSection from "@/components/sections/ExperienceSection.vue";
import SchoolSection from "@/components/sections/SchoolSection.vue";

const handlePrint = () => {
  window.print();
};
</script>
