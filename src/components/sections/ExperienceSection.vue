<template>
  <section-wrapper title="Experience">
    <template #grid>
      <item-wrapper
        v-for="experience in resume.experiences"
        :key="`${experience.company}-${experience.from}`"
        :title="experience.title"
        :text="experience.description"
        :location="experience.location"
        :company="experience.company"
        :from="experience.from"
        :to="experience.to"
        :duration="experience.duration"
        :type="experience.type"
        :skills="experience.skills"
      />
    </template>
  </section-wrapper>
</template>

<script setup lang="ts">
import ItemWrapper from "@/components/ItemWrapper.vue";
import SectionWrapper from "@/components/SectionWrapper.vue";
import resume from "@/data/resume";
</script>
