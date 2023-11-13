<template>
  <section-wrapper title="Léo Penaguin">
    <template #content>
      <div id="presentation">
        <div id="presentation-content">
          <div id="presentation-content-left">
            <img
              class="photo"
              src="@/assets/me.jpg"
              alt=""
            >
          </div>
          <div id="presentation-content-right">
            <div class="social-grid">
              <a
                v-for="item in networks"
                :key="item.link"
                class="grid-item"
                target="_blank"
                :href="item.link"
              >
                <svg-icon
                  type="mdi"
                  :path="item.svgIconPath"
                />
              </a>
            </div>

            <p>
              {{ t("description.presentation.introduction") }}
            </p>
            <div class="skills">
              <div
                v-for="skill in skillsList"
                :key="skill.label"
                class="skill"
              >
                <base-tag
                  :text="skill.label"
                  big
                  :svg-icon-path="skill.svgIconPath"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section-wrapper>
</template>

<script setup lang="ts">
import SectionWrapper from "@/components/SectionWrapper.vue";
import type { Social } from "@/typings";
import { useI18n } from 'vue-i18n'
import SvgIcon from '@jamescoyle/vue-icon';
import { ref } from "vue";
import skills from "@/services/skills";
import {
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
} from '@mdi/js';
import BaseTag from "../BaseTag.vue";

const { t } = useI18n({ useScope: 'global' })

const networks = [
  {
    link: "mailto:PenaguinLeo@gmail.com",
    svgIconPath: mdiEmail,
  },
  {
    link: "https://www.linkedin.com/in/leo-penaguin",
    svgIconPath: mdiLinkedin,
  },
  {

    link: "https://github.com/LeoPenaguin",
    svgIconPath: mdiGithub,
  },
] as Social[]

const skillsList = ref([
  skills.vue,
  skills.github,
  skills.typescript,
  skills.vscode,
  skills.jest,
  skills.cypress,
  skills.eslint,
  skills.storybook
])
</script>

<style lang="scss" scoped>
#presentation {
  @media screen and (max-width: 1040px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  #presentation-content {
    display: flex;
    gap: var(--space1);
    @media screen and (max-width: 1040px) {
        flex-direction: column;
    }
    &-left {
      .photo {
        border-radius: var(--border-radius-1);
        margin: 0 auto;
        display: block;
        width: 130px;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      gap: var(--space2);
      .social-grid {
        @media screen and (max-width: 1040px) {
          display: inline;
          text-align: center;
        }
        .grid-item {
          display: inline-block;
          border-radius: var(--border-radius-1);
          margin: 0 var(--space0);
          span {
            line-height: 0;
          }
          &:hover {
            transform: scale(1.1);
          }
          ::v-deep(svg) {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  .skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space1);
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .skill {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: var(--space1);
    border-radius: var(--border-radius-1);
    p {
      margin: 0;
      flex: 1;
    }
  }
}
}
</style>
