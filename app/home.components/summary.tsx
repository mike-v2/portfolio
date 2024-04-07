'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Summary() {
  const containerRef = useRef<any>(null);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);

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
      }
    };

    handleTransform();

    window.addEventListener('scroll', handleTransform);

    return () => {
      window.removeEventListener('scroll', handleTransform);
    };
  }, []);

  function lerp(start: number, end: number, t: number) {
    return start * (1 - t) + end * t;
  }

  function inverseLerp(start: number, end: number, value: number) {
    return (value - start) / (end - start);
  }

  return (
    <section
      ref={containerRef}
      className='relative h-[155rem] py-40 tracking-wide'
    >
      <div className='double-gradient absolute inset-0'></div>

      <div className='sticky top-12 -z-10 h-96 text-center text-9xl font-semibold tracking-widest text-primary'>
        <div
          style={{
            transform: `translateX(${position1}vw)`,
          }}
          className='absolute inset-0'
        >
          Agile
        </div>
        <div
          style={{
            transform: `translateX(${position2}vw)`,
          }}
          className='absolute inset-0 top-32'
        >
          Creative
        </div>
        <div
          style={{
            transform: `translateX(${position3}vw)`,
          }}
          className='absolute inset-0 top-64'
        >
          Team Player
        </div>
      </div>
      <div className='mx-auto mt-48 flex max-w-5xl items-center justify-between'>
        <div className='w-96'>
          <Image
            src='/images/summary-bridge.jpg'
            alt='Image of bridging old and new technologies'
            width={0}
            height={0}
            sizes='100vw'
            className='h-auto w-full rounded-xl'
          />
          <p>
            {`Passionate Full-Stack Developer adept at harnessing the latest in web
        technologies and AI to craft seamless, user-centric digital experiences.`}
          </p>
        </div>
        <div className='w-96'>
          <Image
            src='/images/summary-hands.jpg'
            alt='Image of old and new technologies represented by two hands'
            width={0}
            height={0}
            sizes='100vw'
            className='h-auto w-full rounded-xl'
          />
          <p>
            {`With experience creating apps in React, Next.js, and Node.js, I'm
        dedicated to evolving with the tech landscape to build the future of
        interactive applications.`}
          </p>
        </div>
      </div>
      <div className='mx-auto mt-48 w-[30rem]'>
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
