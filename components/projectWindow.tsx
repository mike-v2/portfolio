'use client';

import Image from 'next/image';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProjectWindow({ project }: { project: ProjectData }) {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 0.7]);

  return (
    <div ref={containerRef} className='sticky top-56 mx-auto w-full max-w-5xl'>
      <motion.div style={{ scale }}>
        <Image
          src={project.imagePath}
          width={0}
          height={0}
          sizes='100vw'
          className='h-[20rem] w-full rounded-3xl object-cover'
          alt={`Image representing the project, ${project.title}`}
        />
      </motion.div>
    </div>
  );
}
