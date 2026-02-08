<template>
  <button
    @click="handlePrint"
    type="button"
    class="print-button fixed top-4 right-4 flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg cursor-pointer select-none shadow-md hover:bg-foreground/85 hover:shadow-lg hover:scale-105 active:scale-100 active:shadow-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
    aria-label="Télécharger le CV au format PDF"
  >
    <svg-icon type="mdi" :path="mdiDownload" :size="20" aria-hidden="true" />
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
