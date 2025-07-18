import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePersonStore = defineStore("person", () => {
  const firstName = ref<string>("Léo");
  const lastName = ref<string>("Penaguin");
  const aboutMe = ref<string>(
    "Frontend developer specialized in Vue.js with a passion for creating modern, intuitive web interfaces. " +
    "My backend experience in Symfony provides me with a comprehensive understanding of web applications, " +
    "from server architecture to user experience. I enjoy the creative aspect of development, " +
    "combining technical expertise with design to build both aesthetic and functional applications.",
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
