import { motion } from 'motion/react';
import { Code2, Briefcase, Users, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'FrontEnd, BackEnd, Databases, CI/CD and Microsoft Power Platform',
    },
    {
      icon: Briefcase,
      title: 'Project Leadership',
      description: 'Leading teams to deliver production MVPs in 6-8 week cycles',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Coaching junior developers and contributing to open-source',
    },
    {
      icon: Award,
      title: 'Measurable Results',
      description: 'Reducing manual work by 40-85% across projects',
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
          <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wide">About Me</span>
          <h2 className="mt-2 text-slate-900 dark:text-slate-100">Building Solutions That Matter</h2>
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
              I'm <strong className="text-slate-900 dark:text-slate-100">Suffo Nzogang Patrice</strong> — a full-stack developer and project manager experienced in building web applications, mobile applications, python desktop applications, and powers app manipulation
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              I combine hands-on development (front-end, back-end, databases, CI and CD ) with Microsoft stack expertise (Power Platform, Office automation, and more ) to deliver production-ready MVPs and scalable features.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              I enjoy leading small teams, mentoring contributors, and shipping open-source tools. I prioritize clear product goals, fast feedback cycles, and metrics that prove value.
            </p>
             <p className="text-slate-600 dark:text-slate-300">
              I love learning new technologies and participate in open source projects
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">Product-Minded</span>
              <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm">Agile Leader</span>
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm">Open Source</span>
              <span className="px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm">Mentor</span>
              <span className="px-4 py-2 bg-pink-50 text-blue-700 rounded-full text-sm">Business-Minded</span>
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
                <h3 className="text-slate-900 dark:text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
