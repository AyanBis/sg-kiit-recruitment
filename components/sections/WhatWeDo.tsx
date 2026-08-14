'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Wrench, Users, Trophy, Handshake } from 'lucide-react';

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: MessageCircle,
      title: 'Founder Conversations',
      description: 'Direct conversations with entrepreneurs, builders and leaders about their journeys, decisions, failures and lessons.'
    },
    {
      icon: Wrench,
      title: 'Workshops & Bootcamps',
      description: 'Hands-on learning experiences designed to move participants from ideas to execution.'
    },
    {
      icon: Users,
      title: 'Networking & Community',
      description: 'Meet students, founders, mentors and professionals who are building, experimenting and learning.'
    },
    {
      icon: Trophy,
      title: 'Competitions & Challenges',
      description: 'Pitch battles, innovation challenges and experiences designed to test ideas and execution.'
    },
    {
      icon: Handshake,
      title: 'Collaborations',
      description: 'Work with other student communities and organizations to create larger impact.'
    }
  ];

  return (
    <section id="what-we-do" ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-background-dark mb-6">
            How do we create impact?
          </h2>
          <p className="text-background-dark/70 text-lg max-w-3xl mx-auto">
            Through meaningful experiences that go beyond traditional learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-8 rounded-premium-lg hover:shadow-cyan-glow hover:-translate-y-2 transition-all duration-300 group border border-primary-cyan/20"
            >
              <div className="bg-primary-cyan/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-cyan/20 transition-colors">
                <card.icon className="text-primary-cyan" size={28} />
              </div>
              <h3 className="font-sora text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-light-text leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
