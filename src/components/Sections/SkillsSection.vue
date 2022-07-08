<template>
  <h2>{{ t("skill.title") }}</h2>

  <div class="skills">
    <div
      v-for="skill in skills"
      :key="skill.title"
      class="skill"
      :style="{backgroundColor: skill.background}"
    >
      <img
        :src="skill.img"
        :alt="skill.title"
      >
      <p :style="{color: skill.color}">
        {{ skill.title }}
      </p>
      <img
        v-if="skill.important"
        src="@/assets/skill-grid/heart-logo.svg"
        alt=""
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const skills = [
  {
    title: 'VUE JS',
    color: '#3FB984',
    img: 'src/assets/skill-grid/vue-logo.png',
    important: true
  },
  {
    title: 'GITHUB',
    background: "white",
    color: '#1B1F23',
    img: 'src/assets/skill-grid/github-logo.svg',
    important: true
  },
  {
    title: 'TYPESCRIPT',
    color: '#007ACC',
    img: 'src/assets/skill-grid/typescript-logo.svg',
    important: true
  },
  {
    title: 'VSCODE',
    color: '#40ADF3',
    img: 'src/assets/skill-grid/vscode-logo.png',
    important: true
  },
  {
    title: 'JEST',
    background: "#99425B",
    img: 'src/assets/skill-grid/jest-logo.png'
  },
  {
    title: 'CYPRESS',
    img: 'src/assets/skill-grid/cypress-logo.png'
  },
  {
    title: 'ESLINT',
    background: "white",
    color: '#3A33D1',
    img: 'src/assets/skill-grid/eslint-logo.svg'
  },
  {
    title: 'STORYBOOK',
    color: '#FE4685',
    img: 'src/assets/skill-grid/storybook-logo.png'
  },
]
</script>


<style lang="scss" scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space1);
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .skill {
    background: #001f2e;
    display: flex;
    align-items: center;
    color: #ffffff;
    flex-direction: row;
    gap: var(--space1);
    padding: var(--space1);
    border-radius: var(--border-radius-2);
    p {
      margin: 0;
      flex: 1;
    }
    img {
      height: 2rem;
    }
  }
}
</style>
