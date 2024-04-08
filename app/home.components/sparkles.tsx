'use client';

import { useEffect, useState } from 'react';

import { SparklesCore } from '@/app/home.components/sparklesCore';

export default function Sparkles() {
  const [maskWidth, setMaskWidth] = useState(1000);
  const [maskHeight, setMaskHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      setMaskHeight(window.innerHeight * 1.1);
      setMaskWidth(window.innerWidth * 0.75);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='absolute inset-0'
      style={{
        maskImage: `radial-gradient(${maskWidth}px ${maskHeight}px at center,transparent 30%,white)`,
      }}
    >
      <SparklesCore
        background='transparent'
        minSize={0.4}
        maxSize={1}
        particleDensity={100}
        className='z-10 h-full w-full'
        particleColor='#34e7d7'
      />
    </div>
  );
}
