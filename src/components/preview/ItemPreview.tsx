import type { AnyItem, SectionType } from '../../types/cv';

// Read-only render of a single item, matched to the section type.
// Templates compose this together with SectionRenderer to build the page.
export function ItemPreview({ type, item }: { type: SectionType; item: AnyItem }) {
  if (type === 'experience') {
    return (
      <div>
        <div className="flex justify-between items-baseline gap-2">
          <div>
            <div className="font-semibold text-stone-900 text-[13px]">{item.role}</div>
            <div className="text-stone-700 text-[12px]">
              {item.company}
              {item.location && ` · ${item.location}`}
            </div>
          </div>
          <div className="text-[11px] text-stone-500 whitespace-nowrap">
            {item.startDate} — {item.endDate}
          </div>
        </div>
        {item.description && (
          <ul className="mt-1.5 ml-4 list-disc text-[12px] text-stone-700 space-y-0.5">
            {item.description
              .split('\n')
              .filter(Boolean)
              .map((line, i) => (
                <li key={i}>{line}</li>
              ))}
          </ul>
        )}
      </div>
    );
  }

  if (type === 'education') {
    return (
      <div className="flex justify-between items-baseline gap-2">
        <div>
          <div className="font-semibold text-stone-900 text-[13px]">{item.degree}</div>
          <div className="text-stone-700 text-[12px]">
            {item.institution}
            {item.location && ` · ${item.location}`}
          </div>
        </div>
        <div className="text-[11px] text-stone-500 whitespace-nowrap">
          {item.startDate} — {item.endDate}
        </div>
      </div>
    );
  }

  if (type === 'skills') {
    return (
      <div className="text-[12px]">
        <span className="font-semibold text-stone-900">{item.category}: </span>
        <span className="text-stone-700">{item.value}</span>
      </div>
    );
  }

  if (type === 'languages') {
    return (
      <div className="text-[12px]">
        <span className="font-semibold text-stone-900">{item.language}: </span>
        <span className="text-stone-700">{item.level}</span>
      </div>
    );
  }

  if (type === 'awards') {
    return (
      <div>
        <div className="flex justify-between items-baseline gap-2">
          <div className="font-semibold text-stone-900 text-[13px]">{item.title}</div>
          <div className="text-[11px] text-stone-500">{item.date}</div>
        </div>
        <div className="text-[12px] text-stone-700">{item.issuer}</div>
        {item.description && (
          <div className="text-[12px] text-stone-600 mt-1">{item.description}</div>
        )}
      </div>
    );
  }

  if (type === 'projects') {
    return (
      <div>
        <div className="flex justify-between items-baseline gap-2">
          <div className="font-semibold text-stone-900 text-[13px]">{item.name}</div>
          {item.link && <div className="text-[11px] text-stone-500">{item.link}</div>}
        </div>
        {item.tech && <div className="text-[12px] text-stone-600 italic">{item.tech}</div>}
        {item.description && (
          <div className="text-[12px] text-stone-700 mt-1">{item.description}</div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="font-semibold text-stone-900 text-[13px]">{item.title}</div>
      <div className="text-[12px] text-stone-700 whitespace-pre-line">{item.content}</div>
    </div>
  );
}
