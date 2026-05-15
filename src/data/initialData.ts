import type { CVData } from "../types/cv";

// Default CV preloaded on first visit. Acts both as a demo of every section
// type and as the author's own resume content.
export const initialData: CVData = {
  personal: {
    name: "Rafael Romanini",
    title: "Fullstack Developer",
    email: "rafaromaninideoliveira@gmail.com",
    phone: "(11) 98529-2911",
    location: "Jardim Patente Novo, São Paulo, SP",
    linkedin: "linkedin.com/in/rafaelromanini",
    github: "github.com/rafaelromanini",
    website: "",
    summary:
      "Software developer with experience in Java, Spring Boot, Azure and React.js, working on scalable systems for healthcare operations at SBCD. Previously interned at the SaaS platform Divulgador Inteligente, working with Node.js and Next.js. Always looking to grow as a developer, deepening my knowledge of software architecture and contributing to projects with real impact.",
  },
  sectionsOrder: [
    "skills",
    "experience",
    "education",
    "languages",
    "awards",
    "projects",
  ],
  sections: {
    skills: {
      id: "skills",
      type: "skills",
      title: "Skills",
      items: [
        {
          id: "s1",
          category: "Backend",
          value: "Java, Spring Boot, C#, .NET and Node.js",
        },
        {
          id: "s2",
          category: "Frontend",
          value: "React.js, Next.js, JavaScript, TypeScript, HTML, CSS",
        },
        {
          id: "s3",
          category: "Cloud & DevOps",
          value: "Azure, AWS, Git and GitHub",
        },
        { id: "s4", category: "Database", value: "SQL" },
        {
          id: "s5",
          category: "Data & Automation",
          value: "Python (scripts, automation, predictive models)",
        },
      ],
    },
    experience: {
      id: "experience",
      type: "experience",
      title: "Experience",
      items: [
        {
          id: "e1",
          company: "Sociedade Brasileira Caminho de Damasco (SBCD)",
          role: "Junior Software Developer",
          location: "São Paulo, SP",
          startDate: "11/2025",
          endDate: "Present",
          description:
            "Web interface development with React.\nREST API development with Java and Spring Boot.\nEnd-to-end ownership across frontend, backend and deployment.\nCloud infrastructure setup and management on Azure.\nDelivered a system used by more than 8,000 users, including architecture definition, Azure resource provisioning and production deployment.\nResponsible, alongside a mid-level developer, for the full application lifecycle.",
        },
        {
          id: "e2",
          company: "Divulgador Inteligente",
          role: "Full Stack Development Intern",
          location: "Vila Olímpia, São Paulo",
          startDate: "10/2024",
          endDate: "10/2025",
          description:
            "Development and maintenance of features in a SaaS application.\nFrontend component development with React and Next.js.\nBackend logic and APIs with Node.js.\nBug fixing and continuous improvements.",
        },
        {
          id: "e3",
          company: "Arnaldo Fernandes Contabilidade",
          role: "Administrative Assistant",
          location: "São Caetano do Sul, SP",
          startDate: "01/2021",
          endDate: "10/2024",
          description:
            "Monthly bookkeeping for more than 10 companies.\nFinancial spreadsheet management and revenue control.\nInternal IT support and client-facing report clarification.",
        },
      ],
    },
    education: {
      id: "education",
      type: "education",
      title: "Education",
      items: [
        {
          id: "ed1",
          institution:
            "FIAP - Faculdade de Informática e Administração Paulista",
          degree: "Postgraduate in Java Architecture and Development",
          location: "São Paulo, SP",
          startDate: "01/2026",
          endDate: "Present",
        },
        {
          id: "ed2",
          institution:
            "FIAP - Faculdade de Informática e Administração Paulista",
          degree: "Systems Analysis and Development",
          location: "São Paulo, SP",
          startDate: "01/2024",
          endDate: "12/2025",
        },
        {
          id: "ed3",
          institution: "ETEC Jorge Street",
          degree: "Technical Degree in Administration",
          location: "São Caetano do Sul, SP",
          startDate: "01/2021",
          endDate: "12/2023",
        },
      ],
    },
    languages: {
      id: "languages",
      type: "languages",
      title: "Languages",
      items: [
        {
          id: "l1",
          language: "English",
          level: "Fluent (speaking, reading and writing)",
        },
        { id: "l2", language: "Portuguese", level: "Native" },
      ],
    },
    awards: {
      id: "awards",
      type: "awards",
      title: "Awards & Certificates",
      items: [
        {
          id: "a1",
          title: "Merit Scholarship",
          issuer: "FIAP",
          date: "06/2024",
          description:
            "Second place in the FIAP Merit Scholarship, reflecting grades and outstanding performance in challenges with UN, UNESCO, Porto and Voice of the Oceans.",
        },
        {
          id: "a2",
          title: "Java Develop - 60 hours",
          issuer: "FIAP",
          date: "01/2024",
          description:
            "Java training focused on object-oriented programming and Spring Boot, covering inheritance, polymorphism, constructors and encapsulation.",
        },
      ],
    },
    projects: {
      id: "projects",
      type: "projects",
      title: "Projects",
      items: [
        {
          id: "p1",
          name: "Hospital Care",
          tech: "Java, Spring Boot, React.js, TypeScript, SQL, Azure",
          link: "github.com/rafaelromanini/hospitalcare",
          description:
            "Full-stack system for hospital operations management, featuring modules for patient registration, appointment scheduling, and patient care tracking. Backend built in Java with Spring Boot, exposing REST APIs and using SQL database persistence. Frontend built in React.js with TypeScript for responsive interfaces and optimized user flow. Architecture designed to scale in the cloud and integrate with external healthcare systems."
        },
      ],
    },
  },
};

// localStorage key for persisting the draft CV across reloads.
export const STORAGE_KEY = "cv-builder-data-v1";

// localStorage key for the user's UI language preference.
export const LANGUAGE_STORAGE_KEY = "cv-builder-language-v1";

// localStorage key for the user's UI theme preference (light/dark).
export const THEME_STORAGE_KEY = "cv-builder-theme-v1";
