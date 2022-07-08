<script setup lang="ts">
import ItemWrapper from "@/components/ItemWrapper.vue";
import SkillTag from "@/components/tags/SkillTag.vue";
import DateTag from "@/components/tags/DateTag.vue";
import CompanyTag from "@/components/tags/CompanyTag.vue";
import LocationTag from "@/components/tags/LocationTag.vue";
import type { PropType } from "vue";
import type { Experience } from "@/typings";

defineProps({
  experience: {
    type: Object as PropType<Experience>,
    required: true,
  },
});
</script>

<template>
  <ItemWrapper
    v-if="experience.primary"
    class="large"
  >
    <template #header>
      <div class="experience-header">
        <img
          class="experience-header-image"
          :src="`src/assets/logos/${experience.image}`"
        >

        <div class="experience-header-details">
          <h2>{{ experience.title }}</h2>
          <p>
            <company-tag :company-name="experience.company" />
            <date-tag :date="experience.date" />
            <location-tag :location="experience.location" />
          </p>
        </div>
      </div>
    </template>
    <template #content>
      <p class="context">
        {{ experience.context }}
      </p>
    </template>
    <template #footer>
      <div class="skills">
        <skill-tag
          v-for="skill, index in experience.skills"
          :key="index"
          :skill="skill"
        />
      </div>
    </template>
  </ItemWrapper>

  <ItemWrapper v-else>
    <template #header>
      <div class="experience-header">
        <img
          class="experience-header-image"
          :src="`src/assets/logos/${experience.image}`"
        >

        <div class="experience-header-details">
          <company-tag :company-name="experience.company" />
          <date-tag :date="experience.date" />
          <location-tag :location="experience.location" />
        </div>
      </div>
    </template>
    <template #content>
      <span class="context"><b>{{ experience.type }}</b> {{ experience.context }}</span>
    </template>
    <template #footer>
      <div class="skills">
        <skill-tag
          v-for="skill, index in experience.skills"
          :key="index"
          :skill="skill"
        />
      </div>
    </template>
  </ItemWrapper>
</template>

<style scoped lang="scss">
.experience-header {
  display: flex;
  gap: var(--space2);
  img {
    width: 65px;
    height: 65px;
    border-radius: var(--border-radius-1);
  }
}

.large {
  grid-column-start: 1;
  grid-column-end: 3;

  .experience-header {
    display: flex;
    gap: var(--space2);
    img {
      width: 150px;
      height: 150px;
      border-radius: var(--border-radius-1);
    }
    .experience-header-details {
      display: flex;
      flex-direction: column;
      gap: var(--space2);
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
  }
}
</style>
