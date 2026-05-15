// Core domain types for the CV builder.
// Sections are loosely typed (string-indexed) so the same Section shape
// can represent experience, education, skills, etc., and be extended with
// custom sections without a schema migration.

export type SectionType =
  | 'experience'
  | 'education'
  | 'skills'
  | 'languages'
  | 'awards'
  | 'projects'
  | 'custom';

export interface AnyItem {
  id: string;
  [key: string]: string | undefined;
}

export interface Section {
  id: string;
  type: SectionType;
  title: string;
  items: AnyItem[];
}

export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  summary: string;
}

export interface CVData {
  personal: Personal;
  sectionsOrder: string[];
  sections: Record<string, Section>;
}

export type TemplateId = 'minimal' | 'classic' | 'sidebar';
export type ViewMode = 'edit' | 'preview' | 'split';
