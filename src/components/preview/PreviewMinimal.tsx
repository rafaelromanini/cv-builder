import { Code2, Globe, Link, Mail, MapPin, Phone } from 'lucide-react';
import type { CVData } from '../../types/cv';
import { mailHref, urlHref } from '../../utils/links';
import { SectionRenderer } from './SectionRenderer';

const linkClass = 'hover:text-stone-900 hover:underline';

// Minimalist template: clean header, single column, modest accent.
export function PreviewMinimal({ data }: { data: CVData }) {
  const { personal, sectionsOrder, sections } = data;

  return (
    <div
      className="bg-white text-stone-900 p-10"
      style={{
        fontFamily: '"Inter", -apple-system, system-ui, sans-serif',
        minHeight: '297mm',
        width: '210mm',
      }}
    >
      <header className="mb-7">
        <h1 className="text-[28px] font-bold tracking-tight">{personal.name}</h1>
        <div className="text-[14px] text-stone-600 mt-0.5">{personal.title}</div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-stone-500 mt-3">
          {personal.email && (
            <a href={mailHref(personal.email)} className={`flex items-center gap-1 ${linkClass}`}>
              <Mail size={11} /> {personal.email}
            </a>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1">
              <Phone size={11} /> {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="flex items-center gap-1">
              <MapPin size={11} /> {personal.location}
            </span>
          )}
          {personal.linkedin && (
            <a
              href={urlHref(personal.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 ${linkClass}`}
            >
              <Link size={11} /> {personal.linkedin}
            </a>
          )}
          {personal.github && (
            <a
              href={urlHref(personal.github)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 ${linkClass}`}
            >
              <Code2 size={11} /> {personal.github}
            </a>
          )}
          {personal.website && (
            <a
              href={urlHref(personal.website)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 ${linkClass}`}
            >
              <Globe size={11} /> {personal.website}
            </a>
          )}
        </div>
        {personal.summary && (
          <p className="text-[12px] text-stone-700 mt-4 leading-relaxed">{personal.summary}</p>
        )}
      </header>
      {sectionsOrder.map(
        (id) => sections[id] && <SectionRenderer key={id} section={sections[id]} template="minimal" />,
      )}
    </div>
  );
}
