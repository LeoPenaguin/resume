<template>
  <section-wrapper :title="t('experience.title')">
    <template #grid>
      <item-wrapper
        v-for="experience in experienceStore.experiences"
        :key="experience.title"
        :title="experience.title"
        :text="experience.context"
        :location="experience.location"
        :company="experience.company"
        :date="experience.date"
        :tags="experience.skills"
      />
    </template>
  </section-wrapper>
</template>

<script setup lang="ts">
import useExperienceStore from "@/stores/experience";
import ItemWrapper from "@/components/ItemWrapper.vue";
import SectionWrapper from "@/components/SectionWrapper.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const experienceStore = useExperienceStore();
</script>
