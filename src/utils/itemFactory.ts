import type { AnyItem, SectionType } from '../types/cv';

// Generates a stable-enough id for a new item without pulling in a uuid dep.
// Collisions are extremely unlikely within a single CV session.
const newId = () => 'i' + Date.now() + Math.random().toString(36).slice(2, 6);

// Returns an empty item shaped for a given section type. Every field the
// editor/preview reads is initialised so React inputs stay controlled.
export const emptyItemFor = (type: SectionType): AnyItem => {
  const id = newId();
  switch (type) {
    case 'experience':
      return { id, company: '', role: '', location: '', startDate: '', endDate: '', description: '' };
    case 'education':
      return { id, institution: '', degree: '', location: '', startDate: '', endDate: '' };
    case 'skills':
      return { id, category: '', value: '' };
    case 'languages':
      return { id, language: '', level: '' };
    case 'awards':
      return { id, title: '', issuer: '', date: '', description: '' };
    case 'projects':
      return { id, name: '', tech: '', link: '', description: '' };
    case 'custom':
      return { id, title: '', content: '' };
    default:
      return { id };
  }
};
