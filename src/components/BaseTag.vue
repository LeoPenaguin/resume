<template>
  <span
    class="tag inline-flex items-center justify-center flex-row text-base font-mono"
    :class="[
      getCategoryClass(),
      props.isInfo ? '' : 'rounded-md px-2 py-1'
    ]"
    :title="props.title"
  >
    <svg-icon
      v-if="svgIconPath"
      type="mdi"
      :path="svgIconPath"
      class="icon w-5 h-5 mr-1"
    />
    <span class="uppercase block">
      {{ lol }}
    </span>
  </span>
</template>

<script setup lang="ts">
import type { ItemDate } from "@/typings/index";
import { computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';

const props = defineProps<
{
  text: string | ItemDate;
  svgIconPath?: string;
  big?: boolean;
  isInfo?: boolean; // Pour les tags d'information (dates, lieux, entreprises)
  category?: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'design' | 'other';
  title?: string; // Pour la tooltip
}
>();

const lol = computed(() => {
  if (typeof props.text !== 'string' && 'from' in props.text) {
    return `${props.text.from} ${props.text.to ? 'to ' + props.text.to : ''} ${props.text.duration ? '(' + props.text.duration + ')' : ''}`
  } else {
    return props.text;
  }
});

const getCategoryClass = () => {
  // Si c'est un tag d'info, style sobre
  if (props.isInfo) {
    return 'bg-transparent text-gray-600';
  }

  // Couleurs par catégorie avec fond clair et texte coloré
  const categoryColors = {
    frontend: 'bg-blue-50 text-blue-600',
    backend: 'bg-green-50 text-green-600',
    database: 'bg-purple-50 text-purple-600',
    devops: 'bg-orange-50 text-orange-600',
    mobile: 'bg-red-50 text-red-600',
    design: 'bg-pink-50 text-pink-600',
    other: 'bg-gray-50 text-gray-600'
  };

  return categoryColors[props.category as keyof typeof categoryColors] || 'bg-gray-50 text-gray-600';
};
</script>
