import Image from 'next/image';

import { Theme } from '@/types/theme.enum';
import { getCurrentTheme } from '@/utils/theme';

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
    <>
      {icons &&
        icons.map((icon, i) => {
          return (
            <a href={icon.link} target='_blank' key={i}>
              <Image
                src={icon.imagePath}
                className={`duration-250 transition hover:scale-125 ${getCurrentTheme() === Theme.Dark ? 'invert' : ''}`}
                width={30}
                height={30}
                alt={`${icon.name} logo`}
                key={i}
              />
            </a>
          );
        })}
    </>
  );
}
