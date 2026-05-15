import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

// Primary entry point for components that need translated copy.
// Returns the current language code, a setter, and the translation bundle (`t`).
export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used inside <LanguageProvider>');
  }
  return ctx;
}
