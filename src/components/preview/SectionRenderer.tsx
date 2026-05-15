import type { Section, TemplateId } from '../../types/cv';
import { ItemPreview } from './ItemPreview';

// Renders the header + items for one section, choosing the right title
// styling per template. Empty sections are hidden so unused defaults don't
// bloat the preview.
export function SectionRenderer({ section, template }: { section: Section; template: TemplateId }) {
  if (!section.items?.length) return null;
  const { type, title, items } = section;

  const titleClass =
    template === 'classic'
      ? 'text-[13px] font-bold uppercase tracking-[0.18em] text-stone-900 border-b border-stone-300 pb-1 mb-3'
      : template === 'sidebar'
      ? 'text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2'
      : 'text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2 before:content-[""] before:w-1 before:h-4 before:bg-stone-900 before:rounded-full';

  return (
    <section className="mb-5 break-inside-avoid">
      <h2 className={titleClass}>{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <ItemPreview key={item.id} type={type} item={item} />
        ))}
      </div>
    </section>
  );
}
