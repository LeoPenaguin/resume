import { computed } from 'vue'
import i18n from '../i18n.js'
const { t } = i18n.global

export const social = computed(() => [
    {
        name: 'mail',
        link: 'mailto:PenaguinLeo@gmail.com',
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/leo-penaguin',
    },
    {
        name: 'github',
        link: 'https://github.com/LeoPenaguin',
    },
    // {
    //     name: 'twitter',
    //     link: 'https://twitter.com/leo_png',
    // },
])

export const text = computed(() => [
    t('description.introduction'),
    t('description.coding'),
])

export const skills = computed(() => [
    {
        title: t('backend'),
        items: [
            t('description.php'),
            t('description.go'),
            t('description.sql'),
            t('description.api'),
        ],
    },
    {
        title: t('frontend'),
        items: [
            t('description.vue'),
            t('description.javascript'),
            t('description.react'),
            t('description.typescript'),
            t('description.html'),
            t('description.pwa'),
            t('description.css'),
        ],
    },
    {
        title: t('general'),
        items: [
            t('description.tests'),
            t('description.architecture'),
            t('description.continuous'),
            t('description.team'),
            t('description.agile'),
            t('description.english'),
        ],
    },
])
