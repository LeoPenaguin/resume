<template>
<nav>
  <div class="nomprenom">{{user.prenom}} {{user.nom}}</div>
  <div class="profilimg"></div>
  <ul class="navigation">
    <li><a href="#section-1" class="current"><i class="fa fa-home" aria-hidden="true"></i><span v-lang.accueilsection></span></a></li>
    <li><a href="#section-2"><i class="fa fa-building-o" aria-hidden="true"></i><span v-lang.experience></span></a></li>
    <li><a href="#section-3"><i class="fa fa-user-circle-o" aria-hidden="true"></i><span v-lang.competences></span></a></li>
    <li><a href="#section-4"><i class="fa fa-eye" aria-hidden="true"></i><span v-lang.cursus></span></a></li>
  </ul>
  <footer>
    <div class="language">
      <button v-bind:class="[language == 'en' ? 'active' : '']"
              class="language-eng"
              @click="language = 'en'">
      </button>
      <button v-bind:class="[language == 'ge' ? 'active' : '']"
              class="language-ger"
              @click="language = 'ge'">
      </button>
      <button
              v-bind:class="[language == 'fr' ? 'active' : '']"
              class="language-fra"
              @click="language = 'fr'">
      </button>
    </div>
  </footer>
</nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['user']
}

// Agrandir le menu (smartphone)
$(function () {
  $('.nav-button').click(function (e) {
    e.preventDefault()
    $('body').toggleClass('navbar-on')
  })

  $('.navigation>li').click(function (e) {
    e.preventDefault()
    $('body').toggleClass('navbar-on')
  })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  color: #FFBE00;
  overflow: hidden;
  background: #102a33;
  z-index: 900;
  display: flex;
  flex-direction: column;

  .icon {
    float: left;
    margin-right: 0.5em;
    height: 1.3em;
  }

  .nomprenom {
    width: 100%;
    text-align: center;
    color: white;
    height: 50px;
    line-height: 50px;
  }

  .nav-cache {
    display: none;
    position: fixed;
    left: 70%;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 800;
    background: rgba(0, 0, 0, 0.6);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    cursor: pointer;
  }

  .profilimg {
    float: left;
    transition: all 0.3s;
    width: 180px;
    height: 180px;
    margin: 10px;
    border-radius: 5px;
    background-image: url("../img/moi.jpg");
    background-size: cover;
    margin-bottom: 10px;
    margin-top: 0;
  }

  &:hover .nomprenom {
    color: white;
  }

  footer {
    position: absolute;
    bottom: 0;
    padding: 5%;
    width: 180px;
    background: #153744;
    margin: 10px;
    border-radius: 5px;
    .language {
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      height: 0;
      // flex-wrap: wrap;
      .language-eng,.language-fra,.language-ger {
        margin: 5px;
        padding: 5px;
        border: none;
        width: 40px;
        height: 40px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        &.active {
          &::before {
            content: "";
            background-image: url("../img/check.png");
            position: absolute;
            background-size: cover;
            left: 10px;
            top: 10px;
            right: 10px;
            bottom: 10px;
            z-index: 2;
          }
          &::after {
            content: "";
            background-image: url("../img/check.png");
            background: linear-gradient(135deg, rgba(0, 230, 255, 0.5) 0%, rgba(0, 96, 167, 0.8) 100%);
            position: absolute;
            background-size: cover;
            left: 3px;
            top: 3px;
            right: 3px;
            bottom: 3px;
            border-radius: 50%;
            border: 3px solid white;
          }
        }
      }
      .language-eng {
        background-image: url("../img/flags/eng.png");
      }
      .language-fra {
        background-image: url("../img/flags/fra.png");
      }
      .language-ger {
        background-image: url("../img/flags/ger.png");
      }
    }
  }
}
.navigation {
  list-style: none;
  padding: 0;
  float: left;
  margin: 0;

  li {
    float: left;
    line-height: 30px;
    width: 100%;
    a {
      text-decoration: none;
      padding: 15px;
      margin: 0 10px;
      width: 180px;
      float: left;
      transition: color 0.3s;
      border-radius: 5px;
      color: white;
      display: flex;
      align-items: center;

      &:hover {
          color: #00A2E0;
      }

      &.current {
          background-color: #153744;
          color: #FFBE00;
      }

      i {
          margin-right: 10px;
      }
    }
  }
}

@media screen and (max-width: 640px) {
  nav {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 60%;
    -ms-transform: translate(-100%, 0);
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    .profilimg {
      display: none;
    }
  }
}

@media screen and (max-width: 640px) {
  .navigation {
    margin-top: 40px;
    li {
      &:nth-child(odd) {
        background: rgba(0, 0, 0, 0.05);
      }
      a {
        padding: 20px;
        margin: 0;
        width: 100%;
        float: left;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
      }
    }
  }
}

</style>
