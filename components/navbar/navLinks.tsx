'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    name: 'Contact',
    href: '/contact',
  },
];

export default function NavLinks() {
  return (
    <>
      <div className='dropdown-bottom dropdown-end dropdown mr-4 mt-auto md:hidden '>
        <label tabIndex={0} className='btn m-1 h-12 w-12 p-2 dark:border-white'>
          <Image
            src='/images/menu-icon.svg'
            className='dark:invert'
            width={25}
            height={25}
            alt='menu icon'
          />
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow'
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

      <div className='mt-auto hidden max-w-lg basis-full justify-between  px-4 pb-4 md:flex'>
        {links.map((link, i) => {
          return (
            <Link
              href={link.href}
              className='whitespace-nowrap decoration-green-400 decoration-2 hover:font-bold hover:underline'
              key={i}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
