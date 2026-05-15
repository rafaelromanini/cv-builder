import { useEffect, useState } from 'react';

// Drop-in replacement for useState that mirrors its value into localStorage.
// Hydrates lazily from storage on mount so SSR-style first paints stay safe,
// and silently ignores storage errors (quota exceeded, private mode, etc.).
export function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw != null) setValue(JSON.parse(raw) as T);
    } catch {
      // Ignore — fall back to the in-memory initial value.
    }
    // We intentionally depend only on `key` to avoid re-hydrating on every value change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Persist on every change.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore quota/permission errors.
    }
  }, [key, value]);

  return [value, setValue] as const;
}
