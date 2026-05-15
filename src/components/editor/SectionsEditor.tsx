import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Plus } from 'lucide-react';
import { SECTION_ICONS, SECTION_TYPE_ORDER } from '../../constants/sections';
import { useTranslation } from '../../i18n/useTranslation';
import type { CVData, Section, SectionType } from '../../types/cv';
import { SortableSection } from './SortableSection';

interface Props {
  data: CVData;
  onChange: (next: CVData) => void;
  onReset: () => void;
}

// Hosts the list of CV sections, the "add section" menu and the outer
// DndContext that powers section reordering.
export function SectionsEditor({ data, onChange, onReset }: Props) {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [showAddMenu, setShowAddMenu] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleSectionDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIdx = data.sectionsOrder.indexOf(active.id as string);
      const newIdx = data.sectionsOrder.indexOf(over.id as string);
      onChange({ ...data, sectionsOrder: arrayMove(data.sectionsOrder, oldIdx, newIdx) });
    }
  };

  const updateSection = (sec: Section) => {
    onChange({ ...data, sections: { ...data.sections, [sec.id]: sec } });
  };

  const deleteSection = (id: string) => {
    const newSections = { ...data.sections };
    delete newSections[id];
    onChange({
      ...data,
      sections: newSections,
      sectionsOrder: data.sectionsOrder.filter((x) => x !== id),
    });
  };

  const addSection = (type: SectionType) => {
    const id = type + '_' + Date.now();
    const newSection: Section = {
      id,
      type,
      title: t.sectionTypes[type],
      items: [],
    };
    onChange({
      ...data,
      sections: { ...data.sections, [id]: newSection },
      sectionsOrder: [...data.sectionsOrder, id],
    });
    setExpandedSections((prev) => ({ ...prev, [id]: true }));
    setShowAddMenu(false);
  };

  // Sections default to expanded; setting false explicitly collapses them.
  const isExpanded = (id: string) => expandedSections[id] !== false;

  const handleReset = () => {
    if (window.confirm(t.sections.resetConfirm)) onReset();
  };

  return (
    <div className="no-print">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">
          {t.sections.heading}{' '}
          <span className="text-stone-400 dark:text-stone-500 font-normal">· {t.sections.headingHint}</span>
        </h2>
        <button onClick={handleReset} className="text-[11px] text-stone-400 dark:text-stone-500 hover:text-red-500">
          {t.sections.reset}
        </button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleSectionDragEnd}
      >
        <SortableContext items={data.sectionsOrder} strategy={verticalListSortingStrategy}>
          {data.sectionsOrder.map(
            (id) =>
              data.sections[id] && (
                <SortableSection
                  key={id}
                  section={data.sections[id]}
                  onUpdate={updateSection}
                  onDelete={() => deleteSection(id)}
                  expanded={isExpanded(id)}
                  setExpanded={(v) => setExpandedSections((prev) => ({ ...prev, [id]: v }))}
                />
              ),
          )}
        </SortableContext>
      </DndContext>

      <div className="relative">
        <button
          onClick={() => setShowAddMenu((prev) => !prev)}
          className="w-full py-3 border border-dashed border-stone-300 dark:border-stone-700 rounded-xl text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 hover:border-stone-400 dark:hover:border-stone-500 hover:bg-white dark:hover:bg-stone-900 transition flex items-center justify-center gap-2 text-sm font-medium"
        >
          <Plus size={16} /> {t.sections.addSection}
        </button>
        {showAddMenu && (
          <div className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl shadow-lg z-10 p-2">
            {SECTION_TYPE_ORDER.map((type) => {
              const Icon = SECTION_ICONS[type];
              return (
                <button
                  key={type}
                  onClick={() => addSection(type)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg"
                >
                  <Icon size={14} className="text-stone-500 dark:text-stone-400" /> {t.sectionTypes[type]}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
