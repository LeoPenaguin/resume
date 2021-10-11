<template>
    <div id="description" class="section">
        <div class="section-center">
            <img class="photo" src="@/assets/me.jpg" alt="" />

            <h1>Léo PENAGUIN</h1>

            <div class="social-grid">
                <a
                    v-for="item in social"
                    :key="item.name"
                    :class="`grid-item item-${item.name}`"
                    target="_blank"
                    :href="item.link"
                >
                    <component :is="`${item.name}-icon`"></component>
                </a>
            </div>

            <div class="text">
                <p>
                    Hello there! 😃 This website is an overview of my
                    professional experience and academic background. I am 28 and
                    have been living in Berlin for 2 years now. I am currently a
                    frontend web developer at Ubitransport, working on b2b
                    solutions in the transport industry.
                    <br />
                    <br />
                    My mission is to redesign and to "modernize" a tool that has
                    been on the market for a few years now, so it matches to the
                    modern industry standards. 🚀
                </p>
            </div>

            <div class="skills">
                <description-item
                    v-for="skill in skills"
                    :key="skill.title"
                    :skill="skill"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { social, skills } from '@/data/description.js'

import descriptionItem from './Items/Description.vue'

// ICONS
import LinkedinIcon from '@/components/icons/Linkedin.vue'
import GithubIcon from '@/components/icons/Github.vue'
import MailIcon from '@/components/icons/Mail.vue'
import TwitterIcon from '@/components/icons/Twitter.vue'

export default {
    name: 'Description',
    components: {
        descriptionItem,
        LinkedinIcon,
        GithubIcon,
        MailIcon,
        TwitterIcon,
    },
    data() {
        return {
            social,
            skills,
        }
    },
}
</script>

<style lang="scss">
svg {
    width: 25px;
    height: 25px;
}
</style>

<style lang="scss" scoped>
.photo {
    border-radius: 2rem;
    height: 20rem;
    margin: 0 auto;
    display: block;
}

.text {
    padding: 2rem 0;
    text-align: center;
    ul {
        text-align: left;
        list-style: none;
        padding: 0;
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
}

.skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.social-grid {
    display: flex;
    align-items: stretch;
    margin: 0 auto;
    width: fit-content;

    .grid-item {
        padding: 0.7rem 3rem;
        width: 60px;
        display: flex;
        align-items: center;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin: 5px;
        transition: transform 0.1s ease-in-out;

        span {
            line-height: 0;
        }

        &.item-mail {
            background-color: #2ecc71;
        }

        &.item-linkedin {
            background-color: #0177b5;
        }

        &.item-github {
            background-color: #323131;
        }

        &.item-twitter {
            background-color: #1da1f2;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>
