import { defineStore } from "pinia";
import { Locations } from "@/typings/enums/locations";
import type { School } from "@/typings";
import i18n from "../i18n/index.js";
import { requireImage } from "@/script/images.js";

const { t } = i18n.global;

export default defineStore({
  id: "school",
  state: () => ({
    schools: [
      {
        date: {from: "January 2019", duration: '2 years'},
        degree: t('school.degrees.master.title'),
        description: t('school.degrees.master.description'),
        location: Locations.EPSI,
        image: requireImage("logos/epsi.jpg"),
      },
      {
        date: {from: "October 2018"},
        degree: t('school.degrees.toeic.title'),
        description: t('school.degrees.toeic.description'),
        location: Locations.EPSI,
        image: requireImage("logos/epsi.jpg"),
      },
      {
        date: {from: "January 2016", duration: "3 years"},
        degree: t('school.degrees.bachelor.title'),
        description: t('school.degrees.bachelor.description'),
        location: Locations.EPSI,
        image: requireImage("logos/epsi.jpg"),
      },
      {
        date: {from: "October 2013", duration: "2 years"},
        degree: t('school.degrees.deust.title'),
        description: t('school.degrees.deust.description'),
        location: Locations.LIMOGES,
        image: requireImage("logos/limoges.jpg"),
      },
      {
        date: {from: "January 2013", duration: "2 years"},
        degree: t('school.degrees.bts.title'),
        description: t('school.degrees.bts.description'),
        location: Locations.VALENCE,
        image: requireImage("logos/briffaut.jpeg"),
      },
      {
        date: {from: "January 2011"},
        degree: t('school.degrees.bac.title'),
        description: t('school.degrees.bac.description'),
        location: Locations.VALENCE,
        image: requireImage("logos/briffaut.jpeg"),
      },
    ] as School[],
  }),
});
