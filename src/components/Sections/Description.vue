<template>
<div class="section" id="description">
  <div v-if="description" v-html="description.Body"> </div>

  <ul class="interrests">
    <li v-for="interest in interests" v-bind:key="interest._id">
        <span class="label">{{interest.label}}</span>
        <span class="note-container">
          <span class="note-value" :style="{width: interest.note * 10 + '%'}"></span>
        </span>
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
