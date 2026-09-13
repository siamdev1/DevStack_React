import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  const sampleStacks = [
    {
      title: 'Fullstack SaaS Starter',
      description: 'Production-ready architecture with React, Next.js, PostgreSQL, and Tailwind.',
      techs: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      badge: 'Popular',
    },
    {
      title: 'Realtime High-Scale API',
      description: 'Microservices architecture with Node.js, Express, Redis caching, and Docker.',
      techs: ['Node.js', 'Express', 'Redis', 'Docker', 'MongoDB'],
      badge: 'Enterprise',
    },
    {
      title: 'Modern AI / ML Analytics Suite',
      description: 'End-to-end data pipeline with Python, GraphQL, and containerized deployment.',
      techs: ['Python', 'GraphQL', 'Docker', 'PostgreSQL'],
      badge: 'AI Ready',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Curated <span className="text-brand-gradient">Project Stacks</span>
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Explore battle-tested architectural templates designed by senior software engineers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sampleStacks.map((stack) => (
          <div
            key={stack.title}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-600 border border-pink-200/60">
                {stack.badge}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-4">{stack.title}</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{stack.description}</p>
              
              <div className="mt-6 space-y-2">
                <p className="text-xs font-semibold text-slate-700">Included Stack:</p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.techs.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 text-slate-700 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                to="/"
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Customize in Stack Builder</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
