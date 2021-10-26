import { ref } from 'vue'
import i18n from '../i18n.js'
const { t } = i18n.global

export const social = ref([
    {
        name: 'mail',
        link: 'mailto:PenaguinLeo@gmail.com',
    },
    {
        name: 'linkedin',
        link: 'https://fr.linkedin.com/pub/l%C3%A9o-penaguin/a6/7a/b14',
    },
    {
        name: 'github',
        link: 'https://github.com/LeoPenaguin',
    },
    {
        name: 'twitter',
        link: 'https://twitter.com/leo_png',
    },
])

export const text = ref([
    t('description.introduction'),
    t('description.coding'),
])

export const skills = ref([
    {
        title: t('backend'),
        items: [
            '🐘 PHP, Symfony',
            '🦫 Go',
            'SQL, MySQL, Postgres',
            'REST API / GRAPHQL API',
        ],
    },
    {
        title: t('frontend'),
        items: [
            '✨ Vuejs',
            'Javascript ES6',
            'React',
            'TypeScript',
            'HTML5',
            '📱 PWA',
            'CSS 3, SASS, SCSS',
        ],
    },
    {
        title: t('general'),
        items: [
            '🔎 Unit tests',
            'Software architecture : MVC (Model–view–controller), OOP (Object-oriented programming)',
            '🐙 Continuous integration : Jenkins, Github actions',
            'Team work',
            'Experience with Agile methodology',
            'Technical and professional English',
        ],
    },
])
