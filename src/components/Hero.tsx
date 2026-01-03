import { motion } from 'motion/react';
import { ArrowRight, Calendar, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full"
              >
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
                <span>{t('hero.available')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-900 dark:text-slate-100"
              >
                {t('hero.title')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-600 dark:text-slate-300 max-w-2xl"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="space-y-1">
                <div className="text-blue-600 dark:text-blue-400">9+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">{t('hero.mvpsDelivered')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-600 dark:text-blue-400">85%</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">{t('hero.errorReduction')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">{t('hero.usersOnboarded')}</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all group"
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <Calendar size={18} />
                <span>{t('hero.scheduleCall')}</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-4 pt-4"
            >
              <span className="text-slate-500 dark:text-slate-400 text-sm">{t('hero.connect')}</span>
              <a
                href="https://github.com/Snailkingston"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/suffo-nzogang-patrice-43ba0628b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:patrice_nzogang@outlook.com"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg transition-all"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Code Window Mockup */}
              <div className="bg-slate-900 dark:bg-slate-950 rounded-xl shadow-2xl overflow-hidden border border-slate-700 dark:border-slate-800">
                <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-slate-400 text-sm">portfolio.tsx</span>
                </div>
                <div className="p-6 space-y-2 text-sm font-mono">
                  <div className="text-purple-400">import <span className="text-blue-300">{'{ Success }'}</span> from <span className="text-green-300">'@azure/power-platform'</span>;</div>
                  <div className="text-purple-400">import <span className="text-blue-300">{'{ Innovation }'}</span> from <span className="text-green-300">'@react/solutions'</span>;</div>
                  <div className="mt-4 text-slate-500">// {t('hero.codeComment')}</div>
                  <div className="text-yellow-400">const <span className="text-blue-300">developer</span> = {'{'}</div>
                  <div className="pl-4 text-slate-300">name: <span className="text-green-300">'Suffo Nzogang Patrice'</span>,</div>
                  <div className="pl-4 text-slate-300">role: <span className="text-green-300">'Full-Stack Engineer'</span>,</div>
                  <div className="pl-4 text-slate-300">impact: <span className="text-orange-400">measurable</span>,</div>
                  <div className="pl-4 text-slate-300">mvps: <span className="text-orange-400">9+</span>,</div>
                  <div className="pl-4 text-slate-300">errorReduction: <span className="text-green-300">'85%'</span></div>
                  <div className="text-yellow-400">{'};'}</div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-xs">
                    FS
                  </div>
                  <span className="text-slate-700 dark:text-slate-200 text-sm">{t('hero.fullStack')}</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs">
                    PP
                  </div>
                  <span className="text-slate-700 dark:text-slate-200 text-sm">{t('hero.powerPlatforms')}</span>
                </div>
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
