<template>
  <div class="section" id="section-1">
    <div class="background">
    <div class="grid">
      <div class="grid-item item-map">
        <a target="_blank" href="https://www.google.fr/maps/place/Grenoble/@45.1842207,5.6805231,13z/data=!3m1!4b1!4m5!3m4!1s0x478af48bd689be6f:0x618c10cd6e995398!8m2!3d45.188529!4d5.724524!5m1!1e1">
          <span>
            <i class="fa fa-street-view"></i>
            <span class="item-text" v-lang.accueil.iAmHere></span>
          </span>
        </a>
      </div>
      <div class="grid-item item-mail">
        <a target="_blank" href="mailto:PenaguinLeo@gmail.com">
          <span>
            <i class="fa fa-envelope-o"></i>
            <span class="item-text" v-lang.accueil.mail></span>
          </span>
        </a>
      </div>
      <div class="grid-item item-phone">
        <a target="_blank" href="tel:0670414416">
          <span>
            <i class="fa fa-mobile"></i>
            <span class="item-text" v-lang.accueil.phone></span>
          </span>
        </a>
      </div>
      <div class="grid-item item-linkedin">
        <a target="_blank" href="https://fr.linkedin.com/pub/l%C3%A9o-penaguin/a6/7a/b14">
          <span>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </span>
        </a>
      </div>
      <div class="grid-item item-github">
        <a target="_blank" href="https://github.com/LeoPenaguin">
          <span>
            <i class="fa fa-github" aria-hidden="true"></i>
          </span>
        </a>
      </div>
      <div class="grid-item item-twitter">
        <a target="_blank" href="https://twitter.com/leo_png">
          <span>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </span>
        </a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Accueil',
    props: ['user'],
    data: function () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @keyframes backgroundmove {
    0% {
      background-position: 0px 1805px;
    }
    100% {
      background-position: 0px 0px;
    }
  }

  #section-1 {
    height: 100%;
    text-align: center;
    color: white;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("../../img/background.png");
    animation-name: backgroundmove;
    animation-duration: 180s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-size: 700px;
    .background {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(76, 223, 239, 0.92) 0%, rgba(111, 174, 220, 0.98) 100%);
    }
    .grid {
      text-align: center;
      flex-wrap: wrap;
      justify-content: center;
      width: 80vh;
      height: 80vh;
      position: relative;
      .grid-item {
        height: 100px;
        width: 100px;
        background-size: 100%;
        overflow: hidden;
        transform: translateZ(0);
        transition: background 0.2s;
        background-position: center;
        background-size: 20%;
        background-repeat: no-repeat;
        padding: 0 20px;
        position: absolute;
        border-radius: 100%;
        &.item-map {
          background-image: url("../../img/anim_map.gif");
          background-size: cover;
          transition: background 0.2s;
          top: 15%;
          left: 0;
          ::after {
            content: "";
            background: #4BE0EF;
            opacity: 0.35;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
          }
          &:hover {
            background-size: 130%;
            transition: background 0.2s;
            ::after {
              background: darken(#4BE0EF, 30%);
            }
          }
        }

        &.item-mail {
          background-image: url("../../img/anim_mail.gif");
          background-size: cover;
          transition: background 0.2s;
          margin-left: -50px;
          top: 0;
          left: 50%;
          ::after {
            content: "";
            background: #FFDB00;
            opacity: 0.35;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
          }
          &:hover {
            background-size: 130%;
            ::after {
              background: darken(#FFDB00, 10%);
            }
          }
        }

        &.item-phone {
          background-image: url("../../img/anim_phone.gif");
          background-size: cover;
          transition: background 0.2s;
          top: 15%;
          right: 0;
          ::after {
            content: "";
            background: #8A8E84;
            opacity: 0.35;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
          }
          &:hover {
            background-size: 130%;
            ::after {
              background: darken(#8A8E84, 10%);
            }
          }
        }

        &.item-linkedin {
          background-color: #0177B5;
          bottom: 15%;
          left: 0;
          &:hover {
            background-color: darken(#0177B5, 10%);
          }
          a {
            font-size: 4em;
          }
        }

        &.item-github {
          background-color: #323131;
          bottom: 0;
          left: 50%;
          margin-left: -50px;
          &:hover {
            background-color: lighten(#323131, 10%);
          }
          a {
            font-size: 4em;
          }
        }

        &.item-twitter {
          background-color: #fff;
          color: #1DA1F2;
          bottom: 15%;
          right: 0;
          &:hover {
            background-color: darken(white, 20%);
          }
          a {
            font-size: 4em;
          }
        }

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
        }

        ::after {
          transition: background 0.2s;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    #section-1 {
      .nom-prenom h1 {
        font-size: 12vw;
      }
      .grid {
        .grid-item {
          a {
            font-size: 50px;
            .item-text {
              display: none;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    #section-1 .coord .coord-item a span {
      text-align: left;
      padding: 10px 20px;
      display: none;
    }
  }

</style>