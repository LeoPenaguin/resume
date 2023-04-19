<script setup lang="ts">
import useExperienceStore from "@/stores/experience";
import experienceItem from "@/components/items/ExperienceItem.vue";
import SectionWrapper from "@/components/sections/SectionWrapper.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const experienceStore = useExperienceStore();
</script>

<template>
  <section-wrapper>
    <template #header>
      <h1>
        {{ t("experience.title") }}
      </h1>
    </template>
    <template #grid>
      <experience-item
        v-for="item in experienceStore.experiences"
        :key="item.title"
        :experience="item"
      />
    </template>
  </section-wrapper>
</template>
