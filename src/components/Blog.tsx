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
    title: 'Building Scalable Power Apps: Lessons from Production',
    excerpt: 'Key architectural decisions and best practices I learned while building enterprise Power Apps that serve 100+ users daily.',
    content: `
# Building Scalable Power Apps: Lessons from Production

After shipping multiple Power Apps to production, I've learned valuable lessons about building applications that scale. Here's what worked and what didn't.

## Architecture Decisions

When building the Staff Time & Approval system, we made several critical architectural choices:

### 1. Data Model Design
- Normalized database schema in Azure SQL
- Proper indexing on frequently queried fields
- Separate tables for audit logging

### 2. Performance Optimization
- Implemented delegation-friendly formulas
- Used collections strategically for small datasets
- Cached reference data in app OnStart

### 3. User Experience
- Progressive disclosure for complex forms
- Role-based UI elements
- Offline capability for essential features

## Common Pitfalls to Avoid

**Over-complicating the data model**: Start simple and iterate. Don't try to model every edge case upfront.

**Ignoring delegation**: Non-delegable queries will hit the 500/2000 record limit. Always check delegation warnings.

**Skipping error handling**: Production apps need robust error handling and user feedback.

## Best Practices

1. **Version Control**: Use solutions and ALM for version management
2. **Testing**: Build a test environment that mirrors production
3. **Documentation**: Document formulas and business logic inline
4. **Monitoring**: Set up Power BI dashboards to track usage and errors

## Results

By following these principles:
- App loads in under 2 seconds
- Supports 100+ concurrent users
- 99.9% uptime over 6 months
- Zero major bugs post-launch

## Conclusion

Building production-ready Power Apps requires careful planning, but the platform's rapid development capabilities make it worth the investment. Start with a solid architecture and iterate based on user feedback.
    `,
    date: '2024-10-15',
    readTime: '8 min read',
    category: 'Power Platform',
    tags: ['Power Apps', 'Azure', 'Architecture', 'Best Practices'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SP'
    }
  },
  {
    id: '2',
    title: 'Modern React Patterns for Enterprise Applications',
    excerpt: 'Exploring composition, custom hooks, and state management patterns that make React applications maintainable at scale.',
    content: `
# Modern React Patterns for Enterprise Applications

React has evolved significantly, and modern patterns can dramatically improve code quality and maintainability. Here are the patterns I use in production.

## Composition Over Inheritance

React's component model shines with composition. Here's a practical example:

\`\`\`tsx
// Bad: Inheritance-like pattern
function UserCard({ user, isAdmin }) {
  if (isAdmin) {
    return <AdminCard user={user} />;
  }
  return <RegularCard user={user} />;
}

// Good: Composition
function Card({ children, header, footer }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
\`\`\`

## Custom Hooks for Logic Reuse

Extract complex logic into custom hooks:

\`\`\`tsx
function useApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
}
\`\`\`

## Context for Theme and Auth

Use Context API for cross-cutting concerns like themes and authentication:

- Keeps props clean
- Avoids prop drilling
- Type-safe with TypeScript

## Performance Optimization

Key strategies:
- Memoize expensive calculations with \`useMemo\`
- Prevent re-renders with \`React.memo\` and \`useCallback\`
- Code-split with lazy loading
- Virtualize long lists

## State Management

Choose the right tool:
- **Local state**: useState for component-specific data
- **Context**: Cross-cutting concerns (theme, auth)
- **URL state**: Filters, pagination
- **Server state**: React Query or SWR

## Results

These patterns have helped me:
- Reduce bundle size by 40%
- Cut render times in half
- Improve code review speed
- Onboard new developers faster

## Conclusion

Modern React is all about composability, hooks, and choosing the right abstraction. Start simple and add complexity only when needed.
    `,
    date: '2024-10-01',
    readTime: '10 min read',
    category: 'Web Development',
    tags: ['React', 'TypeScript', 'Performance', 'Patterns'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SP'
    }
  },
  {
    id: '3',
    title: 'Automating Azure Deployments with GitHub Actions',
    excerpt: 'A complete guide to setting up CI/CD pipelines for Azure web apps, functions, and infrastructure as code.',
    content: `
# Automating Azure Deployments with GitHub Actions

Automating deployments reduces errors and speeds up delivery. Here's how I set up CI/CD for Azure projects using GitHub Actions.

## The Problem

Manual deployments are:
- Error-prone
- Time-consuming
- Hard to reproduce
- Lack audit trails

## The Solution: GitHub Actions

GitHub Actions provides free CI/CD for public repos and generous limits for private ones.

### Basic Workflow Structure

\`\`\`yaml
name: Deploy to Azure

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Azure
        uses: azure/webapps-deploy@v2
        with:
          app-name: my-app
          publish-profile: \${{ secrets.AZURE_PUBLISH_PROFILE }}
\`\`\`

## Advanced Patterns

### 1. Multi-Environment Deployments

Use separate workflows for dev, staging, and production:

\`\`\`yaml
on:
  push:
    branches:
      - main        # → production
      - develop     # → staging
      - feature/*   # → dev
\`\`\`

### 2. Infrastructure as Code

Deploy infrastructure with Bicep or Terraform:

\`\`\`yaml
- name: Deploy Infrastructure
  uses: azure/arm-deploy@v1
  with:
    resourceGroupName: my-rg
    template: ./infrastructure/main.bicep
\`\`\`

### 3. Automated Testing

Run tests before deployment:

\`\`\`yaml
- name: Run Tests
  run: |
    npm run test
    npm run lint
    npm run test:integration
\`\`\`

## Security Best Practices

1. **Use secrets for credentials**: Never commit credentials
2. **OIDC authentication**: Passwordless auth to Azure
3. **Least privilege**: Grant minimal permissions
4. **Audit logs**: Review deployment history

## Results

After implementing CI/CD:
- Deployment time: 30 min → 5 min
- Deployment errors: reduced by 90%
- Rollbacks: automated and fast
- Confidence: much higher!

## Common Gotchas

- **Secret management**: Rotate secrets regularly
- **Build caching**: Speed up builds with cache
- **Cost**: Monitor GitHub Actions usage
- **Debugging**: Use workflow logs effectively

## Conclusion

GitHub Actions + Azure = powerful automation. Start simple with basic deployments, then add testing, security scans, and multi-environment support.

## Resources

- [GitHub Actions docs](https://docs.github.com/actions)
- [Azure deployment actions](https://github.com/Azure/actions)
- My sample workflows on GitHub
    `,
    date: '2024-09-20',
    readTime: '12 min read',
    category: 'DevOps',
    tags: ['Azure', 'CI/CD', 'GitHub Actions', 'Automation'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SP'
    }
  },
  {
    id: '4',
    title: 'Power BI: From Data to Decisions in 30 Minutes',
    excerpt: 'How I build executive dashboards that drive action, not just display numbers.',
    content: `
# Power BI: From Data to Decisions in 30 Minutes

Good dashboards tell a story. Great dashboards drive decisions. Here's how I approach Power BI dashboard design.

## The Three-Layer Approach

### Layer 1: Executive Summary
- Key metrics at a glance
- Trend indicators (up/down)
- Alerts for anomalies

### Layer 2: Detailed Analysis
- Drill-through capabilities
- Time-series comparisons
- Segmentation views

### Layer 3: Data Explorer
- Filterable tables
- Export capabilities
- Audit trail

## Design Principles

**Clarity over complexity**: If it takes more than 30 seconds to understand, it's too complex.

**Mobile-first**: 60% of executives view dashboards on tablets. Design accordingly.

**Performance**: Reports should load in under 3 seconds. Use aggregations and DirectQuery wisely.

## Real Example: Operations Dashboard

Built for a manufacturing client:
- **Metric**: Production efficiency
- **Audience**: Plant managers
- **Update frequency**: Real-time

### Key Features
1. Heat map of production lines
2. Downtime alerts
3. Trend analysis vs. targets
4. Drill-through to individual machines

### Results
- Decision time: 2 hours → 15 minutes
- Downtime: reduced 30%
- ROI: 400% in first year

## Common Mistakes

1. **Too many visuals**: More ≠ better
2. **Wrong chart type**: Bar vs. line vs. table matters
3. **No context**: Show targets and benchmarks
4. **Poor color choices**: Use color purposefully

## My Template Approach

I maintain templates for:
- Sales dashboards
- Operations metrics
- Financial reporting
- Project tracking

Saves 80% of setup time and ensures consistency.

## Pro Tips

- **DAX optimization**: Use variables and iterator functions wisely
- **Incremental refresh**: For large datasets
- **Row-level security**: Essential for multi-tenant scenarios
- **Bookmarks**: Create guided tours of your data

## Conclusion

Power BI is powerful, but with great power comes great responsibility. Focus on answering "so what?" and your dashboards will drive real impact.
    `,
    date: '2024-09-05',
    readTime: '7 min read',
    category: 'Data & Analytics',
    tags: ['Power BI', 'Data Visualization', 'Analytics', 'Business Intelligence'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SP'
    }
  },
  {
    id: '5',
    title: 'Leading Technical Teams: Lessons from the Trenches',
    excerpt: 'What I learned leading cross-functional squads from failed sprints, successful launches, and everything in between.',
    content: `
# Leading Technical Teams: Lessons from the Trenches

Leading technical teams is part psychology, part process, and part knowing when to step back. Here are my hard-earned lessons.

## The Fundamentals

### 1. Clear Vision
Your team needs to know:
- **Why** we're building this
- **Who** it's for
- **What** success looks like

Without this, you get motion without progress.

### 2. Psychological Safety
Best ideas come when people feel safe to:
- Ask "dumb" questions
- Challenge assumptions
- Admit mistakes
- Propose wild ideas

### 3. Balanced Autonomy
Give ownership, but stay available:
- Define outcomes, not tasks
- Remove blockers quickly
- Trust, but verify
- Coach, don't micromanage

## Real Scenario: The Failed Sprint

**Context**: Q3 2024, 6-person team, major feature launch

**What went wrong**:
- Unclear requirements
- Too many concurrent priorities
- Poor estimation
- Zero buffer for unknowns

**The fallout**: 
- Burnout
- Missed deadline
- Frustrated stakeholders
- Team morale hit

**What I learned**:
1. **Say no more often**: Protect team capacity
2. **Build in slack**: 20% buffer for unknowns
3. **Daily standups matter**: Catch issues early
4. **Retrospectives**: Actually implement learnings

**The fix**:
- Reduced WIP to 2 major items
- Added refinement sessions
- Transparent roadmap sharing
- Weekly stakeholder updates

**Result**: Next sprint delivery rate: 95%

## Communication Patterns

### For Developers
- **Code reviews**: Praise publicly, critique privately
- **Pair programming**: Great for knowledge sharing
- **Technical debt**: Make it visible and prioritized

### For Stakeholders
- **Weekly updates**: Keep it brief and visual
- **Demo sessions**: Show, don't tell
- **Risk transparency**: Bad news early is good news

### For Product
- **Feasibility input**: Early and honest
- **Trade-off discussions**: Tech debt vs. features
- **Capacity planning**: Realistic timelines

## Mentoring Junior Developers

My approach:
1. **Pair on first task**: Show the ropes
2. **Gradually increase complexity**: Build confidence
3. **Code review as teaching**: Explain the "why"
4. **Celebrate wins**: Recognition matters
5. **Career conversations**: Quarterly check-ins

## Mistakes I've Made

1. **Overcommitting**: Yes-ing everything = delivering nothing
2. **Skipping retrospectives**: You don't improve what you don't review
3. **Hero mode**: Doing instead of delegating stunts team growth
4. **Ignoring team dynamics**: Technical problems often have human roots

## What Good Looks Like

After 2+ years leading teams:
- **Velocity**: Predictable and sustainable
- **Quality**: <5% bug rate
- **Retention**: Zero turnover in 18 months
- **Autonomy**: Team runs smoothly when I'm away
- **Innovation**: Team proposes 60% of improvements

## Tools & Processes

- **Agile**: Scrum for predictability
- **Documentation**: Confluence + Mermaid diagrams
- **Metrics**: Cycle time, throughput, quality
- **1-on-1s**: Bi-weekly, their agenda
- **Team building**: Monthly, non-work focused

## Conclusion

Leadership is a skill that improves with practice and reflection. Listen more than you speak, protect your team's focus, and celebrate wins together.

The best leaders create more leaders, not followers.
    `,
    date: '2024-08-15',
    readTime: '9 min read',
    category: 'Leadership',
    tags: ['Team Leadership', 'Agile', 'Management', 'Career'],
    author: {
      name: 'Suffo Nzogang Patrice',
      initials: 'SP'
    }
  }
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
