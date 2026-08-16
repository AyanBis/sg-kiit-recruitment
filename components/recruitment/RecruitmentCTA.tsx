'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function RecruitmentCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black via-background-dark to-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sora text-4xl lg:text-6xl font-bold text-white mb-6">
            Your Next Opportunity{' '}
            <span className="text-primary-cyan">Starts Here.</span>
          </h2>
          <p className="text-gray-300 text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
            Be part of a community that values curiosity, initiative and the willingness to create impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="https://forms.gle/3u4Kuog4NUVCny7y5"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-blue hover:bg-primary-cyan text-white px-10 py-5 rounded-xl font-inter font-bold text-lg transition-all duration-300 hover:shadow-cyan-glow-lg flex items-center justify-center gap-3"
            >
              Apply via Google Form
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="https://chat.whatsapp.com/JwKKsnLqkRmIsfIDTS2Bft?s=cl&p=a&mlu=4"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-black px-10 py-5 rounded-xl font-inter font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Join WhatsApp Community
            </motion.a>
          </div>

          {/* Additional Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-12 border-t border-primary-cyan/20"
          >
            <p className="text-gray-400 text-base">
              Questions? Reach out to us at{' '}
              <a 
                href="mailto:kiit.startupgrind@gmail.com" 
                className="text-primary-cyan hover:text-primary-cyan/80 transition-colors font-medium"
              >
                kiit.startupgrind@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
