import { defineStore } from "pinia";
import { Locations } from "@/typings/enums/locations";
import type { Experience } from "@/typings";
import i18n from "../i18n/index.js";
import Skill from "@/typings/skills"
import { requireImage } from "@/script/images.js";

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
        image: requireImage("logos/bedrock.png"),
        title: "Frontend developer",
        date: {from: "2022", to: 'now'},
        company: "Bedrock Streaming",
        location: Locations.LYON,
        context: t('experience.context.bedrock'),
        skills: [
          Skill.vue,
          Skill.jest,
          Skill.cypress,
          Skill.pinia,
          Skill.css,
          Skill.tailwind,
          Skill.figma,
          Skill.gha,
          Skill.github,
          Skill.git,
          Skill.scrumEvents,
        ],
      },
      {
        primary: true,
        image: requireImage("logos/ubitransport.png"),
        title: "Frontend developer",
        date: {from: "2021", to: '2022'},
        company: "Ubitransport",
        location: Locations.LYON,
        context: t('experience.context.ubitransport'),
        skills: [
          Skill.vue,
          Skill.jest,
          Skill.gitlab,
          Skill.git,
          Skill.jenkins,
          Skill.scrumEvents,
        ],
      },
      {
        primary: true,
        image: requireImage("logos/smf.png"),
        title: "Fullstack developer",
        date: {from: "2018", to: '2021'},
        company: "Smart Mobile Factory GmBH",
        location: Locations.BERLIN,
        context: t('experience.context.smf'),
        skills: [
          Skill.vue,
          Skill.angular,
          Skill.unitTest,
          Skill.php,
          Skill.symfony,
          Skill.phpUnit,
          Skill.go,
          Skill.wordpress,
          Skill.postgresql,
          Skill.mysql,
          Skill.git,
          Skill.github,
          Skill.jenkins,
          Skill.scrumEvents,
        ],
      },
      {
        primary: false,
        image: requireImage("logos/cats.jpg"),
        title: "JAVA developer",
        date: {from: "2016", to: '2018'},
        company: "Crédit Agricole",
        location: Locations.GRENOBLE,
        context: t('experience.context.cats'),
        type: t('experience.type.sandwichcourse'),
        skills: [
          Skill.soap,
          Skill.java,
          Skill.redis,
        ],
      },
      {
        primary: false,
        image: requireImage("logos/hmclause.png"),
        title: "C# developer",
        date: {from: "2015", to: '2016'},
        company: "HM Clause",
        location: Locations.VALENCE,
        context: t('experience.context.hmclause'),
        type: t('experience.type.sandwichcourse'),
        skills: [
          Skill.csharp,
          Skill.windowsForm,
          Skill.postgresql,
          Skill.sql,
        ],
      },
      {
        primary: false,
        image: requireImage("logos/mediacraft.png"),
        date: {from: `${MARCH} 2015`, duration: SIXMONTH},
        company: "Mediacraft",
        location: Locations.GRENOBLE,
        context: t('experience.context.mediacraft'),
        type: t('experience.type.internship'),
        link: "http://mediacraft.fr",
      },
      {
        primary: false,
        image: requireImage("logos/smf.png"),
        date: {from: `${MARCH} 2014`, duration: SIXMONTH},
        company: "Smart Mobile Factory",
        type: t('experience.type.internship'),
        location: Locations.BERLIN,
        context: t('experience.context.smf2014'),
        link: "http://smartmobilefactory.com/",
      },
      {
        primary: false,
        image: requireImage("logos/cats.jpg"),
        date: {from: `${JANUARY} 2013`, duration: ONEMONTH},
        company: "Crédit Agricole",
        type: t('experience.type.internship'),
        location: Locations.VALENCE,
        context: t('experience.context.cats2013'),
        link: "https://www.credit-agricole.fr",
      },
      {
        primary: false,
        image: requireImage("logos/webfox.png"),
        date: {from: `${MAY} 2012`, duration: THREEMONTH},
        company: "Agentur Webfox",
        type: t('experience.type.internship'),
        location: Locations.BERLIN,
        context: t('experience.context.webfox'),
        link: "https://www.agentur-webfox.de",
      },
      {
        primary: false,
        image: requireImage("logos/svd.png"),
        date: {from: `${DECEMBER} 2007`, duration: ONEMONTH},
        company: "SVD Studio",
        type: t('experience.type.internship'),
        location: Locations.VALENCE,
        context: t('experience.context.svd'),
        link: "http://www.svd-studio.fr/",
      },
      {
        primary: false,
        image: requireImage("logos/bymicro.png"),
        date: {from: `${DECEMBER} 2006`, duration: ONEMONTH},
        company: "By Micro",
        type: t('experience.type.internship'),
        location: Locations.ROMANS,
        context: t('experience.context.bymicro'),
        link: "http://www.bymicro.com",
      }
    ] as Experience[],
  }),
});
