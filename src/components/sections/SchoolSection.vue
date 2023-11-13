<template>
  <section-wrapper :title="t('school.title')">
    <template #grid>
      <item-wrapper
        v-for="school in schoolStore.schools"
        :key="school.degree"
        :title="school.degree"
        :text="school.description"
        :image="school.image"
        :location="school.location"
        :date="school.date"
      />
    </template>
  </section-wrapper>
</template>

<script setup lang="ts">
import useSchoolStore from "@/stores/school";
import ItemWrapper from "@/components/ItemWrapper.vue";
import SectionWrapper from "@/components/SectionWrapper.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const schoolStore = useSchoolStore();
</script>
