import { Github, Linkedin, Mail, Heart, Instagram, FacebookIcon, PhoneCall, X, Twitter, Twitch, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Footer sections with translation keys
  const footerSections = [
    { id: 'home', key: 'nav.home' },
    { id: 'about', key: 'nav.about' },
    { id: 'skills', key: 'nav.skills' },
    { id: 'projects', key: 'nav.projects' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span>SNP</span>
              </div>
              <span>SUFFO NZOGANG PATRICE</span>
            </div>
            <p className="text-slate-400 dark:text-slate-500 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3">
                 <a
                href="https://www.linkedin.com/in/suffo-nzogang-patrice-43ba0628b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:patrice_nzogang@outlook.com"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/Snailkingston"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <Github size={20} />
              </a>

              <a
                href="https://instagram.com/snail_kingston/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/Snailkingston"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <FacebookIcon size={20} />
              </a>

               <a
                href="tel:+237697353791"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <PhoneCall size={20} />
              </a>

               <a
                href="https://github.com/Snailkingston"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <Twitter size={20} />
              </a>

               <a
                href="https://github.com/Snailkingston"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <Twitch size={20} />
              </a>

               <a
                href="https://wa.me/+237697353791?text=Hello, Sir PATRICE NZOGANG %20I'd%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <Phone size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {footerSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-300 transition-colors"
                  >
                    {t(section.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">{t('footer.contactTitle')}</h4>
            <ul className="space-y-2 text-slate-400 dark:text-slate-500">
              <li><a href="mailto: patrice_nzogang@outlook.com">PATRICE_NZOGANG@OUTLOOK.COM</a></li>
              <li><a href="tel:+237697353791">+237-697-353-791</a></li>
              <li>{t('footer.availableRemote')}</li>
              <li>{t('footer.languages')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center space-x-1">
            <span>{t('footer.godFearer')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
