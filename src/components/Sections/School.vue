<template>
    <div id="school" class="section">
        <h1>{{ $t('academic') }}</h1>
        <div class="section-center school-grid">
            <school-item
                v-for="item in schoolData"
                :key="item.degree"
                :school="item"
            >
            </school-item>
        </div>
    </div>
</template>

<script>
import schoolData from '@/data/school.js'
import SchoolItem from './Items/School.vue'

export default {
    name: 'School',
    components: {
        SchoolItem,
    },
    setup() {
        return { schoolData }
    },
}
</script>

<style lang="scss" scoped>
.school-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 5em;
}
</style>
