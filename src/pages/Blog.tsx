import { motion } from 'framer-motion';
import { PenLine } from 'lucide-react';
import { TerminalHeader } from '../components/TerminalHeader';

const Blog = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="cat blog.txt"
        description="Writing about systems, Linux, networking, and things I found hard to learn"
      />

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <PenLine size={28} className="text-primary-500" />
            </div>
            <h1 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Coming Soon
            </h1>
            <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto">
              I'm writing about systems, Linux internals, networking, and the problems I found hardest
              to learn — posted on Medium. Nothing's live yet, but it's on the way.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
