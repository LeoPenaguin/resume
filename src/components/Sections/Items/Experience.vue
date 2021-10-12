<template>
    <div v-if="experience.primary" class="experience-item large">
        <div class="experience-header">
            <div class="experience-header-image">
                <img
                    :src="require(`@/assets/experience/${experience.image}`)"
                />
            </div>

            <div class="experience-header-details">
                <h2>{{ experience.title }} 📅</h2>
                <p>
                    <b>{{ experience.company }} - {{ experience.location }}</b
                    ><br />
                    {{ experience.context }}
                </p>
            </div>
        </div>

        <ul class="skills">
            <li v-for="skill in experience.skills" :key="skill">{{ skill }}</li>
        </ul>
    </div>

    <div v-else class="experience-item">
        <p>
            <b>📅 {{ experience.date }} ({{ experience.duration }})</b>
        </p>
        <h2 class="entreprise">{{ experience.company }}</h2>
        <p>
            <b>{{ experience.type }}</b> : {{ experience.context }}<br />
        </p>

        <div class="experience-footer">
            <span class="location">{{ experience.location }}</span>
            <a class="link" target="_blank" :href="experience.link">🌐</a>
        </div>
    </div>
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
    height: fit-content;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
    background: v(items-background-color);
    padding: 2rem;
    position: relative;

    h2 {
        margin: 0;
    }

    p {
        margin: 1rem 0;
    }

    .experience-header {
        display: flex;
        gap: 20px;
        .experience-header-image {
            width: 150px;
            height: 150px;
            border-radius: 20px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .experience-header-details {
            flex: 1;
            p {
                margin: 1rem 0 0 0;
            }
        }
    }

    .skills {
        margin-top: 1rem;
    }

    .experience-footer {
        display: flex;
        width: 100%;
        gap: 1rem;
        .location {
            background: #23263a;
            border-radius: 20px;
            display: block;
            padding: 1rem 2rem;
            flex: 1;
        }
        .link {
            background: #2ca332;
            border-radius: 2rem;
            display: block;
            padding: 1rem;
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
                content: '';
                position: absolute;
                left: 0.1rem;
                top: 0.63rem;
                width: 0.7rem;
                height: 0.7rem;
                background: #5770ff;
                border-radius: 50%;
            }
        }
    }

    &.large {
        grid-column-start: 1;
        grid-column-end: 3;
    }
}

@media screen and (max-width: 1040px) {
    .experience-header {
        flex-direction: column;
    }
}
</style>
