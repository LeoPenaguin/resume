<script setup lang="ts">
import SkillTag from "@/components/tags/SkillTag.vue";
import ItemWrapper from "@/components/ItemWrapper.vue";
import type { PropType } from "vue";
import { ColorVariants } from '@/typings/enums/colorVariants'
import type { SkillGroup } from "@/typings";

defineProps({
  skillGroup: {
    type: Object as PropType<SkillGroup>,
    required: true,
  },
  colorVariant: {
    type: String as PropType<ColorVariants>,
    default: ColorVariants.DEFAULT
  },
});
</script>

<template>
  <ItemWrapper>
    <template #header>
      <h2>{{ skillGroup.title }}</h2>
    </template>
    <template #content>
      <skill-tag
        v-for="skill, index in skillGroup.skills"
        :key="index"
        :skill="skill"
      />
    </template>
  </ItemWrapper>
</template>
