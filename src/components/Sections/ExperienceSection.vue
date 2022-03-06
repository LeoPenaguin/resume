<template>
    <div id="experience" class="section">
        <h1>
            <i class="fa fa-building-o" aria-hidden="true"></i
            >{{ $t('experience.title') }}
        </h1>
        <div class="section-center experience-grid">
            <experience-item
                v-for="item in experienceData"
                :key="item.title"
                :experience="item"
            />
        </div>
    </div>
</template>

<script>
import experienceData from '@/data/experience.js'
import experienceItem from './Items/ExperienceItem.vue'

export default {
    name: 'ExperienceSection',
    components: { experienceItem },
    setup() {
        return { experienceData }
    },
}
</script>

<style lang="scss" scoped>
.experience-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>
