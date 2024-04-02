'use client';

import { useEffect, useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function SplashText() {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const textMove1 = useTransform(scrollYProgress, [0.1, 0.4], [-200, 0]);
  const textMove2 = useTransform(scrollYProgress, [0.4, 0.2], [200, 0]);

  /* useEffect(() => {
    scrollYProgress.onChange((value) => {
      console.log('scrollYProgress:', value);
    });
  }, [scrollYProgress]); */

  return (
    <div
      ref={containerRef}
      className='flex w-full flex-col items-center justify-center gap-y-4 text-9xl font-bold'
    >
      <div className='relative mt-8 h-36 w-full overflow-y-hidden whitespace-nowrap'>
        <motion.h1
          style={{
            y: textMove1,
          }}
          className='h-full w-full bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
        >
          Full Stack
        </motion.h1>
        <motion.h1
          style={{
            y: textMove2,
          }}
          className='absolute inset-0 bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
        >
          Michael
        </motion.h1>
      </div>
      <div className='relative h-36 w-full overflow-y-hidden'>
        <motion.h1
          style={{
            y: textMove1,
          }}
          className='h-full w-full bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
        >
          Developer
        </motion.h1>
        <motion.h1
          style={{
            y: textMove2,
          }}
          className='absolute inset-0 bg-gradient-to-b from-primary to-slate-900 bg-clip-text text-center tracking-tight text-transparent'
        >
          McGuiness
        </motion.h1>
      </div>
    </div>
  );
}
