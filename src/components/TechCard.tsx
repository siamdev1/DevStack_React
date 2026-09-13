import React from 'react';
import { Star, Check, Plus } from 'lucide-react';
import { Technology } from '../types/technology';

interface TechCardProps {
  technology: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

export const TechCard: React.FC<TechCardProps> = ({
  technology,
  isAdded,
  onAddToStack,
}) => {
  return (
    <div className="flex flex-col justify-between bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div>
        {/* Top: Icon & Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-xs">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://icon.icepanel.io/Technology/svg/Code.svg';
              }}
            />
          </div>
          
          <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-pink-50 text-pink-600 border border-pink-200/60">
            {technology.badge}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
          {technology.name}
        </h3>

        {/* Category & Difficulty Chips */}
        <div className="flex items-center gap-2 mt-1.5 mb-3">
          <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
            {technology.category}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-100 font-medium">
            {technology.difficulty}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {technology.description}
        </p>
      </div>

      {/* Card Bottom: Rating & Action Button */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span>{technology.rating.toFixed(1)}</span>
        </div>

        <button
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
            isAdded
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed font-medium'
              : 'bg-slate-900 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-600 text-white shadow-xs hover:shadow-md hover:shadow-pink-500/20 active:scale-95 cursor-pointer'
          }`}
        >
          {isAdded ? (
            <>
              <Check size={14} className="text-emerald-600" />
              <span>✓ Added to Stack</span>
            </>
          ) : (
            <>
              <Plus size={14} />
              <span>Add to Stack</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
