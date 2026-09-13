import React from 'react';
import { Layers, Trash2, X, FolderOpen, CheckCircle2 } from 'lucide-react';
import { Technology } from '../types/technology';

interface YourStackProps {
  stack: Technology[];
  onRemoveItem: (id: string, name: string) => void;
  onRemoveAll: () => void;
  onExportStack: () => void;
}

export const YourStack: React.FC<YourStackProps> = ({
  stack,
  onRemoveItem,
  onRemoveAll,
  onExportStack,
}) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600">
            <Layers size={18} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Your Stack</h3>
            <p className="text-xs font-semibold text-pink-600">
              {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>
          </div>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="px-2.5 py-1.5 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            title="Clear all selected technologies"
          >
            <Trash2 size={13} />
            <span>Remove All</span>
          </button>
        )}
      </div>

      {/* Stack Items or Empty State */}
      <div className="mt-5 space-y-3 max-h-[480px] overflow-y-auto pr-1">
        {stack.length === 0 ? (
          /* Empty State */
          <div className="py-12 px-4 text-center flex flex-col items-center justify-center border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 mb-3 shadow-xs">
              <FolderOpen size={26} className="text-slate-400" />
            </div>
            <h4 className="text-sm font-semibold text-slate-700">Your Stack is Empty</h4>
            <p className="text-xs text-slate-500 max-w-xs mt-1 leading-relaxed">
              Click &quot;Add to Stack&quot; on any technology card to architect your project stack.
            </p>
          </div>
        ) : (
          /* List of Selected Technologies (1 Column Layout) */
          stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Remove (✕) Button */}
              <button
                onClick={() => onRemoveItem(item.id, item.name)}
                className="w-7 h-7 rounded-lg bg-white hover:bg-red-50 text-slate-400 hover:text-red-600 border border-slate-200/80 flex items-center justify-center transition-colors shrink-0 shadow-xs cursor-pointer"
                aria-label={`Remove ${item.name}`}
              >
                <X size={15} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Stack Summary & Export Button */}
      {stack.length > 0 && (
        <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span className="flex items-center gap-1 font-medium">
              <CheckCircle2 size={14} className="text-emerald-500" /> Compatibility
            </span>
            <span className="text-emerald-600 font-bold">100% Compatible</span>
          </div>

          <button
            onClick={onExportStack}
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 shadow-md shadow-pink-500/20 transition-all duration-200 cursor-pointer"
          >
            Export Architecture Stack
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
