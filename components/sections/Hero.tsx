'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Lightbulb, Rocket, Sparkles } from 'lucide-react';
import ImageFallback from '../ImageFallback';

export default function Hero() {
  const badges = [
    { icon: Users, text: 'Founder Talks' },
    { icon: Lightbulb, text: 'Workshops' },
    { icon: Rocket, text: 'Networking' },
    { icon: Sparkles, text: 'Innovation' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-primary-cyan font-inter font-medium text-sm lg:text-base px-4 py-2 border border-primary-cyan/30 rounded-full bg-primary-cyan/10">
                Startup Grind KIIT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-sora text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Build. Lead.{' '}
              <span className="text-primary-cyan">Create Impact.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg lg:text-xl leading-relaxed"
            >
              A student-driven startup community where founders, innovators,
              creators and builders come together to learn, collaborate and
              create opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://forms.gle/3u4Kuog4NUVCny7y5"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary-blue hover:bg-primary-cyan text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 hover:shadow-cyan-glow flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#events"
                className="group border-2 border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-black px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Explore Events
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-primary-cyan/20 shadow-cyan-glow-lg aspect-square">
              <ImageFallback
                src="/images/hero/sg-kiit-hero.jpg"
                alt="Startup Grind KIIT community"
                fill
                priority
                className="object-cover"
                fallbackType="hero"
              />
            </div>

            {/* Floating Badges */}
            {badges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                className={`absolute bg-background-secondary/90 backdrop-blur-sm border border-primary-cyan/30 px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 ${
                  index === 0 ? 'top-8 -left-4' :
                  index === 1 ? 'top-1/4 -right-4' :
                  index === 2 ? 'bottom-1/3 -left-4' :
                  'bottom-8 -right-4'
                }`}
              >
                <badge.icon size={18} className="text-primary-cyan" />
                <span className="text-white font-inter font-medium text-sm">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
