import {
  mdiAngular,
  mdiAws,
  mdiCodeBlockTags,
  mdiDatabaseSearch,
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
  mdiEslint,
} from "@mdi/js";

// ============================================================================
// TYPES
// ============================================================================

type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "design"
  | "other";

export interface Skill {
  label: string;
  icon: string;
  category: SkillCategory;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  from: string;
  to?: string;
  duration?: string;
  description: string;
  skills: Skill[];
  type?: "internship" | "work-study";
}

export interface Education {
  degree: string;
  description: string;
  location: string;
  from: string;
  to?: string;
}

// ============================================================================
// SKILLS (reusable)
// ============================================================================

const skill = {
  // Frontend
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

  // Backend
  php: { label: "PHP", icon: mdiLanguagePhp, category: "backend" },
  symfony: { label: "Symfony", icon: mdiSymfony, category: "backend" },
  go: { label: "Go", icon: mdiLanguageGo, category: "backend" },
  java: { label: "Java", icon: mdiLanguageJava, category: "backend" },
  csharp: { label: "C#", icon: mdiLanguageCsharp, category: "backend" },
  soap: { label: "SOAP", icon: mdiCodeBlockTags, category: "backend" },
  phpUnit: { label: "PHPUnit", icon: mdiTestTube, category: "backend" },
  wordpress: { label: "WordPress", icon: mdiWordpress, category: "backend" },

  // Database
  postgresql: {
    label: "PostgreSQL",
    icon: mdiDatabaseSearch,
    category: "database",
  },
  sql: { label: "SQL", icon: mdiDatabaseSearch, category: "database" },
  redis: { label: "Redis", icon: mdiQueueFirstInLastOut, category: "database" },

  // DevOps
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

  // Design
  figma: { label: "Figma", icon: mdiPageLayoutBody, category: "design" },

  // Other
  pinia: { label: "Pinia", icon: mdiFruitPineapple, category: "other" },
  scrum: { label: "Scrum", icon: mdiJira, category: "other" },
  windowsForm: {
    label: "Windows Forms",
    icon: mdiMicrosoftWindows,
    category: "other",
  },
} as const satisfies Record<string, Skill>;

// ============================================================================
// RESUME DATA
// ============================================================================

export const resume = {
  // Personal info
  name: "Léo Penaguin",
  about:
    "Full stack developer with 8+ years of experience, specialized in frontend and UX. " +
    "Strong expertise in Angular, Vue.js, and TypeScript. Passionate about clean code, " +
    "design systems, and agile collaboration.",

  // Work experience
  experiences: [
    {
      title: "Full Stack Developer",
      company: "Exxact Robotics",
      location: "France",
      from: "2024",
      to: "Present",
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
      title: "Frontend Developer",
      company: "Bedrock",
      location: "Lyon, France",
      from: "2022",
      to: "2024",
      description:
        "Led Vue 2 to Vue 3 migration and Vuex to Pinia refactoring. " +
        "Built design system components with PrimeVue. " +
        "Implemented E2E testing with Cypress & Playwright.",
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
      title: "Frontend Developer",
      company: "Ubitransport",
      location: "Lyon, France",
      from: "2021",
      to: "2022",
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
      title: "Full Stack Developer",
      company: "Smart Mobile Factory",
      location: "Berlin, Germany",
      from: "2018",
      to: "2021",
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
      title: "Java Developer",
      company: "Crédit Agricole",
      location: "Grenoble, France",
      from: "2016",
      to: "2018",
      type: "work-study",
      description:
        "Developed SOAP APIs in Java for banking systems. Implemented Redis caching.",
      skills: [skill.java, skill.soap, skill.redis],
    },
    {
      title: "C# Developer",
      company: "HM Clause",
      location: "Valence, France",
      from: "2015",
      to: "2016",
      type: "work-study",
      description:
        "Built Windows Forms applications in C# for agricultural data management. " +
        "Designed PostgreSQL databases.",
      skills: [skill.csharp, skill.windowsForm, skill.postgresql, skill.sql],
    },
    {
      title: "Frontend Developer",
      company: "Mediacraft",
      location: "Grenoble, France",
      from: "2015",
      duration: "6 months",
      type: "internship",
      description: "Developed responsive web interfaces for client projects.",
      skills: [],
    },
    {
      title: "Backend Developer",
      company: "Smart Mobile Factory",
      location: "Berlin, Germany",
      from: "March 2014",
      duration: "6 months",
      type: "internship",
      description: "Built Symfony REST APIs for mobile applications.",
      skills: [skill.php, skill.symfony],
    },
  ] as Experience[],

  // Education
  education: [
    {
      degree: "Master's in Computer Science & Information Systems",
      description:
        "Information system strategy, project management, business intelligence, cloud infrastructure & security.",
      location: "EPSI Grenoble, France",
      from: "2018",
      to: "2019",
    },
    {
      degree: "TOEIC 895/990",
      description: "English proficiency certification.",
      location: "EPSI Grenoble, France",
      from: "2018",
    },
    {
      degree: "Bachelor's in Computer Science",
      description:
        "Object-oriented programming, continuous integration, database design, client-server architecture.",
      location: "EPSI Grenoble, France",
      from: "2016",
      to: "2018",
    },
    {
      degree: "University Diploma in Web Development",
      description:
        "Web development, digital project management, mobile services.",
      location: "Université de Limoges, France",
      from: "2015",
      to: "2016",
    },
  ] as Education[],
};

export default resume;
