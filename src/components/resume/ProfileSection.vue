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
            <action-button
              v-for="item in socialLinks"
              :key="item.href"
              :label="item.label"
              :icon="item.icon"
              :tone="item.tone"
              :href="item.href"
              :external="item.external"
            />
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
import profilePhoto from "@/assets/me-256.webp";
import type { SocialLink } from "@/data/resume";
import ActionButton from "@/components/ui/ActionButton.vue";

defineProps<{
  name: string;
  about: string;
  socialLinks: SocialLink[];
}>();
</script>
