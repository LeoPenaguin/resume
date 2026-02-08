<template>
  <section-wrapper :title="resume.name">
    <template #content>
      <div id="presentation">
        <div id="presentation-content" class="flex gap-6 items-start">
          <div id="presentation-content-left" class="flex-shrink-0">
            <img
              class="photo block w-32 h-32 object-cover rounded-lg"
              src="@/assets/me.jpg"
              alt="Léo Penaguin profile photo"
            />
          </div>

          <div id="presentation-content-right" class="flex-1">
            <nav class="social-grid flex gap-2 mb-4" aria-label="Social links">
              <a
                v-for="item in networks"
                :key="item.link"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                :class="item.class"
                target="_blank"
                rel="noopener noreferrer"
                :href="item.link"
                :aria-label="`${item.label}${item.link.startsWith('http') ? ' (opens in new tab)' : ''}`"
              >
                <svg-icon
                  type="mdi"
                  :path="item.icon"
                  class="w-4 h-4"
                  aria-hidden="true"
                />
                <span>{{ item.label }}</span>
              </a>
            </nav>

            <div id="presentation-content-text" class="text-left">
              <p class="text-sm text-foreground-muted leading-relaxed">
                {{ resume.about }}
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
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";
import resume from "@/data/resume";

const networks = [
  {
    link: "mailto:PenaguinLeo@gmail.com",
    icon: mdiEmail,
    label: "Email",
    class:
      "bg-background-muted text-foreground border-border hover:bg-gray-200",
  },
  {
    link: "https://www.linkedin.com/in/leo-penaguin",
    icon: mdiLinkedin,
    label: "LinkedIn",
    class: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  },
  {
    link: "https://github.com/LeoPenaguin",
    icon: mdiGithub,
    label: "GitHub",
    class: "bg-gray-900 text-white border-gray-900 hover:bg-gray-800",
  },
];
</script>
