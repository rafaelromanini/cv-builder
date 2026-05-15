import { Globe } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import { SUPPORTED_LANGUAGES, type Language } from '../i18n/translations';

// Compact pill-style toggle for switching between supported UI languages.
// Lives in the topbar; renders just two buttons today (PT / EN) but scales
// to anything in SUPPORTED_LANGUAGES.
export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div
      className="bg-stone-100 dark:bg-stone-800 rounded-lg p-0.5 flex items-center"
      role="group"
      aria-label={t.topbar.languageLabel}
    >
      <Globe size={13} className="text-stone-500 dark:text-stone-400 ml-1.5 mr-1" />
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code as Language)}
          className={`px-2 py-1 text-[11px] font-medium rounded-md transition ${
            language === lang.code
              ? 'bg-white text-stone-900 shadow-sm dark:bg-stone-700 dark:text-stone-100'
              : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
          }`}
          aria-pressed={language === lang.code}
          title={lang.label}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
}
