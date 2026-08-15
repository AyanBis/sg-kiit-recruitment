'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import ImageFallback from '../ImageFallback';

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const events = [
    {
      title: 'SELL IT — A Battle of Wits 2026',
      category: 'Competition',
      description: 'Flagship startup and innovation challenge featuring judges, pitch battles and winning teams.',
      image: '/images/events/sell-it-2026.jpg',
      highlightUrl: 'https://www.instagram.com/p/Dak19PkhJ0k/'
    },
    {
      title: 'IGNITE BOOTCAMP',
      category: 'Workshop',
      description: 'A learning experience designed to take participants from idea to execution.',
      image: '/images/events/ignite-bootcamp.jpg',
      highlightUrl: 'https://www.instagram.com/p/DVBglKsD8do/'
    },
    {
      title: 'Fireside Chat: From Curiosity to Commitment',
      category: 'Founder Talk',
      description: 'A conversation on what actually changes when you start building.',
      image: '/images/events/fireside-chat.jpg',
      highlightUrl: 'https://www.instagram.com/p/DTesmGADxC1/'
    },
    {
      title: 'AI Panel Discussion',
      category: 'Panel',
      description: 'Exploring how artificial intelligence is reshaping markets and work.',
      image: '/images/events/ai-panel.jpg',
      highlightUrl: 'https://www.instagram.com/p/DWGkYEDEotP/?img_index=1'
    }
  ];

  return (
    <section id="events" ref={ref} className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-white mb-6">
            Past Events
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background-secondary rounded-2xl overflow-hidden border border-primary-cyan/20 hover:shadow-cyan-glow hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Event Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-background-secondary to-primary-blue/20">
                <ImageFallback
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  fallbackType="event"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/80 text-primary-cyan text-xs font-semibold px-3 py-1.5 rounded-full border border-primary-cyan/30">
                    {event.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-sora text-lg font-semibold text-white leading-tight line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {event.description}
                </p>
                <a
                  href={event.highlightUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-cyan hover:text-primary-cyan/80 font-medium text-sm transition-colors group-hover:gap-3"
                >
                  View Highlights
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
