<template>
<div class="section" id="section-2">
  <h1><i class="fa fa-building-o" aria-hidden="true"></i><br /><span v-lang.experience></span></h1>
  <div class="smartphone-hide bit-2">
      <div class="bigimg"></div>
  </div>
  <div class="bit-2">
    <ul>
      <li v-for="experience in translatedData.list" ng-switch="!!experience.url">
        <a target="_blank" v-bind:href="experience.url" v-if="experience.url">
          <h2><i class='fa fa-external-link'></i> {{experience.date}}</h2>
          <i class="entreprise">{{experience.entreprise}}</i> -
          <b>{{experience.type}}</b><br/> {{experience.description}} (<i>{{experience.location}})</i>
        </a>
        <span ng-switch-when="false" v-else>
            <h2>{{experience.date}}</h2>
            <i class="entreprise">{{experience.entreprise}}</i> -
            <b>{{experience.type}}</b><br/> {{experience.description}} (<i>{{experience.location}})</i>
        </span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'ExperienceProfessionnelle',
  computed: {
    translatedData () {
      return this.translate('experienceProfessionnelle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#section-2 {
  padding: 0 10% 4em;
  background-color: #153744;
  color: white;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    border-left: 2px solid #fff;
    padding-left: 24px;
  }
  li {
    font-weight: thin;
    margin: 30px 0;
    h2 {
      margin: 0;
      padding: 0;
      font-weight: normal;
      position: relative;
      &:before {
        content: '';
        width: 10px;
        height: 10px;
        background: #fff;
        -webkit-border-radius: 1em;
        -moz-border-radius: 1em;
        border-radius: 1em;
        position: absolute;
        left: -30px;
        top: 50%;
      }
    }
    &:hover a {
      color: #00A2E0;

      h2 {
        color: #00A2E0;
      }
    }
  }
  .smartphone-hide {
      padding-right: 70px;
     .bigimg {
       background-image: url('../../img/programmer.jpg');
     }
   }
}
</style>
