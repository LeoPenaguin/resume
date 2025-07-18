export interface Social {
  link: string;
  svgIconPath: string;
  color: string;
}

export interface Tag {
  label: string;
  svgIconPath: string;
}

export interface ItemDate {
  from: string,
  to?: string,
  duration?: string,
}

export interface Experience {
  primary: boolean;
  title?: string;
  date: ItemDate;
  company: string;
  location: string;
  context: string;
  skills?: Tag[];
  type?: string;
  link?: undefined;
}

export interface School {
  date: ItemDate;
  degree: string;
  description: string;
  location: string;
  image: string;
}
