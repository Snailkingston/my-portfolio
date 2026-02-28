import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Languages,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  /**
   * Handle language change
   * Changes the current language and saves preference to localStorage
   */
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLanguageMenuOpen && !target.closest(".language-menu-container")) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isLanguageMenuOpen]);

  // ONLY CHANGE: removed setIsMobileMenuOpen(false) from scrollToSection
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  // Navigation items with translation keys
  const navItems = [
    { id: "home", labelKey: "nav.home" },
    { id: "about", labelKey: "nav.about" },
    { id: "skills", labelKey: "nav.skills" },
    { id: "projects", labelKey: "nav.projects" },
    { id: "impact", labelKey: "nav.impact" },
    { id: "testimonials", labelKey: "nav.testimonials" },
    { id: "blog", labelKey: "nav.blog" },
    { id: "contact", labelKey: "nav.contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white">NP</span>
            </div>
            <span className="hidden sm:block text-slate-800 dark:text-slate-100">
              Suffo Nzogang Patrice
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Toggle */}
            <div className="relative language-menu-container">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all flex items-center space-x-1"
                aria-label="Change language"
              >
                <Languages size={20} />
                <span className="text-sm font-medium uppercase">
                  {i18n.language}
                </span>
              </button>

              {/* Language Dropdown */}
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all ${
                      i18n.language === "en"
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all ${
                      i18n.language === "fr"
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label={t("nav.toggleTheme")}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
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
              href="mailto:suffo.nzogang.patrice1@gmail.com"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);

                    // wait one frame so AnimatePresence unmount starts
                    requestAnimationFrame(() => {
                      scrollToSection(item.id);
                    });
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}

              {/* Mobile Language Toggle */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-slate-600 dark:text-slate-300 text-sm">
                    Language
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`px-3 py-1 rounded text-sm transition-all ${
                        i18n.language === "en"
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => changeLanguage("fr")}
                      className={`px-3 py-1 rounded text-sm transition-all ${
                        i18n.language === "fr"
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      FR
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
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
                  <span>{t("nav.resume")}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
