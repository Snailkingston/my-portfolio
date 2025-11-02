import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      color: 'blue',
      skills: [
        {name : 'TypeScript', level: 67},
        { name: 'React', level: 95 },
        { name: 'Bootstrap', level: 90 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        {name : 'SVG', level: 60},
        {name : 'motion libraries', level : 50},
        {name : 'Others', level : 54},
      ],
    },
    {
      category: 'Backend',
      color: 'indigo',
      skills: [
        {name : 'JavaScript', level : 99},
        {name : 'Python', level : 99},
        {name : 'Java', level : 70},
        {name : 'PHP', level : 60},
        { name: 'Node.js / Express', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 85 },
        { name: 'Azure Functions', level: 88 },
      ],
    },
    {
      category: 'Database',
      color: 'purple',
      skills: [
        {name : 'MySQL', level : 79},
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Azure SQL', level: 88 },
        { name: 'Cosmos DB', level: 82 },
        {name : 'SQLite', level : 99},
        {name : 'SuperBase', level : 59},
        {name : 'Firebase', level : 69},
      ],
    },
    {
      category: 'Microsoft Ecosystem',
      color: 'pink',
      skills: [
        { name: 'Power Apps', level: 95 },
        { name: 'Power Automate', level: 92 },
        { name: 'Power BI', level: 90 },
        { name: 'Office Automation', level: 88 },
        {name : 'Office 365', level : 89},
      ],
    },
    {
      category: 'Cloud & DevOps',
      color: 'cyan',
      skills: [
        { name: 'Azure (App Service, Functions, Storage)', level: 90 },
        { name: 'GitHub Actions', level: 88 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'Docker', level: 80 },
      ],
    },
    {
      category: 'Leadership & Tools',
      color: 'emerald',
      skills: [
        { name: 'Agile / Scrum', level: 92 },
        { name: 'Project Management', level: 90 },
        { name: 'Team Mentorship', level: 88 },
        { name: 'Stakeholder Communication', level: 95 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; gradient: string; text: string }> = {
      blue: { bg: 'bg-blue-500', gradient: 'from-blue-500 to-blue-600', text: 'text-blue-600' },
      indigo: { bg: 'bg-indigo-500', gradient: 'from-indigo-500 to-indigo-600', text: 'text-indigo-600' },
      purple: { bg: 'bg-purple-500', gradient: 'from-purple-500 to-purple-600', text: 'text-purple-600' },
      pink: { bg: 'bg-pink-500', gradient: 'from-pink-500 to-pink-600', text: 'text-pink-600' },
      cyan: { bg: 'bg-cyan-500', gradient: 'from-cyan-500 to-cyan-600', text: 'text-cyan-600' },
      emerald: { bg: 'bg-emerald-500', gradient: 'from-emerald-500 to-emerald-600', text: 'text-emerald-600' },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wide">Technical Skills</span>
          <h2 className="mt-2 text-slate-900 dark:text-slate-100">Full-Stack Technology Expertise</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive skill set spanning frontend, backend, cloud infrastructure, and project leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${colorClasses.bg}`} />
                  <h3 className={`${colorClasses.text}`}>{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 dark:text-slate-200 text-sm">{skill.name}</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${colorClasses.gradient} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-4">Additional Tools & Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'VS Code', 'Figma', 'Jira', 'OWASP', 'Unit Testing', 'Azure AD', 'Office Scripts', 'VBA'].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
