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

<style lang="scss">
* {
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    background: v(background-color);
    color: v(text-color);
    transition: background 0.5s, color 0.5s;
}

h1 {
    font-size: 50px;
    text-align: center;
    background: linear-gradient(45deg, #5770ff, #c644fd);
    color: v(items-background-color);
    display: block;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -o-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 2rem auto;
}

h2 {
    color: #5770ff;
    font-size: 2rem;
    line-height: 2.375rem;
    font-weight: 800;
    text-align: left;
}

h3 {
    color: #ff75b3;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.75rem;
}

p {
    font-size: 1.125rem;
    line-height: 1.5em;
}

a {
    color: v(text-color);
}

textarea,
input,
button {
    outline: none;
}

#app {
    font-family: 'Montserrat', sans-serif;
}
</style>
