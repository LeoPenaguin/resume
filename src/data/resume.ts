import {
  mdiAngular,
  mdiAws,
  mdiCodeBlockTags,
  mdiDatabaseSearch,
  mdiEmail,
  mdiEslint,
  mdiFruitPineapple,
  mdiGit,
  mdiGithub,
  mdiGitlab,
  mdiJira,
  mdiKubernetes,
  mdiLanguageCsharp,
  mdiLanguageGo,
  mdiLanguageJava,
  mdiLanguagePhp,
  mdiLanguageTypescript,
  mdiLinkedin,
  mdiMicrosoftWindows,
  mdiPageLayoutBody,
  mdiQueueFirstInLastOut,
  mdiRocket,
  mdiSpeedometer,
  mdiSymfony,
  mdiTailwind,
  mdiTerraform,
  mdiTestTube,
  mdiVuejs,
  mdiWordpress,
} from "@mdi/js";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "design"
  | "other";

export type ResumeEntryType = "internship" | "work-study";
export type SocialLinkTone = "email" | "linkedin" | "github";

export interface Skill {
  label: string;
  icon: string;
  category: SkillCategory;
}

export interface ResumeDate {
  value: string;
  precision: "year" | "month";
}

export interface ResumePeriod {
  start: ResumeDate;
  end?: ResumeDate;
  current?: boolean;
  durationLabel?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  tone: SocialLinkTone;
  external?: boolean;
}

export interface ResumeEntry {
  id: string;
  title: string;
  organization?: string;
  location: string;
  period: ResumePeriod;
  description: string;
  skills?: Skill[];
  type?: ResumeEntryType;
}

export interface ResumeData {
  name: string;
  about: string;
  socialLinks: SocialLink[];
  experiences: ResumeEntry[];
  education: ResumeEntry[];
}

export const SKILL_CATEGORY_ORDER: SkillCategory[] = [
  "frontend",
  "backend",
  "database",
  "devops",
  "design",
  "other",
];

const year = (value: `${number}`): ResumeDate => ({
  value,
  precision: "year",
});

const month = (value: `${number}-${number}`): ResumeDate => ({
  value,
  precision: "month",
});

const skill = {
  angular: { label: "Angular", icon: mdiAngular, category: "frontend" },
  vue: { label: "Vue", icon: mdiVuejs, category: "frontend" },
  nuxt: { label: "Nuxt", icon: mdiVuejs, category: "frontend" },
  typescript: {
    label: "TypeScript",
    icon: mdiLanguageTypescript,
    category: "frontend",
  },
  vite: { label: "Vite", icon: mdiSpeedometer, category: "frontend" },
  tailwind: { label: "Tailwind", icon: mdiTailwind, category: "frontend" },
  cypress: { label: "Cypress", icon: mdiTestTube, category: "frontend" },
  playwright: { label: "Playwright", icon: mdiTestTube, category: "frontend" },
  jest: { label: "Jest", icon: mdiTestTube, category: "frontend" },
  vitest: { label: "Vitest", icon: mdiTestTube, category: "frontend" },
  eslint: { label: "ESLint", icon: mdiEslint, category: "frontend" },
  php: { label: "PHP", icon: mdiLanguagePhp, category: "backend" },
  symfony: { label: "Symfony", icon: mdiSymfony, category: "backend" },
  go: { label: "Go", icon: mdiLanguageGo, category: "backend" },
  java: { label: "Java", icon: mdiLanguageJava, category: "backend" },
  csharp: { label: "C#", icon: mdiLanguageCsharp, category: "backend" },
  soap: { label: "SOAP", icon: mdiCodeBlockTags, category: "backend" },
  phpUnit: { label: "PHPUnit", icon: mdiTestTube, category: "backend" },
  wordpress: { label: "WordPress", icon: mdiWordpress, category: "backend" },
  postgresql: {
    label: "PostgreSQL",
    icon: mdiDatabaseSearch,
    category: "database",
  },
  sql: { label: "SQL", icon: mdiDatabaseSearch, category: "database" },
  redis: { label: "Redis", icon: mdiQueueFirstInLastOut, category: "database" },
  docker: { label: "Docker", icon: mdiRocket, category: "devops" },
  azureDevops: { label: "Azure DevOps", icon: mdiRocket, category: "devops" },
  aws: { label: "AWS", icon: mdiAws, category: "devops" },
  kubernetes: { label: "Kubernetes", icon: mdiKubernetes, category: "devops" },
  terraform: { label: "Terraform", icon: mdiTerraform, category: "devops" },
  githubActions: {
    label: "GitHub Actions",
    icon: mdiRocket,
    category: "devops",
  },
  jenkins: { label: "Jenkins", icon: mdiRocket, category: "devops" },
  github: { label: "GitHub", icon: mdiGithub, category: "devops" },
  gitlab: { label: "GitLab", icon: mdiGitlab, category: "devops" },
  git: { label: "Git", icon: mdiGit, category: "devops" },
  figma: { label: "Figma", icon: mdiPageLayoutBody, category: "design" },
  pinia: { label: "Pinia", icon: mdiFruitPineapple, category: "other" },
  scrum: { label: "Scrum", icon: mdiJira, category: "other" },
  windowsForm: {
    label: "Windows Forms",
    icon: mdiMicrosoftWindows,
    category: "other",
  },
} as const satisfies Record<string, Skill>;

