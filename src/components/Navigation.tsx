import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'impact', label: 'Impact' },
    { id: 'testimonials', label: 'Testimonials' },
    {id : 'blog', label: 'Blog'},
    { id: 'contact', label: 'Contact' },
    
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white">NP</span>
            </div>
            <span className="hidden sm:block text-slate-800 dark:text-slate-100">Suffo Nzogang Patrice</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href="https://github.com/Snailkingston"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/suffo-nzogang-patrice-43ba0628b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:patrice_nzogang@outlook.com"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
            >
              <Mail size={20} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <a
                  href="https://github.com/SnailKingston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suffo-nzogang-patrice-43ba0628b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg"
                >
                  <Download size={18} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
