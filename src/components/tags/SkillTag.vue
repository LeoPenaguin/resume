<script setup lang="ts">
import type { Skill } from "@/typings";
import type { PropType } from "vue";
import BaseTag from "./BaseTag.vue";

defineProps({
  skill: {
    type: Object as PropType<Skill>,
    required: true,
  },
});
</script>

<template>
  <BaseTag
    v-if="skill"
    :class="`skill-tag_${skill.type} skill-tag`"
    :icon="skill.key"
    :text="skill.label"
  />
</template>

<style scoped lang="scss">
.skill-tag {
  background: var(--tag-skill-bgc);
  color: var(--tag-skill-color);
  padding: var(--space0);
  &_frontend {
    color: var(--tag-skill-frontend-color);
  }
  &_backend {
    color: var(--tag-skill-backend-color);
  }
  &_general {
    color: var(--tag-skill-general-color);
  }
}
</style>
