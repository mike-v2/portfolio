'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Theme } from '@/types/theme.enum';

const links = [
  {
    name: 'About Me',
    href: '/about',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function NavLinks({ theme }: { theme: Theme }) {
  return (
    <div className='flex justify-end'>
      <div className='dropdown-bottom dropdown-end dropdown mt-auto lg:hidden '>
        <label
          tabIndex={0}
          className={`btn m-1 h-12 w-12 p-2 ${theme === Theme.Dark ? 'border-white' : ''}`}
        >
          <Image
            src='/images/menu-icon.svg'
            className={`${theme === Theme.Dark ? 'invert' : ''}`}
            width={24}
            height={24}
            alt='menu icon'
          />
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content menu w-52 rounded-box bg-base-100 p-2 shadow'
        >
          {links.map((link, i) => {
            return (
              <li key={i}>
                <Link
                  href={link.href}
                  className='text-lg hover:font-bold hover:underline'
                  onClick={(e) => e.currentTarget.blur()}
                  key={i}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='mt-auto hidden max-w-lg basis-full justify-between px-4 pb-4 lg:flex'>
        {links.map((link, i) => {
          return (
            <Link
              href={link.href}
              className='whitespace-nowrap decoration-primary decoration-2 hover:font-bold hover:underline'
              key={i}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
