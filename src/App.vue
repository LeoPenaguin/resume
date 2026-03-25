<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <button
    type="button"
    class="print-button fixed top-4 right-4 flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-background shadow-md transition-all duration-200 hover:scale-105 hover:bg-foreground/85 hover:shadow-lg active:scale-100 active:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
    aria-label="Print or save the resume as a PDF"
    @click="handlePrint"
  >
    <svg-icon type="mdi" :path="mdiPrinter" :size="22" aria-hidden="true" />
    <span class="text-base font-medium">PDF</span>
  </button>

  <main
    id="main-content"
    tabindex="-1"
    class="mx-auto flex max-w-5xl flex-col gap-8 px-5 pt-10 pb-28 sm:px-6 sm:pt-12"
  >
    <profile-section
      :name="resume.name"
      :about="resume.about"
      :social-links="resume.socialLinks"
    />
    <resume-entries-section
      title="Experience"
      :entries="resume.experiences"
      layout="timeline"
    />
    <resume-entries-section title="Education" :entries="resume.education" />
  </main>
</template>

<script setup lang="ts">
import { mdiPrinter } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import ProfileSection from "@/components/resume/ProfileSection.vue";
import ResumeEntriesSection from "@/components/resume/ResumeEntriesSection.vue";
import resume from "@/data/resume";

const handlePrint = () => {
  window.print();
};
</script>
