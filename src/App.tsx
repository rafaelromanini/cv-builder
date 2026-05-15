import { useState } from 'react';
import type { CVData, Personal, TemplateId, ViewMode } from './types/cv';
import { initialData, STORAGE_KEY } from './data/initialData';
import { usePersistentState } from './hooks/usePersistentState';
import { downloadCVAsJSON } from './utils/fileHelpers';
import { TopBar } from './components/layout/TopBar';
import { PersonalInfoForm } from './components/editor/PersonalInfoForm';
import { SectionsEditor } from './components/editor/SectionsEditor';
import { CVPreview } from './components/preview/CVPreview';

// Thin top-level orchestrator. Owns the CV state and wires the topbar,
// editor and preview together. All actual UI lives in dedicated components.
export default function App() {
  const [data, setData] = usePersistentState<CVData>(STORAGE_KEY, initialData);
  const [template, setTemplate] = useState<TemplateId>('minimal');
  const [view, setView] = useState<ViewMode>('split');

  const updatePersonal = (patch: Partial<Personal>) => {
    setData({ ...data, personal: { ...data.personal, ...patch } });
  };

  const handleExportPDF = () => window.print();

  return (
    <div
      className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors"
      style={{ fontFamily: '"Inter", -apple-system, system-ui, sans-serif' }}
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
        className={`max-w-400 mx-auto px-6 py-6 grid gap-6 ${
          view === 'split' ? 'grid-cols-[420px_1fr]' : 'grid-cols-1'
        }`}
      >
        {(view === 'edit' || view === 'split') && (
          <div className="no-print">
            <PersonalInfoForm personal={data.personal} onChange={updatePersonal} />
            <SectionsEditor
              data={data}
              onChange={setData}
              onReset={() => setData(initialData)}
            />
          </div>
        )}

        {(view === 'preview' || view === 'split') && (
          <div className="flex justify-center">
            <div
              id="print-area"
              className="shadow-xl rounded-lg overflow-hidden"
              style={{
                transform: view === 'split' ? 'scale(0.78)' : 'scale(1)',
                transformOrigin: 'top center',
              }}
            >
              <CVPreview data={data} template={template} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
