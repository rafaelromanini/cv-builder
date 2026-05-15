import { Code2, Globe, Link, Mail, MapPin, Phone } from 'lucide-react';
import type { CVData, SectionType } from '../../types/cv';
import { useTranslation } from '../../i18n/useTranslation';
import { mailHref, urlHref } from '../../utils/links';
import { SectionRenderer } from './SectionRenderer';

const linkClass = 'hover:text-stone-900 hover:underline';

// Section types that get pushed into the left sidebar instead of the
// main column. The split makes scanning recruiter-friendly.
const SIDEBAR_SECTION_TYPES: SectionType[] = ['skills', 'languages', 'awards'];

// Sidebar template: skills/languages/awards on the left, experience and
// education on the right.
export function PreviewSidebar({ data }: { data: CVData }) {
  const { t } = useTranslation();
  const { personal, sectionsOrder, sections } = data;

  const sidebarIds = sectionsOrder.filter(
    (id) => sections[id] && SIDEBAR_SECTION_TYPES.includes(sections[id].type),
  );
  const mainIds = sectionsOrder.filter(
    (id) => sections[id] && !SIDEBAR_SECTION_TYPES.includes(sections[id].type),
  );

  return (
    <div
      className="bg-white text-stone-900 grid grid-cols-[35%_65%]"
      style={{
        fontFamily: '"Inter", -apple-system, system-ui, sans-serif',
        minHeight: '297mm',
        width: '210mm',
      }}
    >
      <aside className="bg-stone-50 p-8 border-r border-stone-200">
        <h1 className="text-[22px] font-bold leading-tight">{personal.name}</h1>
        <div className="text-[12px] text-stone-600 mt-1 mb-5">{personal.title}</div>
        <div className="space-y-1.5 text-[11px] text-stone-700 mb-6">
          {personal.email && (
            <a href={mailHref(personal.email)} className={`flex items-start gap-1.5 ${linkClass}`}>
              <Mail size={11} className="mt-0.5 shrink-0" />
              <span className="break-all">{personal.email}</span>
            </a>
          )}
          {personal.phone && (
            <div className="flex items-start gap-1.5">
              <Phone size={11} className="mt-0.5 shrink-0" />
              {personal.phone}
            </div>
          )}
          {personal.location && (
            <div className="flex items-start gap-1.5">
              <MapPin size={11} className="mt-0.5 shrink-0" />
              {personal.location}
            </div>
          )}
          {personal.linkedin && (
            <a
              href={urlHref(personal.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-1.5 ${linkClass}`}
            >
              <Link size={11} className="mt-0.5 shrink-0" />
              <span className="break-all">{personal.linkedin}</span>
            </a>
          )}
          {personal.github && (
            <a
              href={urlHref(personal.github)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-1.5 ${linkClass}`}
            >
              <Code2 size={11} className="mt-0.5 shrink-0" />
              <span className="break-all">{personal.github}</span>
            </a>
          )}
          {personal.website && (
            <a
              href={urlHref(personal.website)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-1.5 ${linkClass}`}
            >
              <Globe size={11} className="mt-0.5 shrink-0" />
              <span className="break-all">{personal.website}</span>
            </a>
          )}
        </div>
        {sidebarIds.map((id) => (
          <SectionRenderer key={id} section={sections[id]} template="sidebar" />
        ))}
      </aside>
      <main className="p-8">
        {personal.summary && (
          <section className="mb-6">
            <h2 className="text-sm font-semibold text-stone-900 mb-2 flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-stone-900 before:rounded-full">
              {t.preview.about}
            </h2>
            <p className="text-[12px] text-stone-700 leading-relaxed">{personal.summary}</p>
          </section>
        )}
        {mainIds.map((id) => (
          <SectionRenderer key={id} section={sections[id]} template="minimal" />
        ))}
      </main>
    </div>
  );
}
