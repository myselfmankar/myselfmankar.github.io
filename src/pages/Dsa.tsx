import { motion } from 'framer-motion';
import { ExternalLink, Flame, Trophy } from 'lucide-react';
import { TerminalHeader } from '../components/TerminalHeader';
import { DSA } from '../data/portfolio';

const difficultyRows = [
  { label: 'Easy', color: 'text-green-500', ...DSA.easy },
  { label: 'Medium', color: 'text-yellow-500', ...DSA.medium },
  { label: 'Hard', color: 'text-red-500', ...DSA.hard },
];

const Dsa = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="cat dsa_stats.txt"
        description="Problem solving practice, tracked on NeetCode"
      />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="bg-bg-surface border border-neutral-700 rounded-xl p-6 text-center">
              <div className="font-mono text-3xl font-bold text-primary-500 mb-1">
                {DSA.totalSolved}
              </div>
              <div className="text-sm text-neutral-400">of {DSA.totalProblems} solved</div>
            </div>
            <div className="bg-bg-surface border border-neutral-700 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 font-mono text-3xl font-bold text-primary-500 mb-1">
                <Trophy size={22} />
                Top {DSA.topPercent}%
              </div>
              <div className="text-sm text-neutral-400">of NeetCode users</div>
            </div>
            <div className="bg-bg-surface border border-neutral-700 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 font-mono text-3xl font-bold text-primary-500 mb-1">
                <Flame size={22} />
                {DSA.currentStreak}
              </div>
              <div className="text-sm text-neutral-400">day streak</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 space-y-4"
          >
            {difficultyRows.map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className={`font-mono font-medium ${row.color}`}>{row.label}</span>
                  <span className="text-neutral-400 font-mono">
                    {row.solved} / {row.total}
                  </span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-primary-500"
                    style={{ width: `${(row.solved / row.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center space-y-3"
          >
            <p className="text-neutral-400 text-sm">Snapshot as of {DSA.asOf} — numbers keep moving.</p>
            <a
              href={DSA.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition-all duration-200 font-semibold rounded-lg"
            >
              <ExternalLink size={16} />
              View live profile on NeetCode
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dsa;
