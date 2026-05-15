import { User } from 'lucide-react';
import type { Personal } from '../../types/cv';
import { useTranslation } from '../../i18n/useTranslation';

const inputClass =
  'w-full bg-transparent border border-stone-200 dark:border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 outline-none focus:border-stone-400 dark:focus:border-stone-500 focus:bg-white dark:focus:bg-stone-800 transition';

// Editor card for the top-of-CV personal block: name, contact info, summary.
export function PersonalInfoForm({
  personal,
  onChange,
}: {
  personal: Personal;
  onChange: (patch: Partial<Personal>) => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 mb-4 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <User size={16} className="text-stone-500 dark:text-stone-400" />
        <h2 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{t.personal.heading}</h2>
      </div>
      <div className="space-y-2">
        <input
          className={inputClass}
          placeholder={t.personal.name}
          value={personal.name}
          onChange={(e) => onChange({ name: e.target.value })}
        />
        <input
          className={inputClass}
          placeholder={t.personal.title}
          value={personal.title}
          onChange={(e) => onChange({ title: e.target.value })}
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            className={inputClass}
            placeholder={t.personal.email}
            value={personal.email}
            onChange={(e) => onChange({ email: e.target.value })}
          />
          <input
            className={inputClass}
            placeholder={t.personal.phone}
            value={personal.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
          />
        </div>
        <input
          className={inputClass}
          placeholder={t.personal.location}
          value={personal.location}
          onChange={(e) => onChange({ location: e.target.value })}
        />
        <input
          className={inputClass}
          placeholder={t.personal.linkedin}
          value={personal.linkedin}
          onChange={(e) => onChange({ linkedin: e.target.value })}
        />
        <input
          className={inputClass}
          placeholder={t.personal.github}
          value={personal.github}
          onChange={(e) => onChange({ github: e.target.value })}
        />
        <input
          className={inputClass}
          placeholder={t.personal.website}
          value={personal.website}
          onChange={(e) => onChange({ website: e.target.value })}
        />
        <textarea
          className={`${inputClass} resize-none`}
          rows={4}
          placeholder={t.personal.summary}
          value={personal.summary}
          onChange={(e) => onChange({ summary: e.target.value })}
        />
      </div>
    </div>
  );
}
