import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Suffo delivered our operational dashboard in under 3 weeks and trained our managers — outstanding work and exceptional communication throughout.",
      author: "Joseph Kobe",
      role: "Operations Manager",
      company: "CEO ICES Academy",
      rating: 5,
    },
    {
      quote: "Great communicator who shipped the MVP quickly and handled feedback professionally. The Power Apps solution transformed our workflow.",
      author: "Sarah Johnson",
      role: "HR Director",
      company: "Enterprise Solutions Inc",
      rating: 5,
    },
    {
      quote: "Suffo's technical expertise combined with project management skills made our Azure migration smooth and successful. Highly recommend!",
      author: "Ndongmo Laur",
      role: "CTO",
      company: "CloudFirst Ventures",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wide">Testimonials</span>
          <h2 className="mt-2 text-slate-900 dark:text-slate-100">What People Say</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feedback from colleagues, managers, and clients I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-950 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-blue-600 dark:text-blue-400" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-slate-900 dark:text-slate-100">{testimonial.author}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm">{testimonial.role}</div>
                  <div className="text-slate-400 dark:text-slate-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <div className="text-blue-600 dark:text-blue-400">250+</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">GitHub Stars</div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />
            <div className="text-center">
              <div className="text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">Open Source PRs</div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />
            <div className="text-center">
              <div className="text-blue-600 dark:text-blue-400">15+</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
