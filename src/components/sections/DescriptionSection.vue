<template>
  <section-wrapper
    :title="`${firstName} ${lastName}`"
  >
    <template #content>
      <div id="presentation" class="max-lg:flex max-lg:flex-col max-lg:items-center">
        <div id="presentation-content" class="flex gap-4 max-lg:flex-col max-lg:items-center">
          <div id="presentation-content-left" class="flex-shrink-0">
            <img
              class="photo rounded-xl mx-auto block w-32 h-32 min-w-32 min-h-32 object-cover shadow-lg border-2 border-gray-200"
              src="@/assets/me.jpg"
              alt="Photo de profil"
            >
          </div>
          <div id="presentation-content-right" class="flex flex-col gap-8 flex-grow min-w-0">
            <div class="social-grid max-lg:inline max-lg:text-center">
              <a
                v-for="item in networks"
                :key="item.link"
                class="grid-item inline-block mx-2"
                target="_blank"
                :href="item.link"
              >
                <svg-icon
                  type="mdi"
                  :path="item.svgIconPath"
                  class="w-8 h-8 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                />
              </a>
            </div>

            <p class="text-base text-gray-700 leading-relaxed font-medium">
              {{ aboutMe }}
            </p>
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
