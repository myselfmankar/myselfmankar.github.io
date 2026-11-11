import { motion } from 'framer-motion';
import { ExternalLink, PenLine } from 'lucide-react';
import { TerminalHeader } from '../components/TerminalHeader';

const articles = [
  {
    title: 'Computer Networks (CNS): Complete Revision Notes for OSI, TCP/IP, Routing, Subnetting and Important Protocols',
    description:
      'Quick-revision notes covering the OSI model, routing protocols, IPv4 subnetting, TCP vs UDP, DNS, DHCP, ARP, NAT, and packet forwarding.',
    topic: 'Computer Networks · CNS',
    tags: ['OSI Model', 'Routing', 'Subnetting', 'TCP/IP'],
    coverMark: 'CNS',
    coverSubtitle: 'NETWORKING FUNDAMENTALS',
    status: 'Scheduled',
    url: 'https://medium.com/@pict.vaishnav/eebb4f1dee51',
  },
  {
    title: 'Data Wrangling with Linux Commands: From Raw Logs to Useful Insights',
    description:
      'A hands-on guide to analysing access logs with awk, sort, uniq, grep, and shell pipelines, with equivalent SQL queries.',
    topic: 'Linux · Data Wrangling',
    tags: ['awk', 'sort', 'uniq', 'grep'],
    coverMark: 'CLI',
    coverSubtitle: 'LINUX DATA WRANGLING',
    status: 'Published',
    url: 'https://medium.com/@pict.vaishnav/data-wrangling-with-linux-commands-from-raw-logs-to-useful-insights-d0168a2e087c',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="ls writing/"
        description="Technical articles and revision notes on systems, networking, and practical tooling"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <PenLine size={24} className="text-primary-500" />
              <h1 className="font-mono text-3xl md:text-4xl font-bold text-primary-500">
                Technical Writing
              </h1>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-2xl">
              Practical write-ups and quick-revision notes from topics I have studied, built with, and revisited.
            </p>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden group hover:border-primary-500/50 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-bg-elevated">
                  <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-bg-elevated via-bg-surface to-bg-elevated">
                    <div className="font-mono text-xs tracking-[0.2em] text-neutral-500">
                      VAISHNAV / TECHNICAL NOTES
                    </div>
                    <div>
                      <div className="font-mono text-5xl md:text-6xl font-bold text-primary-500/80 group-hover:text-primary-500 transition-colors">
                        {article.coverMark}
                      </div>
                      <div className="font-mono text-xs tracking-[0.18em] text-neutral-400 mt-2">
                        {article.coverSubtitle}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/70 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                        article.status === 'Published'
                          ? 'bg-green-500/20 text-green-500 border-green-500/30'
                          : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      {article.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <div className="font-mono text-xs text-accent-500">
                    {article.topic}
                  </div>

                  <h2 className="font-mono text-xl font-bold text-primary-500 group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-neutral-200 text-sm leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 mt-auto">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium transition-colors"
                    >
                      {article.status === 'Published' ? 'Read on Medium' : 'View scheduled article'}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
