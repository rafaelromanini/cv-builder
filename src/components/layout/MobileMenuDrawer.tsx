import { Download, X } from 'lucide-react';
import type { TemplateId } from '../../types/cv';
import { useTranslation } from '../../i18n/useTranslation';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  template: TemplateId;
  onTemplateChange: (t: TemplateId) => void;
  onExportJSON: () => void;
}

export function MobileMenuDrawer({
  isOpen,
  onClose,
  template,
  onTemplateChange,
  onExportJSON,
}: Props) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const templates: { id: TemplateId; label: string }[] = [
    { id: 'minimal', label: t.topbar.templateMinimal },
    { id: 'classic', label: t.topbar.templateClassic },
    { id: 'sidebar', label: t.topbar.templateSidebar },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 rounded-t-3xl shadow-2xl animate-slide-up"
        style={{
          paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
        </div>

        <div className="px-5 pt-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3
              className="font-semibold text-base text-stone-900 dark:text-stone-100"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Configurações
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
            >
              <X size={16} />
            </button>
          </div>

          {/* Template selector */}
          <div className="mb-6">
            <p className="text-[11px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-3">
              Template
            </p>
            <div className="grid grid-cols-3 gap-2">
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => {
                    onTemplateChange(tpl.id);
                    onClose();
                  }}
                  className={`py-3 text-sm rounded-2xl border-2 transition font-semibold ${
                    template === tpl.id
                      ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 border-stone-900 dark:border-stone-100'
                      : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-stone-400 dark:hover:border-stone-500'
                  }`}
                >
                  {tpl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language + Theme */}
          <div className="flex items-start gap-8 py-4 border-t border-stone-100 dark:border-stone-800 mb-5">
            <div>
              <p className="text-[11px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-2.5">
                {t.topbar.languageLabel}
              </p>
              <LanguageSwitcher />
            </div>
            <div>
              <p className="text-[11px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-2.5">
                {t.topbar.themeLabel}
              </p>
              <ThemeSwitcher />
            </div>
          </div>

          {/* Export JSON */}
          <button
            onClick={() => {
              onExportJSON();
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl border-2 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-200 text-sm font-semibold hover:border-stone-400 dark:hover:border-stone-500 transition"
          >
            <Download size={15} />
            {t.topbar.exportJson}
          </button>
        </div>
      </div>
    </>
  );
}
