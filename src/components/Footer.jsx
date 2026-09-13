import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';

const footerLinks = [
  { label: 'GitHub', icon: FiGithub, href: 'https://github.com/mendoza0999' },
  { label: 'Email', icon: FiMail, href: 'mailto:markjoeymendoza151@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <a href="#home" className="font-display text-xl font-bold mb-2">
            Markjoey Mendoza
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            AI-Assisted Developer & Computer Science Student
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-8">
            {footerLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-lg border border-light-border dark:border-dark-border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full border-t border-light-border dark:border-dark-border pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                © 2026 Markjoey Mendoza. All rights reserved.
              </p>
              <p className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                Built with <FaReact className="w-3.5 h-3.5" /> React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
