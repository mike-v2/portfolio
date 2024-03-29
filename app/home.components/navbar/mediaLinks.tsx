import Image from 'next/image';

import { Theme } from '@/types/theme.enum';
import { getCurrentTheme } from '@/utils/theme';
import { Anchor } from '@/components/anchor';

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
    <div className='flex items-center gap-x-4 md:gap-x-8'>
      {icons &&
        icons.map((icon, i) => {
          return (
            <Anchor href={icon.link} className='h-6 w-6 md:h-8 md:w-8' key={i}>
              <Image
                src={icon.imagePath}
                className={`duration-250 h-auto w-full transition hover:scale-125 ${getCurrentTheme() === Theme.Dark ? 'invert' : ''}`}
                width={0}
                height={0}
                sizes='100vw'
                alt={`${icon.name} logo`}
                key={i}
              />
            </Anchor>
          );
        })}
    </div>
  );
}
