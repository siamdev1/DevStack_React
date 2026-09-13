import React, { useState } from 'react';
import technologiesData from '../data/technologies.json';
import { Star, Search, Filter } from 'lucide-react';

export const TechnologiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'DevOps'];

  const filteredTechs = technologiesData.filter((t) => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          All <span className="text-brand-gradient">Technologies</span>
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Discover modern libraries, frameworks, languages, and developer tools.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500 shadow-xs transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <Filter className="text-slate-400 w-4 h-4 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTechs.map((tech) => (
          <div
            key={tech.id}
            className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-200/60">
                  {tech.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{tech.name}</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">{tech.description}</p>
            </div>
            
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="px-2 py-0.5 rounded bg-slate-100 font-medium">{tech.category}</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star size={13} className="fill-amber-400 text-amber-400" />
                <span>{tech.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesPage;
