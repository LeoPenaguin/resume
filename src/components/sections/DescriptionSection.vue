<script setup lang="ts">
import SectionWrapper from "@/components/sections/SectionWrapper.vue";
import type { Component } from "vue";
import { getIcon } from "@/components/icons";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import type { Social } from "@/typings";
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const icons = {} as { [key: string]: Component };
icons["linkedin-icon"] = getIcon('Linkedin');
icons["github-icon"] = getIcon('Github');
icons["mail-icon"] = getIcon('Mail');
icons["malt-icon"] = getIcon('Malt');

const networks = [
  {
    name: "mail",
    link: "mailto:PenaguinLeo@gmail.com",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/leo-penaguin",
  },
  {
    name: "github",
    link: "https://github.com/LeoPenaguin",
  },
  {
    name: "malt",
    link: "https://www.malt.fr/profile/leopenaguin",
  },
] as Social[]
</script>

<template>
  <section-wrapper>
    <template #content>
      <div id="presentation">
        <h1>
          Léo PENAGUIN
        </h1>

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
                :key="item.name"
                :class="`grid-item item-${item.name}`"
                target="_blank"
                :href="item.link"
              >
                <component :is="icons[`${item.name}-icon`]" />
              </a>
            </div>

            <p>
              {{ t("description.presentation.introduction") }}
            </p>
            <skills-section />
          </div>
        </div>
      </div>
    </template>
  </section-wrapper>
</template>

<style lang="scss" scoped>
#presentation {
  h1 {
    text-align: left;
  }
  @media screen and (max-width: 1040px) {
    padding: var(--space2);
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
      text-align: center;
    }
  }
  #presentation-content {
    display: flex;
    gap: var(--space3);
    @media screen and (max-width: 1040px) {
        flex-direction: column;
        padding: var(--space2);
    }
    &-left {
      .photo {
        border-radius: var(--border-radius-1);
        margin: 0 auto;
        display: block;
        width: 250px;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      gap: var(--space3);
      .social-grid {
        @media screen and (max-width: 1040px) {
          display: inline;
          text-align: center;
        }
        .grid-item {
          padding: var(--space1) 25px;
          display: inline-block;
          border-radius: var(--border-radius-1);
          margin: 0 var(--space1) var(--space1) 0;
          span {
            line-height: 0;
          }
          &.item-mail {
            background-color: #2ecc71;
            color: #dfffed;
          }
          &.item-linkedin {
            background-color: #0177b5;
            color: #d9f2ff;
          }
          &.item-github {
            background-color: #323131;
            color: #76afec;
          }
          &.item-malt {
            background-color: #FC5757;
            color: #ffffff;
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
}
</style>
