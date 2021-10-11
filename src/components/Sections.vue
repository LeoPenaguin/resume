<template>
    <div class="sections">
        <ColorSwitch />
        <Description />
        <Experience />
        <School />
    </div>
</template>

<script>
import School from '@/components/Sections/School'
import Experience from '@/components/Sections/Experience'
import Description from '@/components/Sections/Description'
import ColorSwitch from '@/components/ColorSwitch'

export default {
    name: 'Sections',
    components: {
        School,
        Experience,
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

<style lang="scss">
.sections {
    flex-direction: column;
    align-items: flex-start;
    grid-area: content;
    font-size: 1.3em;

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-size: cover;
        padding-top: 80px;
        .section-center {
            width: 1200px;
        }
        a {
            text-decoration: none;
        }
        img {
            max-width: 100%;
        }
    }
}
</style>
