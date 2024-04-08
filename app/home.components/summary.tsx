'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Catamaran } from 'next/font/google';

import { inverseLerp, inverseLerpClamped, lerp } from '@/utils/math';

const catamaran = Catamaran({ subsets: ['latin'] });

export default function Summary() {
  const containerRef = useRef<any>(null);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const handleTransform = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();

        const frac = inverseLerp(800, -height, top);
        const pos1 = lerp(-7, 3, frac);
        const pos2 = lerp(50, -25, frac);
        const pos3 = lerp(-25, 9, frac);

        setPosition1(pos1);
        setPosition2(pos2);
        setPosition3(pos3);

        const opacityFrac =
          top > -height / 2
            ? 1 - inverseLerpClamped(-400, -600, top)
            : inverseLerpClamped(-height + 900, -height + 700, top);
        const opac = Math.round(lerp(0.1, 1, opacityFrac) * 100);

        setOpacity(opac);
      }
    };

    handleTransform();

    window.addEventListener('scroll', handleTransform);

    return () => {
      window.removeEventListener('scroll', handleTransform);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className='relative h-[125rem] py-20 tracking-wide md:h-[160rem]'
    >
      <div className='summary-gradient absolute inset-0 -z-20 bg-gray-800'></div>

      <div
        style={{
          opacity: `${opacity}%`,
        }}
        className='sticky top-12 -z-10 h-60 overflow-x-hidden text-center text-6xl font-bold tracking-widest text-primary md:h-[29rem] md:text-9xl'
      >
        <div
          style={{
            transform: `translateX(${position1}vw)`,
          }}
          className='absolute inset-0 transition-all duration-1000 ease-out'
        >
          Agile
        </div>
        <div
          style={{
            transform: `translateX(${position2}vw)`,
          }}
          className='absolute inset-0 top-20 whitespace-nowrap transition-all duration-1000 ease-out md:top-40'
        >
          Team Player
        </div>
        <div
          style={{
            transform: `translateX(${position3}vw)`,
          }}
          className='absolute inset-0 top-40 transition-all duration-1000 ease-out md:top-80'
        >
          Creating
        </div>
      </div>
      <div
        className={`${catamaran.className} mx-auto mt-24 flex max-w-5xl flex-col items-center justify-between gap-8 text-base-100 md:mt-48 md:flex-row`}
      >
        <div className='w-72 pl-12 md:w-96'>
          <Image
            src='/images/summary-bridge.jpg'
            alt='Image of bridging old and new technologies'
            width={0}
            height={0}
            sizes='100vw'
            className='h-auto w-full rounded-xl'
          />
          <p className='pt-10 text-4xl md:text-6xl'>{`OLD + NEW`}</p>
        </div>
        <div className='w-60 pr-4 md:w-96'>
          <Image
            src='/images/summary-hands.jpg'
            alt='Image of old and new technologies represented by two hands'
            width={0}
            height={0}
            sizes='100vw'
            className='h-auto w-full rounded-xl'
          />
          <p className='pt-6 text-xl'>
            {`Combining a mastery of established tools like React with a thirst for the latest and greatest, including AI.`}
          </p>
        </div>
      </div>
      <div className='mx-auto mt-48 w-full max-w-[30rem]'>
        <Image
          src='/images/summary-tree.jpg'
          alt='Image of old and new technologies represented by a tree'
          width={0}
          height={0}
          sizes='100vw'
          className='h-auto w-full rounded-xl'
        />
      </div>
    </section>
  );
}
