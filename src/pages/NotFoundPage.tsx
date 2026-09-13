import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 mb-6">
        <AlertTriangle size={32} />
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-700 mt-2">Page Not Found</h2>
      <p className="text-sm text-slate-500 max-w-md mt-2 mb-8">
        The page or route you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/25 flex items-center gap-2"
      >
        <Home size={16} />
        <span>Return Home</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
