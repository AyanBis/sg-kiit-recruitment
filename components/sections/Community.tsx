'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, TrendingDown, BookOpen, Users } from 'lucide-react';

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const insights = [
    { icon: FileText, title: 'The Guilt Economy' },
    { icon: TrendingDown, title: "Fall of BYJU'S" },
    { icon: BookOpen, title: 'Startup Lessons' },
    { icon: Users, title: 'Founder Insights' }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-white mb-6">
            Beyond Events
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            SG KIIT is not only about events. It also creates conversations around startups, technology, business, innovation, founder journeys and industry trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-8 rounded-2xl hover:shadow-cyan-glow hover:-translate-y-2 transition-all duration-300 group text-center border border-primary-cyan/20"
            >
              <div className="bg-primary-cyan/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-cyan/20 transition-colors">
                <insight.icon className="text-primary-cyan" size={28} />
              </div>
              <h3 className="font-sora text-base font-semibold text-white leading-snug">
                {insight.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="font-sora text-3xl lg:text-4xl font-bold text-white mb-6">
            See What We&apos;re Building
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Follow Startup Grind KIIT for events, founder conversations, community updates and startup stories.
          </p>
          <a
            href="https://www.instagram.com/startupgrindkiit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-blue hover:bg-primary-cyan text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 hover:shadow-cyan-glow"
          >
            Follow SG KIIT on Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
