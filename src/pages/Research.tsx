import { motion } from 'framer-motion';
import { ExternalLink, Github, GraduationCap } from 'lucide-react';
import { TerminalHeader } from '../components/TerminalHeader';
import { RESEARCH } from '../data/portfolio';

const Research = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="cat research.txt"
        description="Published research and papers"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {RESEARCH.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card hover:border-primary-500/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-primary-500" />
                </div>
                <div>
                  <h2 className="font-mono text-xl md:text-2xl font-bold text-primary-500 mb-1">
                    {paper.title}
                  </h2>
                  <p className="text-sm text-neutral-400">{paper.venue}</p>
                  <p className="text-sm text-neutral-400">{paper.authors}</p>
                </div>
              </div>

              <p className="text-neutral-200 leading-relaxed mb-6">{paper.abstract}</p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={paper.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition-all duration-200 font-semibold rounded-lg"
                >
                  <ExternalLink size={16} />
                  Read on IEEE Xplore
                </a>
                <a
                  href={paper.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 font-semibold rounded-lg"
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;
