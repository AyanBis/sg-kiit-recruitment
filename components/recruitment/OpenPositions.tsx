'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileText, 
  Code, 
  Handshake, 
  Megaphone, 
  Search, 
  Palette 
} from 'lucide-react';

export default function OpenPositions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const positions = [
    {
      icon: FileText,
      title: 'Content Writing & Content Creator',
      description: 'Create stories, posts, campaigns and written content that communicate SG KIIT\'s work, events and community.',
      goodFor: [
        'Writing',
        'Storytelling',
        'Social media content',
        'Communication',
        'Creative thinking'
      ]
    },
    {
      icon: Code,
      title: 'Tech',
      description: 'Help build and improve the digital and technical initiatives that support SG KIIT\'s community and events.',
      goodFor: [
        'Technology',
        'Development',
        'Problem solving',
        'Building digital experiences',
        'Technical experimentation'
      ]
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Help SG KIIT build meaningful relationships with founders, organizations, communities and potential collaborators.',
      goodFor: [
        'Communication',
        'Networking',
        'Relationship building',
        'Outreach',
        'Business development'
      ]
    },
    {
      icon: Megaphone,
      title: 'Marketing',
      description: 'Help grow SG KIIT\'s presence through campaigns, outreach, community engagement and creative marketing initiatives.',
      goodFor: [
        'Marketing',
        'Growth',
        'Social media',
        'Campaigns',
        'Audience engagement'
      ]
    },
    {
      icon: Search,
      title: 'Research',
      description: 'Explore startups, technology, markets, founders and emerging ideas to support SG KIIT\'s initiatives and conversations.',
      goodFor: [
        'Research',
        'Startups',
        'Technology',
        'Business',
        'Analysis',
        'Curiosity-driven exploration'
      ]
    },
    {
      icon: Palette,
      title: 'Graphic Design & Video Editor',
      description: 'Create visual content that brings SG KIIT\'s stories, events and ideas to life.',
      goodFor: [
        'Graphic design',
        'Video editing',
        'Visual storytelling',
        'Branding',
        'Creative production'
      ]
    }
  ];

  return (
    <section id="positions" ref={ref} className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-white mb-6">
            Open Positions
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Find where your skills, curiosity and ambition can make an impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background-secondary p-8 rounded-premium-lg border border-primary-cyan/20 hover:shadow-cyan-glow hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className="bg-primary-cyan/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-cyan/20 transition-colors">
                <position.icon className="text-primary-cyan" size={28} />
              </div>

              {/* Title */}
              <h3 className="font-sora text-xl font-semibold text-white mb-4 leading-tight">
                {position.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {position.description}
              </p>

              {/* Good For */}
              <div className="mt-auto">
                <p className="text-primary-cyan text-sm font-semibold mb-3">Good for students interested in:</p>
                <div className="flex flex-wrap gap-2">
                  {position.goodFor.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-primary-cyan/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-gray-400 text-lg leading-relaxed">
            No prior startup experience is required. Curiosity, initiative and willingness to learn matter more than a perfect resume.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
