<template>
<div class="section" id="section-3">
  <h1><i class="fa fa-user-circle-o" aria-hidden="true"></i><br /><span v-lang.competences></span></h1>
  <div class="bit-3" v-for="(competence, key) in translatedData">
    <h2>{{key}}</h2>
    <ul>
      <li v-for="comp in competence.competencesList ">
        <span class="star" :class="comp.pourcent">
          <span :class="comp.pourcent" :style="{ left: parseInt(comp.pourcent) }"></span>
        </span>{{comp.titre}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'CompetencesPersonnelle',
  data: function () {
    return {}
  },
  computed: {
    translatedData () {
      return this.translate('competencesPersonnelle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#section-3 {
  padding: 0 10% 4em;
  color: #153744;
  h2 {
    margin-bottom: 20px;
    font-size: 15px;
    color: #153744;
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 10px;
      span {
        &:last-child {
          margin-right: 1em;
        }
        &.star {
          width: 75px;
          height: 1em;
          position: relative;
          display: inline-block;
          margin-right: 1em;
          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            top: 50%;
            background: #FFBE00;
            transform: translateY(-50%);
            border-radius: 2px;
          }
          span {
            content: "";
            position: absolute;
            border: 2px solid #FFBE00;
            width: 0.6em;
            height: 0.6em;
            top: 50%;
            background: #fff;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            left: 0;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
