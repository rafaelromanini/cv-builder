import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Languages,
  Award,
  Folder,
  Settings,
} from 'lucide-react';
import type { SectionType } from '../types/cv';

// Section type metadata: which icon represents each kind of section.
// Labels are intentionally not stored here — they come from the i18n layer
// so they react to the current language.
export const SECTION_ICONS: Record<SectionType, React.ElementType> = {
  experience: Briefcase,
  education: GraduationCap,
  skills: Sparkles,
  languages: Languages,
  awards: Award,
  projects: Folder,
  custom: Settings,
};

// Ordered list of section types shown in the "add section" menu.
export const SECTION_TYPE_ORDER: SectionType[] = [
  'experience',
  'education',
  'skills',
  'languages',
  'awards',
  'projects',
  'custom',
];
