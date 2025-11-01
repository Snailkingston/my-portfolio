import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    author: {
      name: string;
      initials: string;
    };
  };
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </motion.button>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Category */}
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white">
                {post.author.initials}
              </div>
              <div>
                <div className="text-slate-900 dark:text-slate-100">{post.author.name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Author</div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center space-x-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm"
              >
                <Tag size={12} />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-3 pt-6 border-t border-slate-200 dark:border-slate-700">
            <span className="text-slate-600 dark:text-slate-400 text-sm flex items-center space-x-2">
              <Share2 size={16} />
              <span>Share:</span>
            </span>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all"
              aria-label="Share on Twitter"
            >
              <Twitter size={18} />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={18} />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all"
              aria-label="Share on Facebook"
            >
              <Facebook size={18} />
            </button>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate dark:prose-invert max-w-none
            prose-headings:text-slate-900 dark:prose-headings:text-slate-100
            prose-p:text-slate-600 dark:prose-p:text-slate-300
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-strong:text-slate-900 dark:prose-strong:text-slate-100
            prose-code:text-blue-600 dark:prose-code:text-blue-400
            prose-code:bg-slate-100 dark:prose-code:bg-slate-800
            prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950
            prose-pre:border prose-pre:border-slate-700
            prose-li:text-slate-600 dark:prose-li:text-slate-300
            prose-blockquote:border-blue-600 dark:prose-blockquote:border-blue-400
            prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]} // Remove this line if you don’t want HTML rendering
          >
            {post.content}
          </ReactMarkdown>
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-950 rounded-xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <span className="text-xl">{post.author.initials}</span>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-2">About {post.author.name}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Full-Stack Developer & Microsoft Power Platform Specialist. Building production-ready applications
                that deliver measurable impact. Passionate about mentoring, open source, and sharing knowledge.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/Snailkingston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                >
                  GitHub
                </a>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <a
                  href="https://www.linkedin.com/in/suffo-nzogang-patrice-43ba0628b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                >
                  LinkedIn
                </a>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <a
                  href="mailto:patrice_nzogang@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Blog CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            <ArrowLeft size={18} />
            <span>Back to All Articles</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
