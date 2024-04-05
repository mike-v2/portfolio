'use client';

import { useEffect, useRef, useState } from 'react';

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
      className='flex w-full flex-col items-center justify-center gap-y-4 text-3xl font-bold md:text-9xl'
    >
      <div className='relative mt-8 h-12 w-full overflow-y-hidden whitespace-nowrap md:h-36'>
        <h1
          style={{
            transform: `translateY(${inverseLerp(0, 0.5, (startPosition - position) / startPosition) * 100}%)`,
          }}
          className='h-full w-full bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
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
      <div className='relative h-12 w-full overflow-y-hidden md:h-36'>
        <h1
          style={{
            transform: `translateY(${lerp(0.0, 1.75, (startPosition - position) / startPosition) * 100}%)`,
          }}
          className='h-full w-full bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
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

function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}

function inverseLerp(start: number, end: number, value: number) {
  return (value - start) / (end - start);
}