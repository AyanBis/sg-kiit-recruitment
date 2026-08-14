'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fallbackType?: 'hero' | 'event' | 'logo';
}

export default function ImageFallback({
  src,
  alt,
  fill,
  width,
  height,
  priority,
  className = '',
  fallbackType = 'event'
}: ImageFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${fill ? 'absolute inset-0' : ''} ${className}`}>
        {fallbackType === 'hero' && (
          <div className="w-full h-full bg-gradient-to-br from-background-secondary via-primary-blue/20 to-primary-cyan/20 flex items-center justify-center">
            <div className="text-center text-primary-cyan p-8">
              <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              <p className="font-sora text-sm">Startup Grind KIIT</p>
            </div>
          </div>
        )}
        {fallbackType === 'event' && (
          <div className="w-full h-full bg-gradient-to-br from-background-secondary to-primary-blue/30 flex items-center justify-center">
            <div className="text-center text-primary-cyan p-6">
              <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-sora text-xs">Event Visual</p>
            </div>
          </div>
        )}
        {fallbackType === 'logo' && (
          <div className="flex items-center">
            <span className="font-sora text-xl font-bold text-white">Startup Grind KIIT</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      priority={priority}
      className={className}
      onError={() => setError(true)}
    />
  );
}
