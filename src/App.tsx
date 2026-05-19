import { useEffect, useRef, useState } from 'react';
import type { CVData, Personal, TemplateId, ViewMode } from './types/cv';
import { getInitialData, STORAGE_KEY } from './data/initialData';
import { usePersistentState } from './hooks/usePersistentState';
import { useTranslation } from './i18n/useTranslation';
import { downloadCVAsJSON } from './utils/fileHelpers';
import { TopBar } from './components/layout/TopBar';
import { MobileNav } from './components/layout/MobileNav';
import { PersonalInfoForm } from './components/editor/PersonalInfoForm';
import { SectionsEditor } from './components/editor/SectionsEditor';
import { CVPreview } from './components/preview/CVPreview';

export default function App() {
  const { language } = useTranslation();
  const [data, setData] = usePersistentState<CVData>(STORAGE_KEY, getInitialData(language));
  const [template, setTemplate] = useState<TemplateId>('minimal');
  const [view, setView] = useState<ViewMode>('split');
  const [mobileTab, setMobileTab] = useState<'edit' | 'preview'>('edit');
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768,
  );

  const prevLangRef = useRef(language);
  const dataRef = useRef(data);
  dataRef.current = data;

  useEffect(() => {
    const prevLang = prevLangRef.current;
    prevLangRef.current = language;
    if (prevLang === language) return;
    if (JSON.stringify(dataRef.current) === JSON.stringify(getInitialData(prevLang))) {
      setData(getInitialData(language));
    }
  }, [language, setData]);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  const updatePersonal = (patch: Partial<Personal>) => {
    setData({ ...data, personal: { ...data.personal, ...patch } });
  };

  const handleExportPDF = () => window.print();

  // Mobile: panels controlled by mobileTab
  // Desktop: panels controlled by view
  const editorMobileClass = mobileTab === 'edit' ? 'block' : 'hidden';
  const editorDesktopClass = view === 'edit' || view === 'split' ? 'md:block' : 'md:hidden';

  const previewMobileClass = mobileTab === 'preview' ? 'flex' : 'hidden';
  const previewDesktopClass = view === 'preview' || view === 'split' ? 'md:flex' : 'md:hidden';

  return (
    <div
      className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <TopBar
        template={template}
        onTemplateChange={setTemplate}
        view={view}
        onViewChange={setView}
        onExportJSON={() => downloadCVAsJSON(data)}
        onExportPDF={handleExportPDF}
      />

      <div
        className={`max-w-400 mx-auto px-4 md:px-6 py-4 md:py-6 grid gap-6 pb-mobile-nav md:pb-6 ${
          view === 'split' ? 'md:grid-cols-[420px_1fr]' : 'grid-cols-1'
        }`}
      >
        {/* Editor panel */}
        <div className={`no-print ${editorMobileClass} ${editorDesktopClass}`}>
          <PersonalInfoForm personal={data.personal} onChange={updatePersonal} />
          <SectionsEditor
            data={data}
            onChange={setData}
            onReset={() => setData(getInitialData(language))}
          />
        </div>

        {/* Preview panel */}
        <div id="print-area-wrapper" className={`justify-center ${previewMobileClass} ${previewDesktopClass}`}>
          <div
            id="print-area"
            className="shadow-xl rounded-lg overflow-hidden cv-mobile-zoom"
            style={{
              transform: !isMobile && view === 'split' ? 'scale(0.78)' : 'scale(1)',
              transformOrigin: 'top center',
            }}
          >
            <CVPreview data={data} template={template} />
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <MobileNav tab={mobileTab} onTabChange={setMobileTab} onExportPDF={handleExportPDF} />
    </div>
  );
}
