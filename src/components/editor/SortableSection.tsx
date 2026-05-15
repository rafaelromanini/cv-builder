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
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  ChevronDown,
  ChevronUp,
  GripVertical,
  Plus,
  Settings,
  Trash2,
} from 'lucide-react';
import { SECTION_ICONS } from '../../constants/sections';
import { emptyItemFor } from '../../utils/itemFactory';
import { useTranslation } from '../../i18n/useTranslation';
import type { AnyItem, Section } from '../../types/cv';
import { SortableItem } from './SortableItem';
import { ItemEditor } from './ItemEditor';

// A draggable section card. Owns its own inner DndContext so items can be
// reordered independently of the outer sections list.
export function SortableSection({
  section,
  onUpdate,
  onDelete,
  expanded,
  setExpanded,
}: {
  section: Section;
  onUpdate: (s: Section) => void;
  onDelete: () => void;
  expanded: boolean;
  setExpanded: (v: boolean) => void;
}) {
  const { t } = useTranslation();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  const Icon = SECTION_ICONS[section.type] ?? Settings;

  // Small drag distance so clicks on the title input still feel native.
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleItemDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIdx = section.items.findIndex((i) => i.id === active.id);
      const newIdx = section.items.findIndex((i) => i.id === over.id);
      onUpdate({ ...section, items: arrayMove(section.items, oldIdx, newIdx) });
    }
  };

  const addItem = () => {
    onUpdate({ ...section, items: [...section.items, emptyItemFor(section.type)] });
  };

  const updateItem = (itemId: string, patch: Partial<AnyItem>) => {
    onUpdate({
      ...section,
      items: section.items.map((i) => (i.id === itemId ? { ...i, ...patch } : i)),
    });
  };

  const deleteItem = (itemId: string) => {
    onUpdate({ ...section, items: section.items.filter((i) => i.id !== itemId) });
  };

  return (
    <div ref={setNodeRef} style={style} className="bg-stone-50/50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-xl mb-4 transition-colors">
      <div className="flex items-center justify-between p-3 border-b border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-2 flex-1">
          <button
            {...attributes}
            {...listeners}
            className="p-1 cursor-grab active:cursor-grabbing text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-200"
            aria-label="Drag section"
          >
            <GripVertical size={18} />
          </button>
          <Icon size={16} className="text-stone-500 dark:text-stone-400" />
          <input
            value={section.title}
            onChange={(e) => onUpdate({ ...section, title: e.target.value })}
            className="font-medium text-stone-800 dark:text-stone-100 bg-transparent border-none outline-none focus:bg-white dark:focus:bg-stone-800 rounded px-2 py-0.5 flex-1"
          />
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 rounded"
            aria-label={expanded ? 'Collapse section' : 'Expand section'}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 text-stone-400 dark:text-stone-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 rounded"
            aria-label="Delete section"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="p-3">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleItemDragEnd}>
            <SortableContext
              items={section.items.map((i) => i.id)}
              strategy={verticalListSortingStrategy}
            >
              {section.items.map((item) => (
                <SortableItem key={item.id} id={item.id} onDelete={() => deleteItem(item.id)}>
                  <ItemEditor
                    type={section.type}
                    item={item}
                    onChange={(patch) => updateItem(item.id, patch)}
                  />
                </SortableItem>
              ))}
            </SortableContext>
          </DndContext>
          <button
            onClick={addItem}
            className="w-full mt-2 py-2 border border-dashed border-stone-300 dark:border-stone-700 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 hover:border-stone-400 dark:hover:border-stone-500 hover:bg-white dark:hover:bg-stone-800 transition flex items-center justify-center gap-2 text-sm"
          >
            <Plus size={14} /> {t.sections.addItem}
          </button>
        </div>
      )}
    </div>
  );
}
