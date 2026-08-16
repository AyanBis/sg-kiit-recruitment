'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

export default function RecruitmentHero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 bg-gradient-to-b from-black via-background-dark to-black">
      <div className="max-w-6xl mx-auto w-full py-12 lg:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Recruitment Open Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-3 bg-primary-cyan/10 border border-primary-cyan/30 px-6 py-3 rounded-full"
          >
            <div className="w-3 h-3 bg-primary-cyan rounded-full animate-pulse"></div>
            <span className="text-primary-cyan font-inter font-semibold text-base lg:text-lg">
              RECRUITMENT OPEN
            </span>
          </motion.div>

          {/* Date Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <Calendar size={20} />
            <span className="font-inter font-medium text-lg">29th August 2026</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-sora text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Build Something{' '}
            <span className="text-primary-cyan">That Matters.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            Startup Grind KIIT is looking for students who want to build, lead, 
            create, and contribute to a growing community of founders, innovators, 
            creators, and problem solvers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-4"
          >
            <a
              href="https://forms.gle/3u4Kuog4NUVCny7y5"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-blue hover:bg-primary-cyan text-white px-10 py-5 rounded-xl font-inter font-bold text-lg transition-all duration-300 hover:shadow-cyan-glow-lg flex items-center justify-center gap-3"
            >
              Apply Now
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </a>

            <a
              href="https://chat.whatsapp.com/JwKKsnLqkRmIsfIDTS2Bft?s=cl&p=a&mlu=4"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-black px-10 py-5 rounded-xl font-inter font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Join WhatsApp Community
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
