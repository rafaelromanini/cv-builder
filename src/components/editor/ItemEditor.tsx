import type { AnyItem, SectionType } from '../../types/cv';
import { useTranslation } from '../../i18n/useTranslation';

// Renders the right set of inputs for a given section type.
// Each branch mirrors the shape created by emptyItemFor() in utils/itemFactory.
export function ItemEditor({
  type,
  item,
  onChange,
}: {
  type: SectionType;
  item: AnyItem;
  onChange: (patch: Partial<AnyItem>) => void;
}) {
  const { t } = useTranslation();

  const input =
    'w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none focus:border-stone-400 dark:focus:border-stone-500 rounded-md px-2 py-1 text-sm text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 transition-colors';
  const inputBold = `${input} font-medium`;
  const inputMuted = `${input} text-stone-500 dark:text-stone-400 text-xs`;
  const textarea =
    'w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none focus:border-stone-400 dark:focus:border-stone-500 rounded-md px-2 py-1 text-sm resize-none text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 transition-colors';

  if (type === 'experience') {
    return (
      <div className="space-y-1">
        <input
          className={inputBold}
          placeholder={t.fields.role}
          value={item.role ?? ''}
          onChange={(e) => onChange({ role: e.target.value })}
        />
        <input
          className={input}
          placeholder={t.fields.company}
          value={item.company ?? ''}
          onChange={(e) => onChange({ company: e.target.value })}
        />
        <div className="flex gap-2 text-xs">
          <input
            className={inputMuted}
            placeholder={t.fields.location}
            value={item.location ?? ''}
            onChange={(e) => onChange({ location: e.target.value })}
          />
          <input
            className={inputMuted}
            placeholder={t.fields.startDate}
            value={item.startDate ?? ''}
            onChange={(e) => onChange({ startDate: e.target.value })}
          />
          <input
            className={inputMuted}
            placeholder={t.fields.endDate}
            value={item.endDate ?? ''}
            onChange={(e) => onChange({ endDate: e.target.value })}
          />
        </div>
        <textarea
          className={textarea}
          rows={4}
          placeholder={t.fields.descriptionMultiline}
          value={item.description ?? ''}
          onChange={(e) => onChange({ description: e.target.value })}
        />
      </div>
    );
  }

  if (type === 'education') {
    return (
      <div className="space-y-1">
        <input
          className={inputBold}
          placeholder={t.fields.degree}
          value={item.degree ?? ''}
          onChange={(e) => onChange({ degree: e.target.value })}
        />
        <input
          className={input}
          placeholder={t.fields.institution}
          value={item.institution ?? ''}
          onChange={(e) => onChange({ institution: e.target.value })}
        />
        <div className="flex gap-2 text-xs">
          <input
            className={inputMuted}
            placeholder={t.fields.location}
            value={item.location ?? ''}
            onChange={(e) => onChange({ location: e.target.value })}
          />
          <input
            className={inputMuted}
            placeholder={t.fields.startDate}
            value={item.startDate ?? ''}
            onChange={(e) => onChange({ startDate: e.target.value })}
          />
          <input
            className={inputMuted}
            placeholder={t.fields.endDate}
            value={item.endDate ?? ''}
            onChange={(e) => onChange({ endDate: e.target.value })}
          />
        </div>
      </div>
    );
  }

  if (type === 'skills') {
    return (
      <div className="space-y-1">
        <input
          className={inputBold}
          placeholder={t.fields.category}
          value={item.category ?? ''}
          onChange={(e) => onChange({ category: e.target.value })}
        />
        <input
          className={input}
          placeholder={t.fields.skills}
          value={item.value ?? ''}
          onChange={(e) => onChange({ value: e.target.value })}
        />
      </div>
    );
  }

  if (type === 'languages') {
    return (
      <div className="space-y-1">
        <input
          className={inputBold}
          placeholder={t.fields.language}
          value={item.language ?? ''}
          onChange={(e) => onChange({ language: e.target.value })}
        />
        <input
          className={input}
          placeholder={t.fields.level}
          value={item.level ?? ''}
          onChange={(e) => onChange({ level: e.target.value })}
        />
      </div>
    );
  }

  if (type === 'awards') {
    return (
      <div className="space-y-1">
        <input
          className={inputBold}
          placeholder={t.fields.title}
          value={item.title ?? ''}
          onChange={(e) => onChange({ title: e.target.value })}
        />
        <div className="flex gap-2 text-xs">
          <input
            className={inputMuted}
            placeholder={t.fields.issuer}
            value={item.issuer ?? ''}
            onChange={(e) => onChange({ issuer: e.target.value })}
          />
          <input
            className={inputMuted}
            placeholder={t.fields.date}
            value={item.date ?? ''}
            onChange={(e) => onChange({ date: e.target.value })}
          />
        </div>
        <textarea
          className={textarea}
          rows={2}
          placeholder={t.fields.description}
          value={item.description ?? ''}
          onChange={(e) => onChange({ description: e.target.value })}
        />
      </div>
    );
  }

  if (type === 'projects') {
    return (
      <div className="space-y-1">
        <input
          className={inputBold}
          placeholder={t.fields.projectName}
          value={item.name ?? ''}
          onChange={(e) => onChange({ name: e.target.value })}
        />
        <div className="flex gap-2 text-xs">
          <input
            className={inputMuted}
            placeholder={t.fields.tech}
            value={item.tech ?? ''}
            onChange={(e) => onChange({ tech: e.target.value })}
          />
          <input
            className={inputMuted}
            placeholder={t.fields.link}
            value={item.link ?? ''}
            onChange={(e) => onChange({ link: e.target.value })}
          />
        </div>
        <textarea
          className={textarea}
          rows={2}
          placeholder={t.fields.description}
          value={item.description ?? ''}
          onChange={(e) => onChange({ description: e.target.value })}
        />
      </div>
    );
  }

  // Fallback for the free-form `custom` section type.
  return (
    <div className="space-y-1">
      <input
        className={inputBold}
        placeholder={t.fields.title}
        value={item.title ?? ''}
        onChange={(e) => onChange({ title: e.target.value })}
      />
      <textarea
        className={textarea}
        rows={3}
        placeholder={t.fields.content}
        value={item.content ?? ''}
        onChange={(e) => onChange({ content: e.target.value })}
      />
    </div>
  );
}
