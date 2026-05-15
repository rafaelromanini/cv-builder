import type { CVData } from "../types/cv";
import type { Language } from "../i18n/translations";

const initialDataEn: CVData = {
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
            "Full-stack system for hospital operations management, featuring modules for patient registration, appointment scheduling, and patient care tracking. Backend built in Java with Spring Boot, exposing REST APIs and using SQL database persistence. Frontend built in React.js with TypeScript for responsive interfaces and optimized user flow. Architecture designed to scale in the cloud and integrate with external healthcare systems.",
        },
      ],
    },
  },
};

const initialDataPt: CVData = {
  personal: {
    name: "Rafael Romanini",
    title: "Desenvolvedor Fullstack",
    email: "rafaromaninideoliveira@gmail.com",
    phone: "(11) 98529-2911",
    location: "Jardim Patente Novo, São Paulo, SP",
    linkedin: "linkedin.com/in/rafaelromanini",
    github: "github.com/rafaelromanini",
    website: "",
    summary:
      "Desenvolvedor de software com experiência em Java, Spring Boot, Azure e React.js, atuando em sistemas escaláveis para operações de saúde na SBCD. Anteriormente estagiou na plataforma SaaS Divulgador Inteligente, trabalhando com Node.js e Next.js. Sempre em busca de crescimento como desenvolvedor, aprofundando o conhecimento em arquitetura de software e contribuindo com projetos de impacto real.",
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
      title: "Habilidades",
      items: [
        {
          id: "s1",
          category: "Backend",
          value: "Java, Spring Boot, C#, .NET e Node.js",
        },
        {
          id: "s2",
          category: "Frontend",
          value: "React.js, Next.js, JavaScript, TypeScript, HTML, CSS",
        },
        {
          id: "s3",
          category: "Cloud & DevOps",
          value: "Azure, AWS, Git e GitHub",
        },
        { id: "s4", category: "Banco de Dados", value: "SQL" },
        {
          id: "s5",
          category: "Dados & Automação",
          value: "Python (scripts, automação, modelos preditivos)",
        },
      ],
    },
    experience: {
      id: "experience",
      type: "experience",
      title: "Experiência",
      items: [
        {
          id: "e1",
          company: "Sociedade Brasileira Caminho de Damasco (SBCD)",
          role: "Desenvolvedor de Software Júnior",
          location: "São Paulo, SP",
          startDate: "11/2025",
          endDate: "Atual",
          description:
            "Desenvolvimento de interfaces web com React.\nDesenvolvimento de APIs REST com Java e Spring Boot.\nResponsabilidade end-to-end em frontend, backend e deploy.\nConfiguração e gerenciamento de infraestrutura em nuvem no Azure.\nEntrega de um sistema utilizado por mais de 8.000 usuários, incluindo definição de arquitetura, provisionamento de recursos Azure e deploy em produção.\nResponsável, junto a um desenvolvedor pleno, por todo o ciclo de vida da aplicação.",
        },
        {
          id: "e2",
          company: "Divulgador Inteligente",
          role: "Estagiário de Desenvolvimento Full Stack",
          location: "Vila Olímpia, São Paulo",
          startDate: "10/2024",
          endDate: "10/2025",
          description:
            "Desenvolvimento e manutenção de funcionalidades em uma aplicação SaaS.\nDesenvolvimento de componentes frontend com React e Next.js.\nLógica de backend e APIs com Node.js.\nCorreção de bugs e melhorias contínuas.",
        },
        {
          id: "e3",
          company: "Arnaldo Fernandes Contabilidade",
          role: "Assistente Administrativo",
          location: "São Caetano do Sul, SP",
          startDate: "01/2021",
          endDate: "10/2024",
          description:
            "Escrituração fiscal mensal de mais de 10 empresas.\nGerenciamento de planilhas financeiras e controle de receitas.\nSuporte de TI interno e esclarecimento de relatórios para clientes.",
        },
      ],
    },
    education: {
      id: "education",
      type: "education",
      title: "Educação",
      items: [
        {
          id: "ed1",
          institution:
            "FIAP - Faculdade de Informática e Administração Paulista",
          degree: "Pós-graduação em Arquitetura e Desenvolvimento Java",
          location: "São Paulo, SP",
          startDate: "01/2026",
          endDate: "Atual",
        },
        {
          id: "ed2",
          institution:
            "FIAP - Faculdade de Informática e Administração Paulista",
          degree: "Análise e Desenvolvimento de Sistemas",
          location: "São Paulo, SP",
          startDate: "01/2024",
          endDate: "12/2025",
        },
        {
          id: "ed3",
          institution: "ETEC Jorge Street",
          degree: "Técnico em Administração",
          location: "São Caetano do Sul, SP",
          startDate: "01/2021",
          endDate: "12/2023",
        },
      ],
    },
    languages: {
      id: "languages",
      type: "languages",
      title: "Idiomas",
      items: [
        {
          id: "l1",
          language: "Inglês",
          level: "Fluente (fala, leitura e escrita)",
        },
        { id: "l2", language: "Português", level: "Nativo" },
      ],
    },
    awards: {
      id: "awards",
      type: "awards",
      title: "Prêmios e Certificados",
      items: [
        {
          id: "a1",
          title: "Bolsa Mérito",
          issuer: "FIAP",
          date: "06/2024",
          description:
            "Segundo lugar na Bolsa Mérito FIAP, refletindo desempenho acadêmico e destaque em desafios com ONU, UNESCO, Porto e Voice of the Oceans.",
        },
        {
          id: "a2",
          title: "Java Develop - 60 horas",
          issuer: "FIAP",
          date: "01/2024",
          description:
            "Treinamento Java com foco em programação orientada a objetos e Spring Boot, cobrindo herança, polimorfismo, construtores e encapsulamento.",
        },
      ],
    },
    projects: {
      id: "projects",
      type: "projects",
      title: "Projetos",
      items: [
        {
          id: "p1",
          name: "Hospital Care",
          tech: "Java, Spring Boot, React.js, TypeScript, SQL, Azure",
          link: "github.com/rafaelromanini/hospitalcare",
          description:
            "Sistema fullstack para gestão de operações hospitalares, com módulos de cadastro de pacientes, agendamento de consultas e acompanhamento de atendimento. Backend em Java com Spring Boot, expondo APIs REST e persistência em banco SQL. Frontend em React.js com TypeScript para interfaces responsivas e fluxo de usuário otimizado. Arquitetura projetada para escalar na nuvem e integrar com sistemas externos de saúde.",
        },
      ],
    },
  },
};

const initialDataByLang: Record<Language, CVData> = {
  en: initialDataEn,
  pt: initialDataPt,
};

export function getInitialData(lang: Language): CVData {
  return initialDataByLang[lang] ?? initialDataEn;
}

// Kept for backward compatibility — points to the English version.
export const initialData = initialDataEn;

// localStorage keys
export const STORAGE_KEY = "cv-builder-data-v1";
export const LANGUAGE_STORAGE_KEY = "cv-builder-language-v1";
export const THEME_STORAGE_KEY = "cv-builder-theme-v1";
