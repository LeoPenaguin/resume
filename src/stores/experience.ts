import { defineStore } from "pinia";
import type { Experience } from "@/typings";
import i18n from "../i18n/index.js";
import skill from "@/services/skills"

const { t } = i18n.global;

const ONEMONTH = `1 ${t('date.month')}`
const THREEMONTH = `3 ${t('date.month')}`
const SIXMONTH = `6 ${t('date.month')}`

const JANUARY = t('date.january')
const MARCH = t('date.march')
const MAY = t('date.may')
const DECEMBER = t('date.december')

export default defineStore({
  id: "experience",
  state: () => ({
    experiences: [
      {
        primary: true,
        title: "Frontend developer",
        date: {from: "2022", to: 'now'},
        company: "Bedrock Streaming",
        location: "Lyon, France",
        context: t('experience.context.bedrock'),
        skills: [
          skill.vue,
          skill.jest,
          skill.cypress,
          skill.pinia,
          skill.css,
          skill.tailwind,
          skill.figma,
          skill.gha,
          skill.github,
          skill.git,
          skill.scrumEvents,
        ],
      },
      {
        primary: true,
        title: "Frontend developer",
        date: {from: "2021", to: '2022'},
        company: "Ubitransport",
        location: "Lyon, France",
        context: t('experience.context.ubitransport'),
        skills: [
          skill.vue,
          skill.jest,
          skill.gitlab,
          skill.git,
          skill.jenkins,
          skill.scrumEvents,
        ],
      },
      {
        primary: true,
        title: "Fullstack developer",
        date: {from: "2018", to: '2021'},
        company: "Smart Mobile Factory GmBH",
        location: "Berlin, Germany",
        context: t('experience.context.smf'),
        skills: [
          skill.vue,
          skill.angular,
          skill.unitTest,
          skill.php,
          skill.symfony,
          skill.phpUnit,
          skill.go,
          skill.wordpress,
          skill.postgresql,
          skill.mysql,
          skill.git,
          skill.github,
          skill.jenkins,
          skill.scrumEvents,
        ],
      },
      {
        primary: false,
        title: "JAVA developer",
        date: {from: "2016", to: '2018'},
        company: "Crédit Agricole",
        location: "Grenoble, France",
        context: t('experience.context.cats'),
        type: t('experience.type.sandwichcourse'),
        skills: [
          skill.soap,
          skill.java,
          skill.redis,
        ],
      },
      {
        primary: false,
        title: "C# developer",
        date: {from: "2015", to: '2016'},
        company: "HM Clause",
        location: "Valence, France",
        context: t('experience.context.hmclause'),
        type: t('experience.type.sandwichcourse'),
        skills: [
          skill.csharp,
          skill.windowsForm,
          skill.postgresql,
          skill.sql,
        ],
      },
      {
        primary: false,
        title: "Web developer",
        date: {from: `${MARCH} 2015`, duration: SIXMONTH},
        company: "Mediacraft",
        location: "Grenoble, France",
        context: t('experience.context.mediacraft'),
        type: t('experience.type.internship'),
      },
      {
        primary: false,
        title: "Backend developer",
        date: {from: `${MARCH} 2014`, duration: SIXMONTH},
        company: "Smart Mobile Factory",
        type: t('experience.type.internship'),
        location: "Berlin, Germany",
        context: t('experience.context.smf2014'),
      },
      {
        primary: false,
        title: "Backend developer",
        date: {from: `${JANUARY} 2013`, duration: ONEMONTH},
        company: "Crédit Agricole",
        type: t('experience.type.internship'),
        location: "Valence, France",
        context: t('experience.context.cats2013'),
      },
      {
        primary: false,
        title: "Backend developer",
        date: {from: `${MAY} 2012`, duration: THREEMONTH},
        company: "Agentur Webfox",
        type: t('experience.type.internship'),
        location: "Berlin, Germany",
        context: t('experience.context.webfox'),
      },
      {
        primary: false,
        title: "Designer",
        date: {from: `${DECEMBER} 2007`, duration: ONEMONTH},
        company: "SVD Studio",
        type: t('experience.type.internship'),
        location: "Valence, France",
        context: t('experience.context.svd'),
      },
      {
        primary: false,
        title: "Computer technician",
        date: {from: `${DECEMBER} 2006`, duration: ONEMONTH},
        company: "By Micro",
        type: t('experience.type.internship'),
        location: "Romans, France",
        context: t('experience.context.bymicro'),
      }
    ] as Experience[],
  }),
});
