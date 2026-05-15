import type { CVData } from '../types/cv';

// Triggers a browser download of the current CV as a JSON file.
// The file name is derived from the user's name so multiple CVs don't collide.
export const downloadCVAsJSON = (data: CVData) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const slug = data.personal.name.replace(/\s+/g, '-').toLowerCase() || 'my-cv';
  a.href = url;
  a.download = `cv-${slug}.json`;
  a.click();
  URL.revokeObjectURL(url);
};
