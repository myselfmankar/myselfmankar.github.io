import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Calendar, MapPin, Code, Zap } from 'lucide-react';

export const About = () => {
const timeline = [
  {
    year: 'May 2026 - Aug 2026',
    title: 'Backend Engineering Intern',
    company: 'Golain',
    description:
      'Integrated a Go real-time-communication service with a React dashboard over REST APIs, giving operators live robot video, audio, telemetry, and control for remote fleet operation. Built a one-click Copy cURL feature so engineers could reproduce failing device requests directly in Postman.',
    icon: Code,
  },
  {
    year: 'Aug 2025 - May 2026',
    title: 'AI Software Developer Intern',
    company: 'ATG',
    description:
      'Sped up an AWS Lambda video-generation workflow by replacing sequential slide processing with concurrent processing. Automated generation of AI-based notes and Markdown-to-PDF conversion, turning a manual document workflow into a repeatable pipeline.',
    icon: Zap,
  },
  {
    year: '2023 - 2027',
    title: 'B.E. Computer Engineering',
    company: 'Pune Institute of Computer Technology',
    description:
      "Bachelor's degree with a focus on software engineering and distributed systems. CGPA 9.02/10.",
    icon: Calendar,
  },
];

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Design for Failure',
      description: 'Networks drop, processes crash, requests arrive out of order. Systems should expect it, not be surprised by it.',
    },
    {
      icon: Code,
      title: 'Simplicity Over Cleverness',
      description: 'The simplest design that handles the real failure modes beats a clever one that handles none of them.',
    },
    {
      icon: MapPin,
      title: 'Observability First',
      description: "If you can't see what a system is doing in production, you don't actually understand it.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background and technical philosophy"
      />

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <div className="font-mono text-lg mb-6">
                  <span className="text-accent-500">$</span>
                  <span className="text-primary-500"> cat</span>
                  <span className="text-neutral-400"> bio.txt</span>
                </div>
                <div className="space-y-4 text-neutral-200 leading-relaxed">
                  <Typewriter
                    text="Hello, I'm Vaishnav Mankar, and I build backend systems that stay reliable under real-world messiness."
                    delay={30}
                    className="text-primary-500 font-semibold block mb-4"
                  />
                  <p>
                    I'm a computer engineering student at PICT, graduating in 2027. My internships have
                    focused on backend systems that have to keep working under pressure — flaky networks,
                    concurrent requests, long-running processes that can't afford to lose state.
                  </p>
                  <p>
                    At Golain, I worked on live video/telemetry pipelines for remote robot control. At ATG,
                    I sped up an AI video-generation pipeline and automated a manual document workflow
                    end-to-end.
                  </p>
                  <p>
                    Outside of work, I build distributed systems projects for fun — an IoT backend that
                    processes real-time sensor data from industrial devices, and an AI shopping agent that
                    handles real payments safely with built-in spending limits.
                  </p>
                  <p className="text-primary-500 font-medium">
                    I'm looking for new-graduate Software Engineering, Backend, Cloud Infrastructure, and SRE roles where I can keep building and debugging real systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Graduating</span>
                    <span className="text-primary-500 font-mono">2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Internships</span>
                    <span className="text-primary-500 font-mono">Golain, ATG</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Languages</span>
                    <span className="text-primary-500 font-mono">Go, Python</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Published Paper</span>
                    <span className="text-primary-500 font-mono">IEEE, 2026</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
  'Distributed Systems',
  'Backend APIs',
  'Event-Driven Architecture',
  'Real-Time Data Pipelines',
  'Site Reliability'
].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Career Timeline
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              From coursework to internships — building backend systems that hold up under pressure
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center border-4 border-bg-page shadow-glow z-10">
                      <IconComponent size={16} className="text-bg-surface" />
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-bg-elevated border border-neutral-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors shadow-card">
                        <div className="font-mono text-accent-500 text-sm mb-2">{item.year}</div>
                        <h3 className="font-semibold text-xl text-neutral-200 mb-1">{item.title}</h3>
                        {item.company && (
  <div className="text-primary-500 font-medium mb-3">
    {item.company}
  </div>
)}
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Tech Philosophy
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Core principles that guide how I design and build backend systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent size={32} className="text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-200 mb-4">{point.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
