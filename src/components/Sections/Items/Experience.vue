<template>
    <div v-if="experience.primary" class="experience-item large">
        <h2>{{ experience.title }}</h2>
        <p>
            <b>{{ experience.company }} - {{ experience.location }}</b
            ><br />
            {{ experience.context }}
        </p>
        <ul v-for="skill in experience.skills" :key="skill">
            <li>{{ skill }}</li>
        </ul>
    </div>
    <a v-else class="experience-item" target="_blank" :href="experience.link">
        <p>
            <b>{{ experience.date }} ({{ experience.duration }})</b>
        </p>
        <h2 class="entreprise">{{ experience.company }}</h2>
        <p>
            <b>{{ experience.type }}</b> : {{ experience.context }}<br />
        </p>
        <span class="location">{{ experience.location }}</span>
    </a>
</template>

<script>
export default {
    name: 'ExperienceItem',
    props: {
        experience: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.experience-item {
    margin: 0;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
    background: v(items-background-color);
    margin-top: 20px;
    padding: 2rem;
    position: relative;

    h2 {
        margin: 0;
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
                content: '';
                position: absolute;
                left: 0.1rem;
                top: 0.63rem;
                width: 0.7rem;
                height: 0.7rem;
                background: #5770ff;
                border-radius: 50%;
            }
            .icon-box {
                position: absolute;
                top: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: 0.7rem;
                svg {
                    width: 1.6rem;
                    height: 1.6rem;
                    margin-left: 0.5rem;
                }
            }
        }
    }

    &.large {
        grid-column-start: 1;
        grid-column-end: 3;
    }
}
</style>
