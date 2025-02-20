'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/utils/cn';

const items = [
  {
    title: 'Recreating React',
    subtitle: 'subtitle subtitle subtitle subtitle subtitle subtitle',
    imagePath: '/images/recreating-react-logo.png',
    href: '',
  },
  {
    title: 'Recreating React',
    subtitle:
      'subtitle subtitle subtitle subtitle subtitle subtitlesubtitle subtitle subtitle subtitle subtitle subtitlesubtitle subtitle subtitle subtitle subtitle subtitle',
    imagePath: '/images/recreating-react-logo.png',
    href: '',
  },
];

export default function HoverUnderlineMenu({ bgColor }: { bgColor: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`flex w-full flex-col divide-y-2 divide-teal-600`}>
      {items.map((item, index) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            'group relative h-96 text-primary transition-colors duration-500',
            hoveredIndex !== index &&
              hoveredIndex !== null &&
              'text-primary/40',
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => hoveredIndex === index && setHoveredIndex(null)}
        >
          <div className='flex h-full flex-col items-center justify-evenly p-2 md:flex-row'>
            {/* Left side (text) */}
            <div className='flex items-center  gap-6 md:w-[30rem]'>
              <div className='text-2xl font-thin'>{`0${index + 1}.`}</div>
              <div className='flex flex-col gap-2'>
                <div className='text-4xl font-thin'>{item.title}</div>
                <div className='font-sans'>{item.subtitle}</div>
              </div>
            </div>

            {/* Right side (image) */}
            <div className='flex h-full justify-center'>
              <div className='relative aspect-square h-full w-auto'>
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className='object-cover p-8 duration-[2000ms] group-hover:scale-110'
                />

                {/* Animated reveal */}
                <div
                  className={cn(
                    'absolute inset-0 z-10 h-full w-full origin-top duration-700 group-hover:scale-y-0',
                    bgColor,
                  )}
                />
              </div>
            </div>
          </div>

          {/* Animated bottom border */}
          <div className='absolute bottom-0 right-0 h-0.5 w-full origin-right scale-x-0 bg-primary duration-500 group-hover:scale-x-100' />
        </Link>
      ))}
    </div>
  );
}
