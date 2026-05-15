import type { CVData, TemplateId } from '../../types/cv';
import { PreviewClassic } from './PreviewClassic';
import { PreviewMinimal } from './PreviewMinimal';
import { PreviewSidebar } from './PreviewSidebar';

// Picks the right template component based on the user's selection.
// Splitting this out keeps App.tsx oblivious to the template implementations.
export function CVPreview({ data, template }: { data: CVData; template: TemplateId }) {
  if (template === 'classic') return <PreviewClassic data={data} />;
  if (template === 'sidebar') return <PreviewSidebar data={data} />;
  return <PreviewMinimal data={data} />;
}
