'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, Users, MessageSquare } from 'lucide-react';

export default function WhyJoin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Award,
      title: 'Leadership Opportunities',
      description: 'Take ownership of events, initiatives and projects that shape the community.'
    },
    {
      icon: Briefcase,
      title: 'Real-World Experience',
      description: 'Build practical skills through hands-on execution and collaboration.'
    },
    {
      icon: Users,
      title: 'Networking & Exposure',
      description: 'Connect with founders, mentors, professionals and ambitious peers.'
    },
    {
      icon: MessageSquare,
      title: 'Confidence & Communication',
      description: 'Learn to communicate ideas, take responsibility and navigate uncertainty.'
    }
  ];

  return (
    <section id="why-join" ref={ref} className="py-24 px-6 lg:px-12 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-white mb-8">
            Why Join Startup Grind KIIT?
          </h2>
          <p className="text-primary-cyan text-2xl lg:text-3xl font-sora font-medium italic max-w-3xl mx-auto">
            You don&apos;t have to build your dream alone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-10 rounded-premium-lg hover:shadow-cyan-glow transition-all duration-300 border border-primary-cyan/20 group"
            >
              <div className="bg-primary-cyan/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-cyan/20 transition-colors">
                <feature.icon className="text-primary-cyan" size={32} />
              </div>
              <h3 className="font-sora text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-light-text text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
