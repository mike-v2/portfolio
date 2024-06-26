'use client';

import { useEffect, useRef, useState } from 'react';

import { lerp, inverseLerp } from '@/utils/math';

export default function SplashText() {
  const containerRef = useRef<any>(null);

  const [startPosition, setStartPosition] = useState(0);
  const [position, setPosition] = useState(1);

  useEffect(() => {
    const handleTransform = () => {
      if (containerRef.current) {
        const { top, bottom, height } =
          containerRef.current.getBoundingClientRect();

        const middleOfElement = top + height / 2;
        const bottomOfView = window.innerHeight;
        const topOfView = 0;
        const position =
          (middleOfElement - topOfView) / (bottomOfView - topOfView);
        const clampedPosition = Math.min(Math.max(position, 0), 1);
        setPosition(clampedPosition);

        const scrollTop = document.documentElement.scrollTop;
        const absPos = middleOfElement + scrollTop;
        const startPos = absPos / window.innerHeight;
        setStartPosition(startPos);
      }
    };

    handleTransform();

    window.addEventListener('resize', handleTransform);
    window.addEventListener('scroll', handleTransform);

    return () => {
      window.removeEventListener('scroll', handleTransform);
      window.removeEventListener('resize', handleTransform);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        fontSize: 'clamp(3rem,12vw,10rem)',
      }}
      className='flex w-full flex-col items-center justify-center font-bold'
    >
      <div className='relative w-full overflow-y-hidden whitespace-nowrap'>
        <h1
          style={{
            transform: `translateY(${inverseLerp(0, 0.5, (startPosition - position) / startPosition) * 100}%)`,
          }}
          className='bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
        >
          Full Stack
        </h1>
        <h1
          style={{
            transform: `translateY(-${inverseLerp(0.5, 0.0, (startPosition - position) / startPosition) * 100}%)`,
          }}
          className='absolute inset-0 bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
        >
          Michael
        </h1>
      </div>
      <div className='relative w-full overflow-y-hidden'>
        <h1
          style={{
            transform: `translateY(${lerp(0.0, 1.75, (startPosition - position) / startPosition) * 100}%)`,
          }}
          className='bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
        >
          Developer
        </h1>
        <h1
          style={{
            transform: `translateY(-${inverseLerp(0.5, 0.0, (startPosition - position) / startPosition) * 100}%)`,
          }}
          className='absolute inset-0 bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
        >
          McGuiness
        </h1>
      </div>
    </div>
  );
}
