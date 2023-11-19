import { defineStore } from "pinia"
import { ref } from "vue"

export const usePersonStore = defineStore('person', () => {
  const firstName = ref('Léo')
  const lastName = ref('Penaguin')
  const aboutMe = ref('Greetings! I am a skilled front-end web developer based in France, currently employed full-time at Bedrock—a dynamic company renowned for crafting cutting-edge streaming platforms for esteemed clients such as M6, Salto, and RTL. My professional journey includes transitioning from a background as a back-end developer, and I have honed my expertise in the VueJS framework and Typescript. With a passion for creating seamless and visually engaging user experiences, I am dedicated to delivering high-quality web development solutions.')

  return { firstName, lastName, aboutMe }
})
