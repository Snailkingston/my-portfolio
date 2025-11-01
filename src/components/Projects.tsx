import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onOpenCaseStudy: () => void;
}

export function Projects({ onOpenCaseStudy }: ProjectsProps) {
  const featuredProjects = [
    {
      title: 'Operational Dashboard',
      subtitle: 'Power BI + Azure Data Pipeline',
      description: 'Built a real-time operations dashboard for enterprise using Power BI and Azure Data Factory. Connected CSV, SQL and API sources, implemented refresh pipelines, and created user roles.',
      impact: '40% faster decision time for managers',
      tags: ['Power BI', 'Azure Data Factory', 'SQL', 'REST APIs'],
      color: 'blue',
      image: 'dashboard analytics',
    },
    {
      title: 'Staff Time & Approval System',
      subtitle: 'Power Apps + Azure SQL',
      description: 'Created a staff-time tracking and approval app with Power Apps, automated approvals with Power Automate, and stored records in Azure SQL. Replaced manual spreadsheets.',
      impact: '85% reduction in payroll errors',
      tags: ['Power Apps', 'Power Automate', 'Azure SQL', 'Azure AD'],
      color: 'indigo',
      isCaseStudy: true,
      image: 'business workflow',
    },
    {
      title: 'Customer Portal',
      subtitle: 'React + Node.js + Azure',
      description: 'End-to-end portal for clients to track orders, invoices, and messages. Implemented JWT auth, Azure Blob storage for media, and serverless functions for webhooks.',
      impact: '18% increase in on-time payments',
      tags: ['React', 'Node.js', 'Azure Functions', 'JWT', 'Blob Storage'],
      color: 'purple',
      image: 'customer portal',
    },
  ];

  const otherProjects = [
    {
      title: 'Expense Tracker',
      description: 'React + Node mini-app with CSV import/export functionality',
      tags: ['React', 'Node.js', 'CSV Parser'],
      link: '#',
    },
    {
      title: 'Office Automation Script',
      description: 'Excel automation using Office Scripts for monthly data consolidation',
      tags: ['Office Scripts', 'TypeScript', 'Excel'],
      link: '#',
    },
    {
      title: 'Event RSVP App',
      description: 'Serverless event management app built in 48-hour hackathon',
      tags: ['Azure Functions', 'React', 'Cosmos DB'],
      link: '#',
    },
    {
      title: 'Open Source CLI Tool',
      description: 'Command-line utility for developers (250+ stars on GitHub)',
      tags: ['Node.js', 'CLI', 'Open Source'],
      link: '#',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; badge: string }> = {
      blue: { gradient: 'from-blue-500 to-blue-600', badge: 'bg-blue-100 text-blue-700' },
      indigo: { gradient: 'from-indigo-500 to-indigo-600', badge: 'bg-indigo-100 text-indigo-700' },
      purple: { gradient: 'from-purple-500 to-purple-600', badge: 'bg-purple-100 text-purple-700' },
    };
    return colors[color];
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wide">Portfolio</span>
          <h2 className="mt-2 text-slate-900 dark:text-slate-100">Featured Projects</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Production-ready applications delivering measurable business impact
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-slate-200 dark:border-slate-700"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${colorClasses.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <ExternalLink size={32} />
                      </div>
                      <p className="text-sm opacity-90">{project.image}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-slate-900 dark:text-slate-100 flex-1">{project.title}</h3>
                      {project.isCaseStudy && (
                        <span className="px-2 py-1 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs rounded">
                          Case Study
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm">{project.description}</p>

                  <div className={`px-4 py-3 ${colorClasses.badge} rounded-lg`}>
                    <p className="text-sm">📊 {project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.isCaseStudy && (
                    <button
                      onClick={onOpenCaseStudy}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all group/btn"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center">
            <h3 className="text-slate-900 dark:text-slate-100">Other Projects & Open Source</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">Additional work and contributions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Github size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
