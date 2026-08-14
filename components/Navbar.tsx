'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageFallback from './ImageFallback';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Events', href: '#events' },
    { name: 'Why Join', href: '#why-join' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-primary-cyan/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center relative h-12">
            <ImageFallback
              src="/images/brand/sg-kiit-logo.png"
              alt="Startup Grind KIIT"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
              fallbackType="logo"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white/90 hover:text-primary-cyan transition-colors font-inter font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://forms.gle/3u4Kuog4NUVCny7y5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-blue hover:bg-primary-cyan text-white px-6 py-2.5 rounded-lg font-inter font-semibold transition-all duration-300"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-primary-cyan/20"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary-cyan transition-colors font-inter font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://forms.gle/3u4Kuog4NUVCny7y5"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block bg-primary-blue hover:bg-primary-cyan text-white px-6 py-3 rounded-lg font-inter font-semibold text-center transition-all"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
