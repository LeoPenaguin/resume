<template>
  <div class="school-item">
    <h2>
      📅 {{ school.date }} <span>{{ school.duration }}</span>
    </h2>
    <div class="description">
      <b>{{ school.degree }}</b> -
      {{ school.description }}
    </div>
    <div class="footer">
      <img :src="`src/assets/logos/${school.image}`" />
      <span class="location">{{ school.location }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  school: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.school-item {
  padding: 2rem;
  margin: 0;
  overflow: hidden;
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  background: var(--items-background-color);
  position: relative;

  p {
    margin: 0;
  }

  h2 {
    margin: 0 0 10px 0;
  }

  .description {
    flex: 1;
  }

  .footer {
    display: flex;
    gap: 20px;
    width: 100%;
    margin-top: 1rem;

    .location {
      margin: 20px 0 0 0;
      font-weight: bold;
      display: block;
      flex: 1;
    }

    img {
      border-radius: 20px;
      overflow: hidden;
      width: 70px;
      height: 70px;
      border: 5px solid var(--items-accent-color);
    }
  }
}
</style>
