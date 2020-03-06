<template>
  <div class='content' id='app'>
    <Navigation v-bind:user="user" />
    <Sections />
  </div>
</template>

<script>
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
      Sections
    }
  }
</script>

<style lang="scss">
  @import './sass/variables/variables.scss';
  @import './sass/style.scss';
</style>