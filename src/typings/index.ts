import type { Locations } from "./enums/locations";

export interface Social {
  name: string;
  link: string;
}

export interface Skill {
  key: string;
  label: string;
  type: string;
}

export interface ItemDate {
  from: string,
  to?: string,
  duration?: string,
}

export interface Experience {
  primary: boolean;
  image: string;
  title: string;
  date: ItemDate;
  company: string;
  location: Locations;
  context: string;
  skills?: Skill[];
  type: string;
  link?: undefined;
}

export interface School {
  date: ItemDate;
  degree: string;
  description: string;
  location: Locations;
  image: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}
