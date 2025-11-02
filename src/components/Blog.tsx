import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag, Search, Filter } from 'lucide-react';
import { BlogPost } from './BlogPost';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    initials: string;
  };
}

const blogPosts: BlogPostData[] = [

  {
    id: '1',
    title: 'The Transformative Power of Artificial Intelligence in Today’s World',
    excerpt: 'Artificial Intelligence (AI) is no longer a futuristic concept; it’s reshaping industries, driving innovation, and influencing the way we live and work. From healthcare to entertainment, AI is becoming an indispensable part of our daily lives.',
    content: `**Artificial Intelligence**, often abbreviated as AI, refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions. What makes AI revolutionary is its ability to process vast amounts of data quickly, identify patterns, and provide insights that humans might miss.

One of the most visible impacts of AI is in healthcare, where algorithms assist in diagnosing diseases, predicting patient outcomes, and personalizing treatment plans. AI-powered tools help doctors detect conditions like cancer earlier, improving survival rates and reducing costs.

In business, AI is transforming how companies interact with customers. Chatbots, recommendation engines, and predictive analytics are helping organizations provide more personalized experiences and optimize operations. AI can analyze market trends faster than any human, giving businesses a competitive edge.

Education and entertainment have also felt AI’s influence. Adaptive learning platforms tailor lessons to individual student needs, while streaming services like Netflix or Spotify use AI to suggest content that matches user preferences, enhancing engagement.

Despite its benefits, AI raises ethical questions, including concerns about privacy, job displacement, and algorithmic bias. Responsible AI development requires transparency, accountability, and regulations that ensure technology serves humanity positively.

As AI continues to evolve, it is clear that embracing it responsibly can unlock unprecedented opportunities. The future will likely be defined by humans and machines collaborating, creating solutions that were once unimaginable.`,
    date: '10, 01, 2025',
    readTime: '47 read',
    category: 'AI',
    tags: ['AI', 'ML', 'Python'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SP'
    }
  },

  {
    id: '2',
    title: 'Understanding DevOps: Bridging Development and Operations',
    excerpt: 'DevOps is transforming the way software is built and delivered, breaking down barriers between development and operations teams. By fostering collaboration, automation, and continuous delivery, DevOps accelerates innovation and ensures more reliable software.',
    content: `DevOps, short for Development and Operations, is a set of practices and cultural philosophies that aim to unify software development (Dev) and IT operations (Ops). Its primary goal is to improve collaboration between teams, shorten development cycles, and deliver high-quality software faster.

At its core, DevOps emphasizes automation, continuous integration (CI), and continuous delivery/deployment (CD). Automation reduces repetitive tasks, such as testing or deployment, allowing teams to focus on innovation. Continuous integration ensures that code changes are regularly merged and tested, minimizing conflicts and bugs. Continuous delivery extends this by enabling reliable and frequent software releases to production.

Another key principle of DevOps is monitoring and feedback. By continuously monitoring applications and infrastructure, teams can detect issues early, respond quickly, and optimize performance. Tools like Docker, Kubernetes, Jenkins, and GitLab are commonly used to streamline these processes.

DevOps also promotes a cultural shift, emphasizing communication, collaboration, and shared responsibility. When developers and operations work closely, they understand each other’s challenges and can build systems that are both functional and maintainable.

Adopting DevOps leads to faster innovation, improved reliability, and higher customer satisfaction. However, successful implementation requires investment in training, tools, and organizational change.

In today’s fast-paced digital world, DevOps is not just a methodology—it’s a strategic approach that helps companies deliver better software, faster and more reliably.`,
    date: '10, 01, 2025',
    readTime: '27 read',
    category: 'DevOps',
    tags: ['CI/CD', 'Git', 'GitHub'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SNP'
    }
  },
  {
    id: '3',
    title: 'Unlocking Your Potential: The Power of Personal Development',
    excerpt: 'Personal development is the journey of improving yourself—your skills, mindset, and habits—to reach your fullest potential. By investing in yourself, you can achieve greater success, happiness, and fulfillment in all areas of life.',
    content: `Personal development is the conscious pursuit of growth and self-improvement. It encompasses improving your skills, mindset, habits, and emotional intelligence to become the best version of yourself. Unlike formal education, personal development is ongoing and tailored to your unique goals and challenges.

One of the key aspects of personal development is self-awareness. Understanding your strengths, weaknesses, values, and motivations allows you to make better decisions, set meaningful goals, and manage your emotions effectively. Journaling, meditation, and reflection are powerful tools to enhance self-awareness.

Goal setting is another cornerstone. By defining clear, actionable objectives, you can create a roadmap for your personal and professional growth. Breaking down larger goals into smaller, manageable steps makes progress measurable and achievable.

Personal development also involves continuous learning. Reading books, taking online courses, attending workshops, or seeking mentorship helps you expand your knowledge and skillset. Embracing a growth mindset—the belief that abilities can be developed through effort and practice—encourages resilience and adaptability in the face of challenges.

Building positive habits is equally important. Small, consistent actions like daily exercise, mindful routines, or practicing gratitude can compound over time to create significant improvements in your life. Surrounding yourself with supportive people who inspire and challenge you can further accelerate growth.

Ultimately, personal development is about taking responsibility for your life and actively shaping the future you want. By investing in yourself today, you create the foundation for a happier, more successful, and fulfilling tomorrow.`,
    date: '10, 01, 2025',
    readTime: '77 read',
    category: 'MindSet',
    tags: ['Mindset', 'growth', 'self development'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SNP'
    }
  },
  {
    id: '4',
    title: 'The Spirit of Entrepreneurship: Turning Ideas into Impact',
    excerpt: 'Entrepreneurship is more than starting a business—it’s about solving problems, creating value, and making an impact. By embracing innovation, resilience, and strategic thinking, anyone can transform ideas into successful ventures.',
    content: `Entrepreneurship is the art and science of creating, managing, and growing a business to solve real-world problems. Entrepreneurs identify opportunities, take calculated risks, and innovate to meet market needs. Beyond profit, entrepreneurship is about creating value for customers, communities, and society as a whole.

One of the fundamental traits of successful entrepreneurs is resilience. Starting a business is rarely easy, and failures are part of the journey. The ability to learn from mistakes, adapt, and keep moving forward separates successful entrepreneurs from the rest.

Innovation is another key element. Entrepreneurs often challenge the status quo by introducing new products, services, or business models. Creativity combined with strategic planning allows them to identify gaps in the market and provide unique solutions.

Effective entrepreneurship also requires strong leadership and management skills. Entrepreneurs must motivate teams, manage resources efficiently, and communicate a compelling vision that inspires stakeholders and investors alike. Networking, mentorship, and continuous learning are also critical to growth.

In today’s rapidly changing world, technology and globalization have opened up unprecedented opportunities for entrepreneurs. From e-commerce to AI-powered solutions, the possibilities are endless for those willing to take initiative.

Ultimately, entrepreneurship is a mindset—a willingness to act, innovate, and create impact. By cultivating resilience, creativity, and leadership, anyone can transform ideas into ventures that make a difference.`,
    date: '09, 28, 2025',
    readTime: '17 read',
    category: 'Entrepreneur',
    tags: ['growth', 'Think', 'Action'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SNP'
    }
  },
  {
    id: '5',
    title: 'Mobile Development Made Easy with React Native',
    excerpt: 'React Native is transforming the way mobile apps are built, allowing developers to create powerful apps for both iOS and Android using a single codebase. Learn how React Native simplifies development while delivering high-quality performance.',
    content: `React Native, developed by Facebook, is a popular framework for building mobile applications using JavaScript and React. Unlike traditional mobile development, which requires separate codebases for iOS and Android, React Native lets developers write one codebase that runs on both platforms.

One of React Native’s biggest advantages is efficiency. By reusing code across platforms, developers save time and reduce development costs. This also ensures a consistent user experience, as the same logic and components are used across devices.

React Native uses a component-based architecture, making it easier to create modular and maintainable apps. Components can be reused, updated, or replaced without affecting the entire application, which accelerates development and simplifies maintenance.

Performance is another strength. React Native bridges JavaScript with native modules, allowing apps to achieve near-native performance for most use cases. Combined with tools like Expo, developers can quickly test, debug, and deploy apps without complicated setups.

Another key benefit is its strong developer community. With numerous libraries, tutorials, and open-source contributions, React Native provides a wealth of resources that make learning and problem-solving faster and easier.

React Native is ideal for startups, businesses, or individual developers looking to deliver high-quality mobile apps quickly. Its flexibility, efficiency, and robust ecosystem make it one of the most powerful tools for mobile development today.`,
    date: '09, 21, 2025',
    readTime: '117 read',
    category: 'Mobile Development',
    tags: ['React Native', 'Tailwind css', 'SQL'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SNP'
    }
  },
  
  
];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPostData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wide">Blog</span>
          <h1 className="mt-2 text-slate-900 dark:text-slate-100">Insights & Tutorials</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Practical guides, lessons learned, and deep dives into full-stack development, Power Platform, and technical leadership
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={15} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter size={18} className="text-slate-500 dark:text-slate-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        <br />
        <br />

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-950 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all cursor-pointer group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                  {post.category}
                </span>
                <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="flex items-center space-x-1 px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs"
                  >
                    <Tag size={10} />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs">
                    {post.author.initials}
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-900 dark:text-slate-100">{post.author.name}</div>
                    <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-xs">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No articles found. Try adjusting your search or filters.
            </p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-white mb-2">Stay Updated</h3>
          <p className="text-blue-100 mb-6">Get notified when I publish new articles on full-stack development and Power Platform</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
