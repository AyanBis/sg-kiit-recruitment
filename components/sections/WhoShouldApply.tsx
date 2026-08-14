'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhoShouldApply() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tags = [
    'Tech Enthusiasts',
    'Designers',
    'Marketers',
    'Organizers',
    'Researchers',
    'Creators',
    'Future Founders'
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-background-dark mb-12">
            Who Should Apply?
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card text-white px-6 py-3 rounded-full font-inter font-medium text-lg border border-primary-cyan/30 hover:border-primary-cyan hover:shadow-cyan-glow transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-background-dark/80 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            You don&apos;t need a startup, a perfect resume or years of experience.
            Curiosity, initiative and the willingness to learn matter more.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
