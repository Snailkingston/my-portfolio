import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
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
                          Featured Case Study
                        </span>
                      </div>
                      <h2 className="text-white mb-2">Staff Time & Approval System</h2>
                      <p className="text-indigo-100">Power Apps + Power Automate + Azure SQL</p>
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
                      <div className="text-blue-600 dark:text-blue-400 mb-2">Role</div>
                      <p className="text-slate-900 dark:text-slate-100">Lead Developer & Product Manager</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-xl">
                      <div className="text-indigo-600 dark:text-indigo-400 mb-2">Timeline</div>
                      <p className="text-slate-900 dark:text-slate-100">6 weeks (MVP)</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-xl">
                      <div className="text-purple-600 dark:text-purple-400 mb-2">Team Size</div>
                      <p className="text-slate-900 dark:text-slate-100">4 members</p>
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400">⚠️</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">The Problem</h3>
                    </div>
                    <div className="pl-10 space-y-3">
                      <p className="text-slate-600 dark:text-slate-300">
                        The company relied on spreadsheets and email threads for time reporting and leave approvals. This manual process caused significant challenges:
                      </p>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>Data entry errors leading to payroll discrepancies</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>Manual chasing of approvals causing delays (average 72 hours)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>No audit trail or accountability for changes</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>Fragmented data across multiple spreadsheets</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Goal */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400">🎯</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">Project Goal</h3>
                    </div>
                    <div className="pl-10">
                      <p className="text-slate-600 dark:text-slate-300">
                        Replace spreadsheets with a single, unified app for staff to submit time and leave requests, managers to approve efficiently, and payroll to export validated records. The primary objectives were to reduce approval latency and eliminate data errors.
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                        <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">Solution Architecture</h3>
                    </div>
                    <div className="pl-10 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                          <h4 className="text-slate-900 dark:text-slate-100 mb-2">Power Apps Canvas</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">Mobile + desktop form submission for time entries, leave requests, and attachment uploads</p>
                        </div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                          <h4 className="text-slate-900 dark:text-slate-100 mb-2">Power Automate Flows</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">Automated approval routing by manager, reminders, and complete audit trail</p>
                        </div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                          <h4 className="text-slate-900 dark:text-slate-100 mb-2">Azure SQL Database</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">Single source of truth for all time and approval records</p>
                        </div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                          <h4 className="text-slate-900 dark:text-slate-100 mb-2">Azure Blob Storage</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">Secure storage for attachments and supporting documents</p>
                        </div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                          <h4 className="text-slate-900 dark:text-slate-100 mb-2">Azure AD Integration</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">Role-based access control using Azure AD groups</p>
                        </div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                          <h4 className="text-slate-900 dark:text-slate-100 mb-2">Payroll Export</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">Nightly automated flow to CSV format for payroll system</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* My Responsibilities */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950 rounded-lg flex items-center justify-center">
                        <Users className="text-purple-600 dark:text-purple-400" size={20} />
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">My Responsibilities</h3>
                    </div>
                    <div className="pl-10">
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Product definition and requirements gathering',
                          'Database schema design and optimization',
                          'Power Apps UI/UX design and development',
                          'Power Automate workflow configuration',
                          'Azure infrastructure setup and configuration',
                          'User training and rollout management',
                          'Stakeholder communication and demos',
                          'Post-launch support and iteration'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1" size={16} />
                            <span className="text-slate-600 dark:text-slate-300 text-sm">{item}</span>
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
                      <h3 className="text-slate-900 dark:text-slate-100">Measurable Impact</h3>
                    </div>
                    <div className="pl-10 grid md:grid-cols-3 gap-6">
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl text-center">
                        <Clock className="text-blue-600 dark:text-blue-400 mx-auto mb-2" size={32} />
                        <div className="text-blue-600 dark:text-blue-400 mb-1">From 72h to {'<'}2h</div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Approval latency reduced by 97%</p>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl text-center">
                        <CheckCircle className="text-green-600 dark:text-green-400 mx-auto mb-2" size={32} />
                        <div className="text-green-600 dark:text-green-400 mb-1">85% Reduction</div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">In payroll errors (first 2 cycles)</p>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl text-center">
                        <Award className="text-purple-600 dark:text-purple-400 mx-auto mb-2" size={32} />
                        <div className="text-purple-600 dark:text-purple-400 mb-1">100% Adoption</div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Within 4 weeks of rollout</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Learnings */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-950 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400">💡</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100">Key Learnings</h3>
                    </div>
                    <div className="pl-10 space-y-3">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-blue-600 dark:border-blue-500">
                        <p className="text-slate-700 dark:text-slate-300">
                          <strong>UX Simplicity is Critical:</strong> A simple, role-aware user interface dramatically reduced support requests and increased adoption rates.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-indigo-600 dark:border-indigo-500">
                        <p className="text-slate-700 dark:text-slate-300">
                          <strong>Automation Drives Adoption:</strong> Automated reminders were essential for manager engagement and timely approvals.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-purple-600 dark:border-purple-500">
                        <p className="text-slate-700 dark:text-slate-300">
                          <strong>Stakeholder Communication:</strong> Regular demos and feedback sessions ensured the solution met real user needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Summary */}
                  <div>
                    <h3 className="text-slate-900 dark:text-slate-100 mb-4">Technology Stack</h3>
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
                      Interested in similar solutions for your organization?
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
                        Let's Talk
                      </a>
                      <button
                        onClick={onClose}
                        className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                      >
                        Close
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
