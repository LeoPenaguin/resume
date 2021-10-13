<template>
    <div class="sections">
        <ColorSwitch />
        <Description />
        <Experience />
        <School />
    </div>
</template>

<script>
import ColorSwitch from '@/components/ColorSwitch'
import Description from '@/components/Sections/Description'
import Experience from '@/components/Sections/Experience'
import School from '@/components/Sections/School'

export default {
    name: 'Sections',
    components: {
        ColorSwitch,
        Description,
        Experience,
        School,
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
        padding-top: 3rem;
        .section-center {
            width: 1000px;
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
