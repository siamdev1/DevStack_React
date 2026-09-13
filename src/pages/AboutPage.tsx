import React from 'react';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          About <span className="text-brand-gradient">DevStack</span>
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          DevStack is an interactive architecture platform built for developers, architects, and engineering leads to explore, compose, and export modern tech stacks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
            <Zap size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Lightning Fast</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Curate your tools in seconds with reactive state, instant search, and instant exports.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold">
            <Layers size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Modular Stacks</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Mix and match frontends, databases, cache layers, and DevOps engines effortlessly.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
            <ShieldCheck size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Production Verified</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Only battle-tested, high-reliability packages and frameworks included in the catalog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
