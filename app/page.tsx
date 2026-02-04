'use client';
import { useState, useEffect } from 'react';
import Flower02 from '@/components/Flower02';
import PolaroidCarousel from '@/components/PolaroidCarousel';

export default function Home() {
  const [showCarousel, setShowCarousel] = useState(false);

  const polaroidImages = [
    {
      url: 'https://i.pinimg.com/736x/e7/d4/d2/e7d4d2794a4710cc8f6215ffe5953b5d.jpg',
      caption: 'the day i gave you flowers'
    },
    {
      url: 'https://i.pinimg.com/736x/ec/a5/54/eca554c0182dfd3e67e42c22bdaff1fa.jpg',
      caption: 'we are so silly'
    },
    {
      url: 'https://i.pinimg.com/736x/43/99/19/439919a35cfd73ff0486205614b315ec.jpg',
      caption: 'you are my favorite view'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Flower Background - Full screen */}
      <div className="absolute inset-0 z-0">
        <Flower02 />
      </div>

      {/* Carousel Container */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-10">
        <div 
          className={`
            transition-opacity duration-[2000ms] ease-in-out
            ${showCarousel ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <PolaroidCarousel 
            images={polaroidImages} 
            autoPlayInterval={3000}
            isActive={showCarousel}
          />
        </div>
      </div>
    </div>
  );
}
