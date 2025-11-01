import { motion } from 'motion/react';
import { TrendingUp, Clock, Users, Zap, Target, Award } from 'lucide-react';

export function Impact() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '40-85%',
      label: 'Reduction in Manual Processing Time',
      description: 'Across all projects',
      color: 'blue',
    },
    {
      icon: Target,
      value: '3',
      label: 'Production MVPs Delivered',
      description: 'In the last 12 months',
      color: 'indigo',
    },
    {
      icon: Zap,
      value: '18%',
      label: 'Increase in Payment Throughput',
      description: 'Customer portal project',
      color: 'purple',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Users Onboarded',
      description: 'Power Apps solution in 4 weeks',
      color: 'pink',
    },
    {
      icon: Clock,
      value: '97%',
      label: 'Faster Approval Times',
      description: 'From 72h to under 2 hours',
      color: 'cyan',
    },
    {
      icon: Award,
      value: '85%',
      label: 'Reduction in Errors',
      description: 'Payroll accuracy improvement',
      color: 'emerald',
    },
  ];

  const achievements = [
    'Led cross-functional squad of 4 to launch production MVPs in 6-8 week cycles',
    'Managed stakeholder onboarding, requirements prioritization, and UAT sign-off',
    'Mentored 3 junior developers with code reviews and best practices',
    'Active open-source contributor with multiple merged PRs and issue triage',
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; bg: string; text: string }> = {
      blue: { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-100', text: 'text-blue-600' },
      indigo: { gradient: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-100', text: 'text-indigo-600' },
      purple: { gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-100', text: 'text-purple-600' },
      pink: { gradient: 'from-pink-500 to-pink-600', bg: 'bg-pink-100', text: 'text-pink-600' },
      cyan: { gradient: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-100', text: 'text-cyan-600' },
      emerald: { gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-100', text: 'text-emerald-600' },
    };
    return colors[color];
  };

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-wide">Measurable Results</span>
          <h2 className="mt-2 text-white">Impact & Achievements</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Delivering solutions that create real value, backed by data
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const colorClasses = getColorClasses(metric.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group"
              >
                <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <metric.icon className={colorClasses.text} size={24} />
                </div>
                <div className="mb-1">{metric.value}</div>
                <h3 className="text-white mb-2">{metric.label}</h3>
                <p className="text-blue-200 text-sm">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership & Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
        >
          <h3 className="text-white mb-6 text-center">Leadership & Experience Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-blue-100 text-sm">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
