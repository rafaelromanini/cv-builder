import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type Language, type Translation } from './translations';
import { LANGUAGE_STORAGE_KEY } from '../data/initialData';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

// Exported so the hook in ./useTranslation can subscribe to it.
// Consumers should prefer the useTranslation hook over reading this directly.
export const LanguageContext = createContext<LanguageContextValue | null>(null);

// Resolves the initial language: persisted preference > browser locale > pt.
const detectInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'pt';
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // localStorage may throw in privacy modes; fall through to detection.
  }
  const navLang = window.navigator?.language?.toLowerCase() ?? '';
  return navLang.startsWith('pt') ? 'pt' : 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  // Persist the selected language so it survives reloads.
  useEffect(() => {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore quota / privacy errors — language will reset next session.
    }
    // Keep <html lang> in sync for accessibility tools and SEO.
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => setLanguageState(lang), []);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: translations[language] }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
