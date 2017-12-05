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

  @media screen and (max-width: 640px) {
    .content {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      height: 100%;
      transition: transform 0.5s;
    }
    .navbar-on {
      overflow: hidden;
      .content {
        transform: translate(60%, 0);
        .nav-button {
          position: fixed;
          top: 10px;
          z-index: 900;
          cursor: pointer;
          width: 60px;
          height: 60px;
          background: #102A33;
          padding: 15px;
          border-radius: 50%;
          .nav-button-bar {
            position: absolute;
            width: 30px;
            height: 5px;
            background: white;
            border-radius: 5px;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
            &:before {
              display: none;
            }
            &:after {
              background: white;
              top: 0;
              transform: translateY(0) rotate(-90deg);
            }
          }
        }
      }
    }
  }

  @import './sass/style.scss';
</style>
