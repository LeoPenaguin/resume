<template>
<div class="section" id="description">
  <div v-if="description" v-html="description.Body"> </div>

  <ul class="interrests">
    <li v-for="interest in interests" v-bind:key="interest._id">
        <img v-bind:src="'https://cockpit.leopng.com/' + interest.icon.path" alt="">
        <span>{{interest.label}}</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Description',
  computed: {
    description () {
      return this.$store.state.description
    },
    interests () {
      return this.$store.state.interests
    }
  }
}
</script>
