import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  const { t } = useTranslation();
  
  // Responsibilities with translation keys
  const responsibilities = [
    'caseStudy.responsibilityItems.product',
    'caseStudy.responsibilityItems.database',
    'caseStudy.responsibilityItems.ui',
    'caseStudy.responsibilityItems.workflow',
    'caseStudy.responsibilityItems.azure',
    'caseStudy.responsibilityItems.training',
    'caseStudy.responsibilityItems.stakeholder',
    'caseStudy.responsibilityItems.support',
  ];
  
  // Problem items with translation keys
  const problemItems = [
    'caseStudy.problemItems.errors',
    'caseStudy.problemItems.delays',
    'caseStudy.problemItems.audit',
    'caseStudy.problemItems.fragmented',
  ];
  
  // Solution items keys
  const solutionItems = [
    { titleKey: 'caseStudy.solutionItems.powerApps.title', descriptionKey: 'caseStudy.solutionItems.powerApps.description' },
    { titleKey: 'caseStudy.solutionItems.powerAutomate.title', descriptionKey: 'caseStudy.solutionItems.powerAutomate.description' },
    { titleKey: 'caseStudy.solutionItems.azureSql.title', descriptionKey: 'caseStudy.solutionItems.azureSql.description' },
    { titleKey: 'caseStudy.solutionItems.blobStorage.title', descriptionKey: 'caseStudy.solutionItems.blobStorage.description' },
    { titleKey: 'caseStudy.solutionItems.azureAd.title', descriptionKey: 'caseStudy.solutionItems.azureAd.description' },
    { titleKey: 'caseStudy.solutionItems.payroll.title', descriptionKey: 'caseStudy.solutionItems.payroll.description' },
  ];
  
  // Learnings items
  const learningsItems = [
    { titleKey: 'caseStudy.learningsItems.ux.title', descriptionKey: 'caseStudy.learningsItems.ux.description' },
    { titleKey: 'caseStudy.learningsItems.automation.title', descriptionKey: 'caseStudy.learningsItems.automation.description' },
    { titleKey: 'caseStudy.learningsItems.communication.title', descriptionKey: 'caseStudy.learningsItems.communication.description' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-700"
              >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                          {t('caseStudy.badge')}
                        </span>
                      </div>
                      <h2 className="text-white mb-2">{t('caseStudy.title')}</h2>
                      <p className="text-indigo-100">{t('caseStudy.subtitle')}</p>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-white/20 rounded-lg transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Project Overview */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-xl">
                      <div className="text-blue-600 dark:text-blue-400 mb-2">{t('caseStudy.role')}</div>
                      <p className="text-slate-900 dark:text-slate-100">{t('caseStudy.roleValue')}</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-xl">
                      <div className="text-indigo-600 dark:text-indigo-400 mb-2">{t('caseStudy.timeline')}</div>
                      <p className="text-slate-900 dark:text-slate-100">{t('caseStudy.timelineValue')}</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-xl">
                      <div className="text-purple-600 dark:text-purple-400 mb-2">{t('caseStudy.teamSize')}</div>
                      <p className="text-slate-900 dark:text-slate-100">{t('caseStudy.teamSizeValue')}</p>
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400">⚠️</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">{t('caseStudy.problem')}</h3>
                    </div>
                    <div className="pl-10 space-y-3">
                      <p className="text-slate-600 dark:text-slate-300">
                        {t('caseStudy.problemDesc')}
                      </p>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        {problemItems.map((itemKey, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>{t(itemKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Goal */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400">🎯</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">{t('caseStudy.goal')}</h3>
                    </div>
                    <div className="pl-10">
                      <p className="text-slate-600 dark:text-slate-300">
                        {t('caseStudy.goalDesc')}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                        <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">{t('caseStudy.solution')}</h3>
                    </div>
                    <div className="pl-10 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        {solutionItems.map((item, index) => (
                          <div key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                            <h4 className="text-slate-900 dark:text-slate-100 mb-2">{t(item.titleKey)}</h4>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">{t(item.descriptionKey)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* My Responsibilities */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950 rounded-lg flex items-center justify-center">
                        <Users className="text-purple-600 dark:text-purple-400" size={20} />
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">{t('caseStudy.responsibilities')}</h3>
                    </div>
                    <div className="pl-10">
                      <div className="grid md:grid-cols-2 gap-3">
                        {responsibilities.map((itemKey, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1" size={16} />
                            <span className="text-slate-600 dark:text-slate-300 text-sm">{t(itemKey)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Impact & Results */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-amber-100 dark:bg-amber-950 rounded-lg flex items-center justify-center">
                        <TrendingUp className="text-amber-600 dark:text-amber-400" size={20} />
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">{t('caseStudy.impact')}</h3>
                    </div>
                    <div className="pl-10 grid md:grid-cols-3 gap-6">
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl text-center">
                        <Clock className="text-blue-600 dark:text-blue-400 mx-auto mb-2" size={32} />
                        <div className="text-blue-600 dark:text-blue-400 mb-1">{t('caseStudy.impactItems.latency.value')}</div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{t('caseStudy.impactItems.latency.description')}</p>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl text-center">
                        <CheckCircle className="text-green-600 dark:text-green-400 mx-auto mb-2" size={32} />
                        <div className="text-green-600 dark:text-green-400 mb-1">{t('caseStudy.impactItems.errors.value')}</div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{t('caseStudy.impactItems.errors.description')}</p>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl text-center">
                        <Award className="text-purple-600 dark:text-purple-400 mx-auto mb-2" size={32} />
                        <div className="text-purple-600 dark:text-purple-400 mb-1">{t('caseStudy.impactItems.adoption.value')}</div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{t('caseStudy.impactItems.adoption.description')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Learnings */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-950 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400">💡</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">{t('caseStudy.learnings')}</h3>
                    </div>
                    <div className="pl-10 space-y-3">
                      {learningsItems.map((item, index) => {
                        const borderColors = ['border-blue-600 dark:border-blue-500', 'border-indigo-600 dark:border-indigo-500', 'border-purple-600 dark:border-purple-500'];
                        return (
                          <div key={index} className={`p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 ${borderColors[index]}`}>
                            <p className="text-slate-700 dark:text-slate-300">
                              <strong>{t(item.titleKey)}</strong> {t(item.descriptionKey)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tech Stack Summary */}
                  <div>
                    <h3 className="text-slate-900 dark:text-slate-100 mb-4">{t('caseStudy.techStack')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Power Apps',
                        'Power Automate',
                        'Azure SQL',
                        'Azure Blob Storage',
                        'Azure AD',
                        'Power BI',
                        'Office 365'
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-600 dark:text-slate-300 text-center mb-4">
                      {t('caseStudy.cta.text')}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          onClose();
                          const element = document.getElementById('contact');
                          if (element) {
                            const offset = 80;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - offset;
                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                          }
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        {t('caseStudy.cta.letsTalk')}
                      </a>
                      <button
                        onClick={onClose}
                        className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                      >
                        {t('caseStudy.cta.close')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
