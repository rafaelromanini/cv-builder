import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, X } from 'lucide-react';
import type { ReactNode } from 'react';

// Wraps a single editable item with drag-handle and delete affordances.
// Both controls only appear on hover so the editor stays visually calm.
export function SortableItem({
  id,
  children,
  onDelete,
}: {
  id: string;
  children: ReactNode;
  onDelete: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group relative bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-4 mb-3 hover:border-stone-300 dark:hover:border-stone-600 transition"
    >
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
        <button
          {...attributes}
          {...listeners}
          className="p-1 cursor-grab active:cursor-grabbing text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-200"
          aria-label="Drag to reorder"
        >
          <GripVertical size={16} />
        </button>
      </div>
      <button
        onClick={onDelete}
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition p-1 text-stone-400 dark:text-stone-500 hover:text-red-500"
        aria-label="Delete item"
      >
        <X size={14} />
      </button>
      <div className="pl-6 pr-6">{children}</div>
    </div>
  );
}
