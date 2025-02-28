'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/utils/cn';

import { ProjectData } from '@/types/project';

export default function ProjectPageMenu({
  items,
  bgColor,
}: {
  items: ProjectData[];
  bgColor: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav aria-label='Projects List'>
      <ol className='flex w-full flex-col divide-y-2 divide-teal-600'>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              'group relative h-96 text-primary transition-colors duration-500',
              hoveredIndex !== index &&
                hoveredIndex !== null &&
                'text-primary/40',
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => hoveredIndex === index && setHoveredIndex(null)}
          >
            <Link href={`/projects/${item.id}`}>
              <article className='flex h-full flex-col items-center justify-evenly p-2 md:flex-row'>
                {/* Left side (text) */}
                <section className='flex items-center  gap-6 md:w-[30rem]'>
                  <div
                    className='text-2xl font-thin'
                    aria-hidden='true'
                  >{`0${index + 1}.`}</div>
                  <header className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-thin'>{item.title}</h2>
                    <p className='font-sans'>{item.subtitle}</p>
                  </header>
                </section>

                {/* Right side (image) */}
                <figure className='flex h-full justify-center'>
                  <figcaption className='sr-only'>{item.title}</figcaption>
                  <div className='relative aspect-square h-full w-auto lg:aspect-video'>
                    <Image
                      src={item.imagePath}
                      alt={item.title}
                      fill
                      className='object-contain p-8 duration-[2000ms] group-hover:scale-110'
                    />

                    {/* Animated reveal */}
                    <div
                      className={cn(
                        'absolute inset-0 z-10 h-full w-full origin-top duration-700 group-hover:scale-y-0',
                        bgColor,
                      )}
                      aria-hidden='true'
                    />
                  </div>
                </figure>
              </article>

              {/* Animated bottom border */}
              <div className='absolute bottom-0 right-0 h-0.5 w-full origin-right scale-x-0 bg-primary duration-500 group-hover:scale-x-100' />
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
