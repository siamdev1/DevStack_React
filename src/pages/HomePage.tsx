import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Loader2, Layers, Filter } from 'lucide-react';

import Banner from '../components/Banner';
import TechCard from '../components/TechCard';
import YourStack from '../components/YourStack';
import { Technology } from '../types/technology';
import fallbackTechData from '../data/technologies.json';

export const HomePage: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [myStack, setMyStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Load JSON Data using useEffect as required
  useEffect(() => {
    const fetchTechnologies = async () => {
      setLoading(true);
      try {
        const res = await fetch('/technologies.json');
        if (res.ok) {
          const data = await res.json();
          setTechnologies(data);
        } else {
          setTechnologies(fallbackTechData as Technology[]);
        }
      } catch (error) {
        setTechnologies(fallbackTechData as Technology[]);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    };

    fetchTechnologies();
  }, []);

  // Add technology to stack with duplicate check
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = myStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`"${tech.name}" is already in your stack!`);
      return;
    }

    setMyStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };

  // Remove single technology from stack
  const handleRemoveFromStack = (techId: string, techName: string) => {
    setMyStack((prev) => prev.filter((item) => item.id !== techId));
    toast.info(`Removed ${techName} from your stack.`);
  };

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    if (myStack.length === 0) return;
    setMyStack([]);
    toast.error('Cleared all technologies from your stack.');
  };

  // Export stack action
  const handleExportStack = () => {
    toast.success('Architecture Stack configuration exported successfully!');
  };

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'DevOps'];

  const filteredTechnologies = selectedCategory === 'All'
    ? technologies
    : technologies.filter((t) => t.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 🎯 Banner / Hero Section */}
      <Banner />

      {/* 📦 Main Technology Catalog & Stack Builder Section */}
      <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-600 mb-2">
              <Layers size={14} /> Technology Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Explore Industry Technologies
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select industry-standard technologies to architect your custom engineering stack.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter size={15} className="text-slate-400 shrink-0 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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

        {/* ⏳ Loading State */}
        {loading ? (
          <div className="min-h-[350px] flex flex-col items-center justify-center gap-3 py-16 bg-slate-50/60 rounded-3xl border border-slate-100">
            <Loader2 className="w-10 h-10 text-pink-500 animate-spin" />
            <p className="text-sm font-semibold text-slate-500">Loading technologies from JSON catalog...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 🃏 Technology Cards Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredTechnologies.map((tech) => {
                  const isAdded = myStack.some((item) => item.id === tech.id);
                  return (
                    <TechCard
                      key={tech.id}
                      technology={tech}
                      isAdded={isAdded}
                      onAddToStack={handleAddToStack}
                    />
                  );
                })}
              </div>
            </div>

            {/* 🧰 Your Stack Sidebar */}
            <div className="lg:col-span-4" id="projects">
              <YourStack
                stack={myStack}
                onRemoveItem={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
                onExportStack={handleExportStack}
              />
            </div>

          </div>
        )}

      </section>

      {/* 💡 How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Architecting Stacks Made Simple
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Three effortless steps from discovery to production-ready architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-base">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Select Core Engine</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Choose runtime, frontend frameworks, and language tools suited for your application scale.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-base">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Attach Database & DevOps</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Integrate high-speed SQL/NoSQL databases, in-memory caches, and container infrastructure.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-base">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Ship With Confidence</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Export architecture manifest directly into your project repo and start building immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
