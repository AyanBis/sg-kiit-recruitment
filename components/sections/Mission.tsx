'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart } from 'lucide-react';

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    'Give First',
    'Learn Together',
    'Help Others',
    'Create Impact',
    'Build Meaningful Connections'
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 lg:p-12 rounded-premium-lg border-t-4 border-primary-cyan hover:shadow-cyan-glow transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-primary-cyan" size={32} />
              <h2 className="font-sora text-3xl lg:text-4xl font-bold text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-light-text text-lg leading-relaxed">
              To help students build confidence, gain exposure and grow through
              entrepreneurship, technology, leadership and community-driven
              experiences.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 lg:p-12 rounded-premium-lg border-t-4 border-primary-cyan hover:shadow-cyan-glow transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-primary-cyan" size={32} />
              <h2 className="font-sora text-3xl lg:text-4xl font-bold text-white">
                Our Values
              </h2>
            </div>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <motion.li
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-light-text text-lg"
                >
                  <div className="w-2 h-2 bg-primary-cyan rounded-full"></div>
                  {value}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
