'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Hammer, Users } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: BookOpen,
      title: 'Learn from Founders',
      description: 'Gain perspective from entrepreneurs and builders who have experienced the realities of building.'
    },
    {
      icon: Hammer,
      title: 'Build Real Projects',
      description: 'Turn ideas into action through workshops, challenges, competitions and hands-on experiences.'
    },
    {
      icon: Users,
      title: 'Grow with a Community',
      description: 'Meet people who are curious, ambitious and willing to build alongside you.'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-background-dark mb-6">
            What is Startup Grind KIIT?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-background-dark/80 text-lg lg:text-xl leading-relaxed mb-6">
              Startup Grind KIIT is a student-led community at KIIT University for people who want to explore entrepreneurship, technology, leadership, creativity and innovation beyond the classroom.
            </p>
            <p className="text-background-dark/70 text-lg leading-relaxed">
              We bring students together with founders, builders, mentors and peers through conversations, workshops, competitions, collaborations and hands-on experiences.
            </p>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card p-6 rounded-premium border border-primary-cyan/20 hover:border-primary-cyan/40 hover:shadow-cyan-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-cyan/10 p-3 rounded-xl group-hover:bg-primary-cyan/20 transition-colors">
                    <card.icon className="text-primary-cyan" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sora text-xl font-semibold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-light-text">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
