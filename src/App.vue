<template>
  <div class='content' id='app'>
    <NavButton/>
    <Navigation v-bind:user="user" />
    <Sections/>
  </div>
</template>

<script>
import NavButton from '@/components/NavButton'
import Navigation from '@/components/Navigation'
import Sections from '@/components/Sections'

export default {
  name: 'app',
  data: function () {
    return {
      user: {
        nom: 'PENAGUIN',
        prenom: 'Léo'
      }
    }
  },
  components: {
    Navigation,
    Sections,
    NavButton
  }
}

import('./js/script.js')
</script>

<style lang="scss">
  @media screen and (max-width: 1100px) {
    .smartphone-hide {
      display: none !important;
    }
  }

  @import './sass/style.scss';
</style>
