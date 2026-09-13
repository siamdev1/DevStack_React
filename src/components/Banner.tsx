import React from 'react';
import { ArrowRight, Info, Sparkles } from 'lucide-react';

export const Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 pb-14 lg:pb-20 bg-gradient-to-b from-orange-50/40 via-pink-50/20 to-white border-b border-slate-100">
      {/* Background ambient glow shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-r from-orange-200/40 via-pink-200/40 to-purple-200/30 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200/80 text-xs font-semibold text-pink-600 shadow-xs">
              <Sparkles size={14} className="text-pink-500 animate-pulse" />
              <span>Modern Web Architecture Platform</span>
            </div>

            {/* Two-tone Heading: Plain text + Gradient text */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Build & Scale Your Next{' '}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Dream Tech Stack
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore, compare, and organize industry-leading developer tools, libraries, and frameworks. Design the ultimate development environment for your next viral project.
            </p>

            {/* Two Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#technologies"
                className="px-6 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 shadow-md shadow-pink-500/25 hover:shadow-lg hover:shadow-pink-500/35 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Technologies</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3.5 rounded-full font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Learn More</span>
                <Info size={18} className="text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 opacity-25 blur-xl group-hover:opacity-40 transition duration-500" />
              
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-medium">devstack-architecture</span>
                </div>
                
                <div className="py-6 flex items-center justify-center">
                  <img
                    src="/banner-stack.png"
                    alt="DevStack Banner Visual"
                    className="w-full max-h-60 object-contain rounded-lg filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if not found in root
                      (e.target as HTMLImageElement).src = './assets/banner-stack.png';
                    }}
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Multi-tier Ecosystem</span>
                  <span className="text-emerald-600 font-semibold">Ready to Deploy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
