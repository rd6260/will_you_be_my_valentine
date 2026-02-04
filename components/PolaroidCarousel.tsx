// components/PolaroidCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import Polaroid from '@/components/Polaroid';

interface PolaroidImage {
  url: string;
  caption: string;
}

interface PolaroidCarouselProps {
  images: PolaroidImage[];
  autoPlayInterval?: number;
  isActive?: boolean;
}

export default function PolaroidCarousel({ 
  images, 
  autoPlayInterval = 3000,
  isActive = true
}: PolaroidCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, isActive]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[280px] h-[320px]">
        {/* Polaroid Cards */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                transition-all duration-700 ease-in-out
                ${index === currentIndex 
                  ? 'opacity-100 scale-100 z-30' 
                  : index === (currentIndex - 1 + images.length) % images.length
                  ? 'opacity-0 -translate-x-full scale-95 z-10'
                  : 'opacity-0 translate-x-full scale-95 z-10'
                }
              `}
            >
              <Polaroid
                imageUrl={image.url}
                caption={image.caption}
                enableHover={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      {/*
      <div className="flex gap-2 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      */}
    </div>
  );
}
