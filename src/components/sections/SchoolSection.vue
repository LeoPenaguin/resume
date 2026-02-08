<template>
  <section-wrapper title="Education">
    <template #grid>
      <item-wrapper
        v-for="edu in resume.education"
        :key="edu.degree"
        :title="edu.degree"
        :text="edu.description"
        :location="edu.location"
        :from="edu.from"
        :to="edu.to"
      />
    </template>
  </section-wrapper>
</template>

<script setup lang="ts">
import ItemWrapper from "@/components/ItemWrapper.vue";
import SectionWrapper from "@/components/SectionWrapper.vue";
import resume from "@/data/resume";
</script>
