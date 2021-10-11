<template>
    <div id="app" class="content">
        <Sections />
    </div>
</template>

<script>
import Sections from '@/components/Sections'

export default {
    name: 'App',
    components: {
        Sections,
    },
    data: function () {
        return {
            user: {
                nom: 'PENAGUIN',
                prenom: 'Léo',
            },
        }
    },
    mounted: () => {
        if (localStorage.colorScheme) {
            document.documentElement.dataset.userColorScheme =
                localStorage.colorScheme
        }
    },
}
</script>
