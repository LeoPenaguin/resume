<script setup lang="ts">
import useSchoolStore from "@/stores/school";
import SchoolItem from "@/components/items/SchoolItem.vue";
import SectionWrapper from "@/components/SectionWrapper.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const schoolStore = useSchoolStore();
</script>

<template>
  <SectionWrapper>
    <template #header>
      <h1>{{ t("school.title") }}</h1>
    </template>
    <template #grid>
      <school-item
        v-for="item in schoolStore.schools"
        :key="item.degree"
        :school="item"
      />
    </template>
  </SectionWrapper>
</template>