export const resume = {
  name: "Léo Penaguin",
  about:
    "Full stack developer with 8+ years of experience, specialized in frontend and UX. " +
    "Strong expertise in Angular, Vue.js, and TypeScript. Passionate about clean code, " +
    "design systems, and agile collaboration.",
  socialLinks: [
    {
      label: "Email",
      href: "mailto:PenaguinLeo@gmail.com",
      icon: mdiEmail,
      tone: "email",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leo-penaguin",
      icon: mdiLinkedin,
      tone: "linkedin",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/LeoPenaguin",
      icon: mdiGithub,
      tone: "github",
      external: true,
    },
  ],
  experiences: [
    {
      id: "exxact-robotics",
      title: "Full Stack Developer",
      organization: "Exxact Robotics",
      location: "France",
      period: {
        start: year("2025"),
        current: true,
      },
      description:
        "Full stack development on Angular 21 with a strong focus on frontend and UX. " +
        "Building modern interfaces with TypeScript, Vite, and Tailwind. " +
        "Testing with Vitest, containerization with Docker, CI/CD with Azure DevOps.",
      skills: [
        skill.angular,
        skill.typescript,
        skill.vite,
        skill.tailwind,
        skill.vitest,
        skill.eslint,
        skill.docker,
        skill.azureDevops,
        skill.figma,
        skill.scrum,
      ],
    },
    {
      id: "bedrock",
      title: "Frontend Developer",
      organization: "Bedrock",
      location: "Lyon, France",
      period: {
        start: year("2022"),
        end: year("2025"),
      },
      description:
        "Led Vue 2 to Vue 3 migration and Vuex to Pinia refactoring. " +
        "Built design system components with PrimeVue. " +
        "Implemented E2E testing with Cypress and Playwright.",
      skills: [
        skill.vue,
        skill.nuxt,
        skill.typescript,
        skill.vite,
        skill.pinia,
        skill.tailwind,
        skill.cypress,
        skill.playwright,
        skill.eslint,
        skill.aws,
        skill.kubernetes,
        skill.terraform,
        skill.githubActions,
        skill.github,
        skill.git,
        skill.figma,
        skill.scrum,
      ],
    },
    {
      id: "ubitransport",
      title: "Frontend Developer",
      organization: "Ubitransport",
      location: "Lyon, France",
      period: {
        start: year("2021"),
        end: year("2022"),
      },
      description:
        "Developed Vue.js interfaces for transport management solutions. " +
        "Set up automated testing with Jest. Worked with CI/CD pipelines.",
      skills: [
        skill.vue,
        skill.jest,
        skill.gitlab,
        skill.git,
        skill.jenkins,
        skill.scrum,
      ],
    },
    {
      id: "smart-mobile-factory-fullstack",
      title: "Full Stack Developer",
      organization: "Smart Mobile Factory",
      location: "Berlin, Germany",
      period: {
        start: year("2018"),
        end: year("2021"),
      },
      description:
        "Built full-stack applications with Symfony APIs and Vue.js/Angular frontends. " +
        "Developed Golang microservices. Managed client projects.",
      skills: [
        skill.vue,
        skill.angular,
        skill.php,
        skill.symfony,
        skill.go,
        skill.wordpress,
        skill.phpUnit,
        skill.github,
        skill.jenkins,
        skill.git,
        skill.scrum,
      ],
    },
    {
      id: "credit-agricole",
      title: "Java Developer",
      organization: "Crédit Agricole",
      location: "Grenoble, France",
      period: {
        start: year("2016"),
        end: year("2018"),
      },
      type: "work-study",
      description:
        "Developed SOAP APIs in Java for banking systems. Implemented Redis caching.",
      skills: [skill.java, skill.soap, skill.redis],
    },
    {
      id: "hm-clause",
      title: "C# Developer",
      organization: "HM Clause",
      location: "Valence, France",
      period: {
        start: year("2015"),
        end: year("2016"),
      },
      type: "work-study",
      description:
        "Built Windows Forms applications in C# for agricultural data management. " +
        "Designed PostgreSQL databases.",
      skills: [skill.csharp, skill.windowsForm, skill.postgresql, skill.sql],
    },
    {
      id: "mediacraft",
      title: "Frontend Developer",
      organization: "Mediacraft",
      location: "Grenoble, France",
      period: {
        start: year("2015"),
        durationLabel: "6 months",
      },
      type: "internship",
      description: "Developed responsive web interfaces for client projects.",
      skills: [],
    },
    {
      id: "smart-mobile-factory-internship",
      title: "Backend Developer",
      organization: "Smart Mobile Factory",
      location: "Berlin, Germany",
      period: {
        start: month("2014-03"),
        durationLabel: "6 months",
      },
      type: "internship",
      description: "Built Symfony REST APIs for mobile applications.",
      skills: [skill.php, skill.symfony],
    },
  ],
  education: [
    {
      id: "epsi-masters",
      title: "Master's in Computer Science & Information Systems",
      organization: "EPSI Grenoble",
      location: "Grenoble, France",
      period: {
        start: year("2018"),
        end: year("2019"),
      },
      description:
        "Information system strategy, project management, business intelligence, cloud infrastructure & security.",
    },
    {
      id: "toeic",
      title: "TOEIC 895/990",
      organization: "EPSI Grenoble",
      location: "Grenoble, France",
      period: {
        start: year("2018"),
      },
      description: "English proficiency certification.",
    },
    {
      id: "epsi-bachelors",
      title: "Bachelor's in Computer Science",
      organization: "EPSI Grenoble",
      location: "Grenoble, France",
      period: {
        start: year("2016"),
        end: year("2018"),
      },
      description:
        "Object-oriented programming, continuous integration, database design, client-server architecture.",
    },
    {
      id: "limoges-diploma",
      title: "University Diploma in Web Development",
      organization: "Université de Limoges",
      location: "Limoges, France",
      period: {
        start: year("2015"),
        end: year("2016"),
      },
      description:
        "Web development, digital project management, mobile services.",
    },
  ],
} satisfies ResumeData;

export default resume;
