import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border'
        : 'bg-white dark:bg-dark-bg'
    }`}>
      {/* Desktop nav content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1 font-display font-bold text-lg">
            <span className="text-2xl">M</span>
            <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></span>
            <span className="text-sm tracking-widest uppercase hidden sm:inline">Mendoza</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg border border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-200"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium border border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg border border-light-border dark:border-dark-border"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg border border-light-border dark:border-dark-border"
            >
              {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileOpen ? 'max-h-[500px] border-b border-light-border dark:border-dark-border' : 'max-h-0'
      }`}>
        <div className="px-4 py-4 bg-white dark:bg-dark-bg space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="block py-2.5 px-3 text-sm rounded-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="block mt-3 text-center py-2.5 px-3 text-sm font-medium border border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
