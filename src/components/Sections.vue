<template>
    <div class="sections">
        <ColorSwitch />
        <Description />
        <ExperienceProfessionnelle />
        <CursusScolaire />
    </div>
</template>

<script>
import CursusScolaire from '@/components/Sections/CursusScolaire'
import ExperienceProfessionnelle from '@/components/Sections/ExperienceProfessionnelle'
import Description from '@/components/Sections/Description'
import ColorSwitch from '@/components/ColorSwitch'

export default {
    name: 'Sections',
    components: {
        CursusScolaire,
        ExperienceProfessionnelle,
        Description,
        ColorSwitch,
    },
    data: function () {
        return {
            user: {
                nom: 'PENAGUIN',
                prenom: 'Léo',
                description: null,
                scrollPos: 0,
            },
        }
    },
}
</script>
