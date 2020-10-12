<template>
  <div class='sections'>
    <Description />
    <ExperienceProfessionnelle />
    <CursusScolaire  />
  </div>
</template>

<script>
import CursusScolaire from '@/components/Sections/CursusScolaire'
import ExperienceProfessionnelle from '@/components/Sections/ExperienceProfessionnelle'
import Description from '@/components/Sections/Description'

export default {
  name: 'Sections',
  data: function () {
    return {
      user: {
        nom: 'PENAGUIN',
        prenom: 'Léo',
        description: null,
        scrollPos: 0
      }
    }
  },
  components: {
    CursusScolaire,
    ExperienceProfessionnelle,
    Description
  }
}
</script>
