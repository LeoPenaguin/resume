import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePersonStore = defineStore("person", () => {
  const firstName = ref<string>("Léo");
  const lastName = ref<string>("Penaguin");
  const aboutMe = ref<string>(
    "I'm a front-end web developer in France, working full-time at Bedrock, " +
    "where we build great streaming platforms for clients like M6, Salto, and RTL. " +
    "My background in back-end development gives me a more complete understanding " +
    "of how web applications work, which really helps my front-end solutions. " +
    "I specialize in Vue.js and TypeScript, and I love creating seamless, " +
    "visually appealing user experiences.",
  );

  // Computed property for full name
  const fullName = computed(() => `${firstName.value} ${lastName.value}`);

  return {
    firstName,
    lastName,
    aboutMe,
    fullName,
  };
});
