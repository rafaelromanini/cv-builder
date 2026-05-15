import { Moon, Sun } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import { useTheme, type Theme } from '../theme';

// Compact pill-style toggle for switching between light and dark UI themes.
// The CV preview itself remains light regardless (so the printed PDF stays
// faithful to the chosen template).
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
    { value: 'light', label: t.topbar.themeLight, Icon: Sun },
    { value: 'dark', label: t.topbar.themeDark, Icon: Moon },
  ];

  return (
    <div
      className="bg-stone-100 dark:bg-stone-800 rounded-lg p-0.5 flex items-center"
      role="group"
      aria-label={t.topbar.themeLabel}
    >
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`px-2 py-1 rounded-md transition ${
            theme === value
              ? 'bg-white text-stone-900 shadow-sm dark:bg-stone-700 dark:text-stone-100'
              : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
          }`}
          aria-pressed={theme === value}
          title={label}
          aria-label={label}
        >
          <Icon size={13} />
        </button>
      ))}
    </div>
  );
}
