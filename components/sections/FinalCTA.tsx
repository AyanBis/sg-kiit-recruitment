'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 lg:px-12 bg-gradient-to-r from-primary-cyan/10 via-primary-blue/10 to-primary-cyan/10 border-y border-primary-cyan/20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sora text-3xl lg:text-5xl font-bold text-white mb-6">
            See what we&apos;re building
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
            Follow Startup Grind KIIT for events, founder conversations, community updates and startup stories.
          </p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="https://www.instagram.com/startupgrindkiit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-xl font-inter font-bold text-lg transition-all duration-300 hover:shadow-lg group"
          >
            Follow SG KIIT on Instagram
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
