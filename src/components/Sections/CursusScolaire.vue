<template>
<div class="section" id="section-3">
  <h1><i class="fa fa-eye" aria-hidden="true"></i>Academic background</h1>
  <div class="section-center">
    <ul>
      <li v-for="degree in degrees" v-bind:key="degree._id" ng-switch="!!cur.url">
        <span class="cursus-item">
            <h2>{{degree.date_beginning | moment("MMMM YYYY")}} <span>{{degree.period}}</span></h2>
            <span class="type">
              <p><i class="fa fa-graduation-cap" aria-hidden="true"></i> {{degree.degree}}</p>
            </span>
            <p>{{degree.description}}</p>
            <span class="location">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11.5" cy="8.5" r="5.5"/><path d="M11.5 14v7"/></svg>
              <span>{{degree.location}}</span>
            </span>
        </span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'CursusScolaire',
  computed: {
    degrees () {
      return this.$store.state.degrees
    }
  }
}
</script>
