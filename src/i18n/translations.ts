// Centralised translation strings. Keys are grouped by surface (topbar,
// editor, preview, etc.) so callers can find related copy quickly.
// Add a new key here first, then consume it via the useTranslation hook.

export type Language = 'pt' | 'en';

export interface Translation {
  app: {
    title: string;
    autosaveHint: string;
  };
  topbar: {
    templateMinimal: string;
    templateClassic: string;
    templateSidebar: string;
    viewEdit: string;
    viewSplit: string;
    viewPreview: string;
    exportJson: string;
    exportPdf: string;
    languageLabel: string;
    themeLabel: string;
    themeLight: string;
    themeDark: string;
  };
  personal: {
    heading: string;
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    website: string;
    summary: string;
  };
  sections: {
    heading: string;
    headingHint: string;
    reset: string;
    resetConfirm: string;
    addItem: string;
    addSection: string;
  };
  sectionTypes: {
    experience: string;
    education: string;
    skills: string;
    languages: string;
    awards: string;
    projects: string;
    custom: string;
  };
  fields: {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    descriptionMultiline: string;
    degree: string;
    institution: string;
    category: string;
    skills: string;
    language: string;
    level: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    projectName: string;
    tech: string;
    link: string;
    content: string;
  };
  preview: {
    about: string;
  };
}

export const SUPPORTED_LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: 'PT' },
  { code: 'en', label: 'English', flag: 'EN' },
];

// Each bundle is annotated with `Translation` so missing keys raise a
// type error and string literals stay assignable to one another.
const pt: Translation = {
  app: {
    title: 'CV Builder',
    autosaveHint: 'Auto-salvo no navegador',
  },
  topbar: {
    templateMinimal: 'Minimalista',
    templateClassic: 'Clássico',
    templateSidebar: 'Sidebar',
    viewEdit: 'Apenas edição',
    viewSplit: 'Lado a lado',
    viewPreview: 'Apenas preview',
    exportJson: 'JSON',
    exportPdf: 'Exportar PDF',
    languageLabel: 'Idioma',
    themeLabel: 'Tema',
    themeLight: 'Tema claro',
    themeDark: 'Tema escuro',
  },
  personal: {
    heading: 'Dados Pessoais',
    name: 'Nome completo',
    title: 'Cargo / Título',
    email: 'Email',
    phone: 'Telefone',
    location: 'Localização',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    website: 'Website',
    summary: 'Resumo profissional',
  },
  sections: {
    heading: 'Seções',
    headingHint: 'arraste para reordenar',
    reset: 'Resetar',
    resetConfirm: 'Tem certeza que quer resetar tudo?',
    addItem: 'Adicionar item',
    addSection: 'Adicionar seção',
  },
  sectionTypes: {
    experience: 'Experiência',
    education: 'Educação',
    skills: 'Competências',
    languages: 'Idiomas',
    awards: 'Prêmios/Certificados',
    projects: 'Projetos',
    custom: 'Seção Customizada',
  },
  fields: {
    role: 'Cargo',
    company: 'Empresa',
    location: 'Local',
    startDate: 'Início',
    endDate: 'Fim',
    descriptionMultiline: 'Descrição (uma linha por bullet point)',
    degree: 'Curso/Grau',
    institution: 'Instituição',
    category: 'Categoria',
    skills: 'Habilidades (separadas por vírgula)',
    language: 'Idioma',
    level: 'Nível',
    title: 'Título',
    issuer: 'Emissor',
    date: 'Data',
    description: 'Descrição',
    projectName: 'Nome do projeto',
    tech: 'Tecnologias',
    link: 'Link',
    content: 'Conteúdo',
  },
  preview: {
    about: 'Sobre',
  },
};

const en: Translation = {
  app: {
    title: 'CV Builder',
    autosaveHint: 'Auto-saved in your browser',
  },
  topbar: {
    templateMinimal: 'Minimal',
    templateClassic: 'Classic',
    templateSidebar: 'Sidebar',
    viewEdit: 'Edit only',
    viewSplit: 'Side by side',
    viewPreview: 'Preview only',
    exportJson: 'JSON',
    exportPdf: 'Export PDF',
    languageLabel: 'Language',
    themeLabel: 'Theme',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
  },
  personal: {
    heading: 'Personal Info',
    name: 'Full name',
    title: 'Job title',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    website: 'Website',
    summary: 'Professional summary',
  },
  sections: {
    heading: 'Sections',
    headingHint: 'drag to reorder',
    reset: 'Reset',
    resetConfirm: 'Are you sure you want to reset everything?',
    addItem: 'Add item',
    addSection: 'Add section',
  },
  sectionTypes: {
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    awards: 'Awards/Certificates',
    projects: 'Projects',
    custom: 'Custom Section',
  },
  fields: {
    role: 'Role',
    company: 'Company',
    location: 'Location',
    startDate: 'Start',
    endDate: 'End',
    descriptionMultiline: 'Description (one line per bullet)',
    degree: 'Degree',
    institution: 'Institution',
    category: 'Category',
    skills: 'Skills (comma separated)',
    language: 'Language',
    level: 'Level',
    title: 'Title',
    issuer: 'Issuer',
    date: 'Date',
    description: 'Description',
    projectName: 'Project name',
    tech: 'Tech stack',
    link: 'Link',
    content: 'Content',
  },
  preview: {
    about: 'About',
  },
};

export const translations: Record<Language, Translation> = { pt, en };
