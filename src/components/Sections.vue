<template>
  <div class='sections'>
    <Accueil v-bind:user="user" />
    <ExperienceProfessionnelle />
    <CompetencesPersonnelle />
    <CursusScolaire  />
  </div>
</template>

<script>
import Accueil from '@/components/Sections/Accueil'
import CompetencesPersonnelle from '@/components/Sections/CompetencesPersonnelle'
import CursusScolaire from '@/components/Sections/CursusScolaire'
import ExperienceProfessionnelle from '@/components/Sections/ExperienceProfessionnelle'

export default {
  name: 'Sections',
  data: function () {
    return {
      user: {
        nom: 'PENAGUIN',
        prenom: 'Léo'
      }
    }
  },
  computed: {
    translatedData () {
      return this.translate('cursusScolaire')
    }
  },
  components: {
    Accueil,
    CompetencesPersonnelle,
    CursusScolaire,
    ExperienceProfessionnelle
  }
}
</script>

<style lang="scss">
.sections {
  height: 100%;
  padding-left: 200px;
  position: absolute;
  overflow-y: scroll;
  .section {
    position: relative;
    width: 100%;
    float: left;
    display: block;
    background-attachment: fixed;
    -moz-background-size: cover;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    color: #FFBE00;
    h1 {
      margin: 3em 0;
      text-align: center;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    img {
      max-width: 100%;
    }
  }

  .smartphone-hide {
    display: flex;
    align-items: center;
    flex-direction: column;
    .bigimg {
      width: 100%;
      height: 100%;
      padding: 0%;
      border-radius: 100%;
      background-position: center;
      background-size: cover;
      background-image: url('../img/education.jpg');
    }
  }
}
</style>
