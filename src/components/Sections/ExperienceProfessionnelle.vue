<template>
<div class="section" id="section-2">
  <h1><i class="fa fa-building-o" aria-hidden="true"></i>Professional experience</h1>
  <div class="section-center">
    <ul>
      <li v-for="experience in experiences" v-bind:key="experience._id" ng-switch="!!experience.link">
        <a class="exp-item" target="_blank" v-bind:href="experience.link" v-if="experience.link">
          <h2>{{experience.date_beginning | moment("MMMM YYYY")}} <span>{{experience.period}}</span></h2>
          <span class="entreprise">
            <p><i class="fa fa-building-o" aria-hidden="true"></i> {{experience.company}}</p>
          </span>
          <p><b>{{experience.type}}</b> : {{experience.description}}<br/></p>
          <span class="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11.5" cy="8.5" r="5.5"/><path d="M11.5 14v7"/></svg>
            {{experience.location}}
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'ExperienceProfessionnelle',
  computed: {
    experiences () {
      return this.$store.state.experiences
    }
  }
}
</script>
