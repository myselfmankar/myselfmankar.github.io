import { motion } from 'framer-motion';
import { ExternalLink, PenLine } from 'lucide-react';
import { TerminalHeader } from '../components/TerminalHeader';

const articles = [
  {
    title: 'Data Wrangling with Linux Commands',
    description: 'A practical reference for working with logs and CSV data from the command line.',
    topic: 'Linux · CLI',
    status: 'Planned',
    url: '',
  },
  {
    title: 'Lowest Common Ancestor in Trees and BSTs',
    description: 'A focused algorithm reference for LCA queries in binary trees and binary search trees.',
    topic: 'DSA · Trees',
    status: 'Planned',
    url: '',
  },
  {
    title: 'Networking Revision Notes',
    description: 'A compact collection of networking concepts and troubleshooting notes.',
    topic: 'Networking · Systems',
    status: 'Planned',
    url: '',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="cat engineering-notes.txt"
        description="Technical references on Linux, algorithms, and networking"
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <PenLine size={24} className="text-primary-500" />
              <h1 className="font-mono text-3xl md:text-4xl font-bold text-primary-500">
                Technical Notes
              </h1>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-2xl">
              Short, practical references on topics I've studied and revisited. Links will be added as each article is published.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {articles.map((article) => (
              <article key={article.title} className="bg-bg-surface border border-neutral-700 rounded-xl p-6 flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-mono text-xs text-accent-500">{article.topic}</span>
                  <span className="text-xs text-neutral-500 border border-neutral-700 rounded px-2 py-1">{article.status}</span>
                </div>
                <h2 className="font-mono text-xl font-semibold text-neutral-100 mb-3">{article.title}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{article.description}</p>
                <div className="mt-auto pt-2">
                  {article.url ? (
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium">
                      Read on Medium <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-sm text-neutral-500">Medium link will be added when published</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
