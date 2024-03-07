'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
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
        className={`duration-250 h-auto transition-transform dark:invert ${
          isLogoHovered ? '-translate-x-1' : ''
        }`}
        width={15}
        height={60}
        alt='logo part'
      />
      <Image
        src='/images/m-inside.svg'
        className={`h-auto transition dark:invert ${
          isLogoHovered ? 'filter-green-400 translate-y-1 scale-150' : ''
        }`}
        width={25}
        height={60}
        alt='logo part'
      />
      <Image
        src='/images/m-outside.svg'
        className={`duration-250 h-auto rotate-180 transition-transform dark:invert ${
          isLogoHovered ? 'translate-x-1' : ''
        }`}
        width={15}
        height={60}
        alt='logo part'
      />
    </Link>
  );
}
