<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const {t, locale, availableLocales} = useI18n({ useScope: 'global' })
</script>

<template>
  <div id="topbar">
    <div class="topbar-content">
      <div class="i18n">
        <select v-model="locale">
          <option
            v-for="availableLocale in availableLocales"
            :key="availableLocale"
          >
            {{ availableLocale }}
          </option>
        </select>
        (🛠️ {{ t("wip") }})
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#topbar {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  .topbar-content {
    width: 300px;
    background: var(--items-bgc);
    display: flex;
    padding: var(--space1);
    margin-top: var(--space2);
    border-radius: var(--border-radius-2);
  }
}

</style>
