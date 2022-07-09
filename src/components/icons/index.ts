import { defineAsyncComponent, markRaw } from 'vue'
import type { Component } from "vue";
import IconDefault from "./IconDefault.vue"

export const getIcon = (iconName: string): Component => {
  return markRaw(defineAsyncComponent(async () => {
    try {
      return await import(`./Icon${iconName}.vue`)
    } catch {
      return IconDefault
    }
  }))
}
