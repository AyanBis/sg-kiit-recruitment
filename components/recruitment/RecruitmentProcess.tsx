'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, FileText, Users, Rocket } from 'lucide-react';

export default function RecruitmentProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: Eye,
      title: 'Discover',
      description: 'Learn about SG KIIT and the available roles.'
    },
    {
      number: '02',
      icon: FileText,
      title: 'Apply',
      description: 'Submit your application through the official Google Form.'
    },
    {
      number: '03',
      icon: Users,
      title: 'Connect',
      description: 'Join the SG KIIT WhatsApp community.'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Contribute',
      description: 'Become part of the community and start building.'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-white mb-6">
            How to Join
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            A simple process to become part of the Startup Grind KIIT community.
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary-cyan/30"></div>
                )}

                <div className="relative z-10">
                  {/* Icon Circle */}
                  <div className="bg-card border-2 border-primary-cyan/30 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:border-primary-cyan transition-colors">
                    <step.icon className="text-primary-cyan" size={32} />
                  </div>

                  {/* Number */}
                  <div className="text-primary-cyan/50 font-sora text-5xl font-bold mb-4 text-center">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="font-sora text-2xl font-semibold text-white mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative"
            >
              <div className="flex gap-6">
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="bg-card border-2 border-primary-cyan/30 w-16 h-16 rounded-full flex items-center justify-center">
                    <step.icon className="text-primary-cyan" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="text-primary-cyan/50 font-sora text-3xl font-bold mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-sora text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-12 bg-primary-cyan/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
