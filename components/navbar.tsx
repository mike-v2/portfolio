'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { cn } from '@/utils/cn';

const links = [
  {
    name: 'HOME',
    href: '/',
  },
  {
    name: 'PROJECTS',
    href: '/projects',
  },
  {
    name: 'BLOG',
    href: '/blog',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul className='group fixed left-2 top-8 z-30 flex flex-col space-y-2'>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                'flex  items-center justify-center border border-primary bg-base-300 px-8 py-4 text-primary transition-all',
                scrolled && 'px-2 py-1',
                'group-hover:px-8 group-hover:py-4',
                'hover:text-base-100',
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
