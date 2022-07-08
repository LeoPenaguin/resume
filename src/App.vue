<script setup lang="ts">
import ResumeSections from "@/components/ResumeSections.vue";
import { onMounted } from "vue";
import { useI18n } from 'vue-i18n'

const {t, locale, availableLocales} = useI18n({ useScope: 'global' })

onMounted(() => {
  if (localStorage.colorScheme) {
    document.documentElement.dataset.userColorScheme = localStorage.colorScheme;
  }
});
</script>

<template>
  <div class="i18n">
    <select v-model="locale">
      <option
        v-for="availableLocale in availableLocales"
        :key="availableLocale"
      >
        {{ availableLocale }}
      </option>
    </select>
    (🛠️ {{ t("wip") }})
  </div>

  <ResumeSections />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

@import "./styles/reset.css";
@import "./styles/themes";

body {
  background: var(--background-color);
  color: var(--text-color);
}

h1 {
  text-align: center;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -o-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  color: var(--primary);
  margin: 0;
}

p {
  margin: 0;
}

#app {
  font-family: sans-serif;
}

.i18n {
  position: fixed;
  left: 1rem;
  top: 1rem;
}
</style>
