import Image from 'next/image';

import { Anchor } from '@/components/anchor';
import { LuFileDown } from 'react-icons/lu';

const icons = [
  {
    name: 'GitHub',
    link: 'https://github.com/mike-v2/',
    imagePath: '/images/github-logo.svg',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/michael-mcguiness-react/',
    imagePath: '/images/linkedin-logo.svg',
  },
  {
    name: 'Email',
    link: 'mailto:mikemcguiness@protonmail.com',
    imagePath: '/images/email-logo.svg',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCSacwkTC8liUfirZuPEOuew',
    imagePath: '/images/youtube-logo.svg',
  },
];

export default function MediaLinks() {
  return (
    <div className='flex items-center justify-center gap-x-4 md:gap-x-8'>
      {icons &&
        icons.map((icon, i) => {
          return (
            <a
              target='_blank'
              href={icon.link}
              className='h-6 w-6 md:h-8 md:w-8'
              key={i}
            >
              <Image
                src={icon.imagePath}
                className='duration-250 filter-primary h-auto w-full transition hover:scale-125'
                width={0}
                height={0}
                sizes='100vw'
                alt={`${icon.name} logo`}
                key={i}
              />
            </a>
          );
        })}

      {/* Resume Download Button */}
      <a
        href='/Resume - Michael McGuiness.pdf'
        download='Resume - Michael McGuiness.pdf'
        target='_blank'
        className='duration-250 filter-primary flex h-6 w-6 items-center justify-center text-4xl transition hover:scale-125 md:h-8 md:w-8'
      >
        <LuFileDown />
      </a>
    </div>
  );
}
