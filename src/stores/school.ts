import { defineStore } from "pinia";
import { Locations } from "@/typings/locations";
import type { School } from "@/typings/school";

export default defineStore({
  id: "school",
  state: () => ({
    schools: [
      {
        date: "January 2019",
        duration: "2 years",
        degree: "Master's degree in Computer Science",
        description: "Expert in Computer Science and IT",
        location: Locations.EPSI,
        image: "epsi.jpg",
      },
      {
        date: "October 2018",
        degree: "TOEIC",
        description:
          "English for International Communication Test : 895 points / 990",
        location: Locations.EPSI,
        image: "epsi.jpg",
      },
      {
        date: "January 2016",
        duration: "3 years",
        degree: "Bachelor",
        description: "Bachelor's degree in computer science and coding",
        location: Locations.EPSI,
        image: "epsi.jpg",
      },
      {
        date: "October 2013",
        duration: "2 years",
        degree: "French scientific and technical university diploma",
        description: "Webmaster and Internet professions",
        location: Locations.LIMOGES,
        image: "limoges.jpg",
      },
      {
        date: "January 2013",
        duration: "2 years",
        degree: "Advanced technician's certificate",
        description:
          "BTS Service Informatique aux Organisations Option réseaux et télécommunications",
        location: Locations.VALENCE,
        image: "briffaut.jpeg",
      },
      {
        date: "January 2011",
        degree: "High school diploma",
        description: "Computer science high school diploma",
        location: Locations.VALENCE,
        image: "briffaut.jpeg",
      },
    ] as School[],
  }),
});
