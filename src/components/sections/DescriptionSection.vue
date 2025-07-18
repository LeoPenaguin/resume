<template>
  <section-wrapper
    :title="`${firstName} ${lastName}`"
  >
    <template #content>
      <div id="presentation">
        <div id="presentation-content" class="flex gap-6 items-start">
          <div id="presentation-content-left" class="flex-shrink-0">
            <img
              class="photo block w-32 h-32 object-cover rounded-lg"
              src="@/assets/me.jpg"
              alt="Photo de profil"
            >
          </div>

          <div id="presentation-content-right" class="flex-1">
            <div class="social-grid mb-4">
              <a
                v-for="item in networks"
                :key="item.link"
                class="inline-block mr-4"
                target="_blank"
                :href="item.link"
              >
                <svg-icon
                  type="mdi"
                  :path="item.svgIconPath"
                  class="w-8 h-8 text-gray-600 hover:text-green-500 transition-colors duration-200"
                />
              </a>
            </div>

            <div id="presentation-content-text" class="text-left">
              <p class="text-base text-black leading-relaxed">
                {{ aboutMe }}
              </p>
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
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
} from '@mdi/js';
import { usePersonStore } from "@/stores/person";
import { storeToRefs } from "pinia";

const personStore = usePersonStore()
const { firstName,
lastName,
aboutMe } = storeToRefs(personStore)

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
</script>
