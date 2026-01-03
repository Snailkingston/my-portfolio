import { motion } from 'motion/react';
import { Code2, Briefcase, Users, Award } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
  
  // Highlights with translation keys
  const highlights = [
    {
      icon: Code2,
      titleKey: 'about.highlights.fullStack.title',
      descriptionKey: 'about.highlights.fullStack.description',
    },
    {
      icon: Briefcase,
      titleKey: 'about.highlights.leadership.title',
      descriptionKey: 'about.highlights.leadership.description',
    },
    {
      icon: Users,
      titleKey: 'about.highlights.mentorship.title',
      descriptionKey: 'about.highlights.mentorship.description',
    },
    {
      icon: Award,
      titleKey: 'about.highlights.results.title',
      descriptionKey: 'about.highlights.results.description',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wide">{t('about.title')}</span>
          <h2 className="mt-2 text-slate-900 dark:text-slate-100">{t('about.subtitle')}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-slate-300">
              <Trans
                i18nKey="about.intro1"
                values={{ name: 'Suffo Nzogang Patrice' }}
                components={{ strong: <strong className="text-slate-900 dark:text-slate-100" /> }}
              />
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              {t('about.intro2')}
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              {t('about.intro3')}
            </p>
             <p className="text-slate-600 dark:text-slate-300">
              {t('about.intro4')}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">{t('about.tags.productMinded')}</span>
              <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm">{t('about.tags.agileLeader')}</span>
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm">{t('about.tags.openSource')}</span>
              <span className="px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm">{t('about.tags.mentor')}</span>
              <span className="px-4 py-2 bg-pink-50 text-blue-700 rounded-full text-sm">{t('about.tags.businessMinded')}</span>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-950 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 mb-2">{t(item.titleKey)}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{t(item.descriptionKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
