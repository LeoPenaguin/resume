<template>
  <div v-if="experience.primary" class="experience-item large">
    <div class="experience-header">
      <!-- <img
                class="image"
                :src="require(`@/assets/experience/${experience.image}`)"
            /> -->

      <div class="details">
        <h2>
          {{ experience.title }}
          <span class="date">📅 {{ experience.date }}</span>
        </h2>
        <p>
          <span class="company">🏢 {{ experience.company }}</span>
          <span class="location">{{ experience.location }}</span>
          <span class="context">{{ experience.context }}</span>
        </p>
      </div>
    </div>

    <ul class="skills">
      <li v-for="skill in experience.skills" :key="skill">{{ skill }}</li>
    </ul>
  </div>

  <div v-else class="experience-item">
    <div class="experience-header">
      <img class="image" :src="`src/assets/logos/${experience.image}`" />

      <div class="details">
        <span class="company">
          <h2>{{ experience.company }}</h2>
        </span>
        <span class="date">📅 {{ experience.date }}</span>
        <span class="location">{{ experience.location }}</span>
      </div>
    </div>

    <span class="context"><b>{{ experience.type }}</b> {{ experience.context }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.experience-item {
  margin: 0;
  overflow: hidden;
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  background: var(--items-background-color);
  padding: 2rem;
  position: relative;

  h2 {
    margin: 0;

    .date {
      color: var(--text-color);
      font-size: 0.7em;
    }
  }

  p {
    margin: 1rem 0;
  }

  .experience-header {
    display: flex;
    gap: 20px;

    img.image {
      width: 150px;
      height: 150px;
      border-radius: 20px;
      overflow: hidden;
      border: 5px solid var(--items-accent-color);
    }

    .details {
      flex: 1;

      .company {
        font-weight: bold;
      }

      .location {
        font-weight: bold;
      }

      p {
        margin: 1rem 0 0 0;

        .context {
          display: block;
        }
      }
    }
  }

  .experience-footer {
    display: flex;
    width: 100%;
    gap: 1rem;

    .location {
      display: block;
      flex: 1;
      color: var(--primary);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      line-height: 2rem;
      padding-left: 1.3rem;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        left: 0.1rem;
        top: 0.63rem;
        width: 0.7rem;
        height: 0.7rem;
        background: var(--secondary);
        border-radius: 50%;
      }
    }
  }

  &.large {
    grid-column-start: 1;
    grid-column-end: 3;

    .skills {
      background: var(--items-accent-color);
      width: 100%;
      border-radius: 20px;
      padding: 1rem;
      margin: 1rem 0 0 0;
    }

    .location {
      margin-left: 1rem;
    }
  }

  &:not(.large) {
    img.image {
      width: 65px;
      height: 65px;
      border: 5px solid var(--items-accent-color);
    }

    .details {

      .company,
      .date,
      .location {
        display: block;
        margin-bottom: 0.5rem;
      }

      .company {
        color: var(--primary);
      }
    }

    .context {
      background: var(--items-accent-color);
      width: 100%;
      border-radius: 20px;
      padding: 1rem;
      margin: 1rem 0 0 0;
      flex: 1;
    }
  }
}

@media screen and (max-width: 1040px) {
  .experience-header {
    flex-direction: column;
  }
}
</style>
