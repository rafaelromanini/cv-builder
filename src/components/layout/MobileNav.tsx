import { Edit3, Eye, FileDown } from 'lucide-react';

interface Props {
  tab: 'edit' | 'preview';
  onTabChange: (tab: 'edit' | 'preview') => void;
  onExportPDF: () => void;
}

export function MobileNav({ tab, onTabChange, onExportPDF }: Props) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 no-print px-4"
      style={{
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
        fontFamily: 'var(--font-body)',
      }}
    >
      <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-2xl rounded-2xl border border-stone-200/60 dark:border-stone-700/40 shadow-2xl shadow-stone-900/10 dark:shadow-black/40 flex items-stretch h-16 overflow-hidden">
        {/* Edit tab */}
        <button
          onClick={() => onTabChange('edit')}
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-all duration-200 ${
            tab === 'edit'
              ? 'text-amber-600 dark:text-amber-400 bg-amber-50/90 dark:bg-amber-950/40'
              : 'text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
          }`}
        >
          <Edit3 size={20} strokeWidth={tab === 'edit' ? 2.5 : 1.75} />
          <span
            className={`text-[10px] tracking-widest uppercase transition-all ${
              tab === 'edit' ? 'font-bold' : 'font-medium'
            }`}
          >
            Edit
          </span>
        </button>

        {/* PDF export – centre CTA */}
        <div className="flex items-center justify-center px-3">
          <button
            onClick={onExportPDF}
            className="
              bg-stone-900 dark:bg-amber-400
              text-white dark:text-stone-900
              rounded-xl w-14 h-11
              flex flex-col items-center justify-center gap-0.5
              shadow-lg shadow-stone-900/30 dark:shadow-amber-400/25
              hover:scale-105 active:scale-95 transition-transform duration-150
            "
          >
            <FileDown size={16} strokeWidth={2.25} />
            <span className="text-[9px] font-black tracking-widest uppercase leading-none">PDF</span>
          </button>
        </div>

        {/* Preview tab */}
        <button
          onClick={() => onTabChange('preview')}
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-all duration-200 ${
            tab === 'preview'
              ? 'text-amber-600 dark:text-amber-400 bg-amber-50/90 dark:bg-amber-950/40'
              : 'text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
          }`}
        >
          <Eye size={20} strokeWidth={tab === 'preview' ? 2.5 : 1.75} />
          <span
            className={`text-[10px] tracking-widest uppercase transition-all ${
              tab === 'preview' ? 'font-bold' : 'font-medium'
            }`}
          >
            Preview
          </span>
        </button>
      </div>
    </nav>
  );
}
