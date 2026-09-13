import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-slate-200/90 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Mobile Left: Hamburger Menu Icon */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500/30 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Brand Logo & Name (Left on Desktop, Center on Mobile) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 p-[2px] shadow-sm shadow-pink-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors" />
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
                <span className="text-slate-900">Dev</span>
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent ml-1">
                  Stack
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Center: Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-pink-600 bg-pink-50 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right: Sign In & Sign Up Buttons (Desktop & Mobile) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link
              to="/signin"
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-pink-600 bg-pink-50 font-semibold border-l-4 border-pink-500'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
