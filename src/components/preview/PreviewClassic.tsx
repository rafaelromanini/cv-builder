import { Fragment, type ReactNode } from 'react';
import type { CVData } from '../../types/cv';
import { mailHref, urlHref } from '../../utils/links';
import { SectionRenderer } from './SectionRenderer';

const linkClass = 'hover:text-stone-900 hover:underline';

// Joins an array of nodes with a separator while preserving JSX (so we can
// keep <a> elements clickable instead of collapsing them to text).
function joinWithDot(items: ReactNode[]): ReactNode[] {
  return items.flatMap((node, i) =>
    i === 0 ? [<Fragment key={i}>{node}</Fragment>] : [' · ', <Fragment key={i}>{node}</Fragment>],
  );
}

// Classic template: serif font, centred header, two horizontal lines.
// Pairs well with traditional/conservative industries.
export function PreviewClassic({ data }: { data: CVData }) {
  const { personal, sectionsOrder, sections } = data;

  const contactLine: ReactNode[] = [];
  if (personal.email) {
    contactLine.push(
      <a key="email" href={mailHref(personal.email)} className={linkClass}>
        {personal.email}
      </a>,
    );
  }
  if (personal.phone) contactLine.push(personal.phone);
  if (personal.location) contactLine.push(personal.location);

  const linksLine: ReactNode[] = [];
  for (const key of ['linkedin', 'github', 'website'] as const) {
    const value = personal[key];
    if (!value) continue;
    linksLine.push(
      <a
        key={key}
        href={urlHref(value)}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {value}
      </a>,
    );
  }

  return (
    <div
      className="bg-white text-stone-900 p-10"
      style={{
        fontFamily: '"Georgia", "Times New Roman", serif',
        minHeight: '297mm',
        width: '210mm',
      }}
    >
      <header className="mb-6 text-center border-b-2 border-stone-900 pb-4">
        <h1 className="text-[26px] font-bold tracking-wide">{personal.name}</h1>
        <div className="text-[13px] text-stone-700 italic mt-1">{personal.title}</div>
        <div className="text-[11px] text-stone-600 mt-2">{joinWithDot(contactLine)}</div>
        <div className="text-[11px] text-stone-600">{joinWithDot(linksLine)}</div>
      </header>
      {personal.summary && (
        <section className="mb-5">
          <p className="text-[12px] text-stone-700 leading-relaxed text-justify">
            {personal.summary}
          </p>
        </section>
      )}
      {sectionsOrder.map(
        (id) => sections[id] && <SectionRenderer key={id} section={sections[id]} template="classic" />,
      )}
    </div>
  );
}
