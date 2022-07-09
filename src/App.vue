<script setup lang="ts">
import ResumeSections from "@/components/ResumeSections.vue";
import { onMounted } from "vue";
import TopBar from "./components/TopBar.vue";


onMounted(() => {
  if (localStorage.colorScheme) {
    document.documentElement.dataset.userColorScheme = localStorage.colorScheme;
  }
});
</script>

<template>
  <TopBar />
  <ResumeSections />
</template>

<style lang="scss">
@import '../node_modules/typeface-roboto/index.css';

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
  width: fit-content;
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
  font-family: Roboto;
}
</style>
