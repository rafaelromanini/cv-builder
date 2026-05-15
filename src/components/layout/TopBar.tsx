import { Download, Edit3, Eye, FileDown, Settings } from 'lucide-react';
import type { TemplateId, ViewMode } from '../../types/cv';
import { useTranslation } from '../../i18n/useTranslation';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface Props {
  template: TemplateId;
  onTemplateChange: (template: TemplateId) => void;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onExportJSON: () => void;
  onExportPDF: () => void;
}

// Sticky top bar with branding, template/view toggles, export actions
// and the language switcher.
export function TopBar({
  template,
  onTemplateChange,
  view,
  onViewChange,
  onExportJSON,
  onExportPDF,
}: Props) {
  const { t } = useTranslation();

  const templates: { id: TemplateId; label: string }[] = [
    { id: 'minimal', label: t.topbar.templateMinimal },
    { id: 'classic', label: t.topbar.templateClassic },
    { id: 'sidebar', label: t.topbar.templateSidebar },
  ];

  return (
    <header className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-30 no-print transition-colors">
      <div className="max-w-400 mx-auto px-6 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-stone-200 dark:ring-stone-700 bg-white dark:bg-stone-800 flex items-center justify-center shadow-sm">
            <img
              src="/favicon.png"
              alt={t.app.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm leading-tight">{t.app.title}</div>
            <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">{t.app.autosaveHint}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-0.5 flex">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() => onTemplateChange(tpl.id)}
                className={`px-3 py-1 text-xs rounded-md transition ${
                  template === tpl.id
                    ? 'bg-white text-stone-900 shadow-sm dark:bg-stone-700 dark:text-stone-100'
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
                }`}
              >
                {tpl.label}
              </button>
            ))}
          </div>

          <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-0.5 flex">
            <button
              onClick={() => onViewChange('edit')}
              className={`px-2 py-1 rounded-md transition ${
                view === 'edit'
                  ? 'bg-white shadow-sm dark:bg-stone-700 dark:text-stone-100'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
              }`}
              title={t.topbar.viewEdit}
              aria-label={t.topbar.viewEdit}
            >
              <Edit3 size={14} />
            </button>
            <button
              onClick={() => onViewChange('split')}
              className={`px-2 py-1 rounded-md transition ${
                view === 'split'
                  ? 'bg-white shadow-sm dark:bg-stone-700 dark:text-stone-100'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
              }`}
              title={t.topbar.viewSplit}
              aria-label={t.topbar.viewSplit}
            >
              <Settings size={14} />
            </button>
            <button
              onClick={() => onViewChange('preview')}
              className={`px-2 py-1 rounded-md transition ${
                view === 'preview'
                  ? 'bg-white shadow-sm dark:bg-stone-700 dark:text-stone-100'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
              }`}
              title={t.topbar.viewPreview}
              aria-label={t.topbar.viewPreview}
            >
              <Eye size={14} />
            </button>
          </div>

          <ThemeSwitcher />

          <LanguageSwitcher />

          <div className="w-px h-6 bg-stone-200 dark:bg-stone-700 mx-1" />

          <button
            onClick={onExportJSON}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition"
          >
            <Download size={13} /> {t.topbar.exportJson}
          </button>

          <button
            onClick={onExportPDF}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-stone-900 text-white rounded-lg hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-300 transition"
          >
            <FileDown size={13} /> {t.topbar.exportPdf}
          </button>
        </div>
      </div>
    </header>
  );
}
