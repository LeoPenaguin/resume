<template>
<div class="section" id="section-4">
  <h1><i class="fa fa-eye" aria-hidden="true"></i><br /><span v-lang.cursus></span></h1>
  <div class="bit-2">
    <ul>
      <li v-for="cursus in translatedData.list" ng-switch="!!cur.url">
        <a target="_blank" v-bind:href="cursus.url" v-if="cursus.url">
          <h2><i class='fa fa-external-link'></i> {{cursus.date}}</h2>
          <b>{{cursus.type}}</b> {{cursus.description}} <i>{{cursus.location}}</i>
        </a>
        <span v-else>
            <h2>{{cursus.date}}</h2>
            <b>{{cursus.type}}</b> {{cursus.description}} <i>{{cursus.location}}</i>
        </span>
      </li>
    </ul>
  </div>
  <div class="smartphone-hide bit-2">
    <div class="bigimg"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CursusScolaire',
  computed: {
    translatedData () {
      return this.translate('cursusScolaire')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#section-4 {
  padding: 0 10% 4em;
  background-color: #153744;
  color: white;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    border-left: 2px solid #fff;
    padding-left: 24px;
    padding-right: 24px;
    border-right: 2px solid #fff;
    border-left: 0;
  }
  li {
    font-weight: thin;
    margin: 30px 0;
    text-align: right;
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
        right: -30px;
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
    padding-left: 70px;
    .bigimg {
      background-image: url('../../img/education.jpg');
    }
  }
}
</style>
