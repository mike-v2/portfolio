'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Theme } from '@/types/theme.enum';

export default function Logo({ theme }: { theme: Theme }) {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <Link
      href='/'
      className='absolute left-1/2 top-1 flex h-14 w-14 -translate-x-1/2 transform'
      onMouseEnter={(e) => setIsLogoHovered(true)}
      onMouseLeave={(e) => setIsLogoHovered(false)}
    >
      <Image
        src='/images/m-outside.svg'
        className={`duration-250 h-auto w-4 transition-transform ${theme === Theme.Dark ? 'invert' : ''} ${
          isLogoHovered ? '-translate-x-1' : ''
        }`}
        width={0}
        height={0}
        sizes='100vw'
        alt='logo part'
      />
      <Image
        src='/images/m-inside.svg'
        className={`h-auto w-6 transition ${theme === Theme.Dark ? 'invert' : ''} ${
          isLogoHovered ? 'filter-green-400 translate-y-1 scale-150' : ''
        }`}
        width={0}
        height={0}
        sizes='100vw'
        alt='logo part'
      />
      <Image
        src='/images/m-outside.svg'
        className={`duration-250 h-auto w-4 rotate-180 transition-transform ${theme === Theme.Dark ? 'invert' : ''} ${
          isLogoHovered ? 'translate-x-1' : ''
        }`}
        width={0}
        height={0}
        sizes='100vw'
        alt='logo part'
      />
    </Link>
  );
}
