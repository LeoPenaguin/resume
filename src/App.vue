<template>
  <div class='content' id='app'>
    <Sections />
  </div>
</template>

<script>
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
      Sections
    }
  }
</script>

<style lang="scss">
  @import './sass/variables/variables.scss';
  @import './sass/style.scss';
</style>