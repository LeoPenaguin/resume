<template>
  <section class="section w-full" aria-labelledby="profile-heading">
    <div id="presentation">
      <div
        id="presentation-content"
        class="flex flex-col items-start gap-8 sm:flex-row"
      >
        <div id="presentation-content-left" class="flex-shrink-0">
          <img
            class="photo block h-36 w-36 rounded-full object-cover ring-2 ring-border shadow-sm"
            :src="profilePhoto"
            :alt="`Portrait of ${name}`"
            width="256"
            height="256"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div id="presentation-content-right" class="flex-1">
          <h1
            id="profile-heading"
            class="mb-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {{ name }}
          </h1>

          <nav
            class="social-grid mb-5 flex flex-wrap gap-3"
            aria-label="Contact and social links"
          >
            <a
              v-for="item in socialLinks"
              :key="item.href"
              class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-base font-medium transition-colors duration-200"
              :class="linkToneClasses[item.tone]"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'me noopener noreferrer' : undefined"
              :href="item.href"
            >
              <svg-icon
                type="mdi"
                :path="item.icon"
                class="h-[18px] w-[18px]"
                aria-hidden="true"
              />
              <span>{{ item.label }}</span>
              <span v-if="item.external" class="sr-only">
                (opens in new tab)</span
              >
            </a>
          </nav>

          <p
            class="text-base leading-7 text-foreground-muted sm:text-[1.0625rem]"
          >
            {{ about }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import profilePhoto from "@/assets/me-256.webp";
import type { SocialLink, SocialLinkTone } from "@/data/resume";

defineProps<{
  name: string;
  about: string;
  socialLinks: SocialLink[];
}>();

const linkToneClasses: Record<SocialLinkTone, string> = {
  email:
    "border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 focus-visible:outline-slate-600",
  linkedin:
    "border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100 focus-visible:outline-sky-600",
  github:
    "border-slate-900 bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-600",
};
</script>
