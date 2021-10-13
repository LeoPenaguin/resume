<template>
    <div class="description-item">
        <h2>{{ skill.title }}</h2>
        <ul>
            <li v-for="skillItem in skill.items" :key="skillItem">
                {{ skillItem }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DescriptionItem',
    props: {
        skill: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.description-item {
    border-radius: 20px;
    background: v(items-background-color);
    padding: 1rem 1.5rem;
    flex: 2;
    position: relative;
    h2 {
        margin: 0;
        position: absolute;
        top: -1rem;
    }
    ul {
        padding: 0;
        list-style: none;
        li {
            line-height: 2rem;
            padding-left: 1.3rem;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                left: 0.1rem;
                top: 0.63rem;
                width: 0.7rem;
                height: 0.7rem;
                background: v(secondary);
                border-radius: 50%;
            }
        }
    }
}
</style>
