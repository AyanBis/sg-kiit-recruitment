'use client';

import { AtSign, Send, Mail } from 'lucide-react';
import ImageFallback from './ImageFallback';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: AtSign, href: 'https://www.instagram.com/startupgrindkiit/', label: 'Instagram', name: 'Instagram' },
    { icon: Send, href: 'https://forms.gle/3u4Kuog4NUVCny7y5', label: 'Apply', name: 'Apply' },
    { icon: Mail, href: 'https://chat.whatsapp.com/JwKKsnLqkRmIsfIDTS2Bft?s=cl&p=a&mlu=4', label: 'WhatsApp', name: 'Join WhatsApp' }
  ];

  return (
    <footer className="bg-black border-t border-primary-cyan/10 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4 h-12">
              <ImageFallback
                src="/images/brand/sg-kiit-logo.png"
                alt="Startup Grind KIIT"
                width={180}
                height={50}
                className="h-12 w-auto"
                fallbackType="logo"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              A student-led community for builders, founders, creators and innovators at KIIT Bhubaneswar, India.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-white font-sora font-semibold mb-4">Connect</h3>
            <div className="flex gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.name}
                  className="text-gray-400 hover:text-primary-cyan transition-colors flex flex-col items-center gap-2 group"
                >
                  <link.icon size={24} />
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-cyan/10 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Startup Grind KIIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
