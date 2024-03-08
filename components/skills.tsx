import { Theme } from '@/types/theme.enum';
import { getCurrentTheme } from '@/utils/theme';

import SkillPill from '@/components/skillPill';

const skillPillInfo = [
  {
    name: 'React',
    imagePath: '/images/react-logo.svg',
  },
  {
    name: 'Next.js',
    imagePath: '/images/nextjs-logo.svg',
    invert: true,
  },
  {
    name: 'Node.js',
    imagePath: '/images/node-logo.svg',
  },
  {
    name: 'Express',
    imagePath: '/images/express-logo.svg',
    invert: true,
  },
  {
    name: 'MongoDB',
    imagePath: '/images/mongodb-logo.svg',
  },
];

const secondarySkillPillInfo = [
  {
    name: 'Typescript',
    imagePath: '/images/typescript-logo.svg',
  },
  {
    name: 'Tailwind CSS',
    imagePath: '/images/tailwind-logo.svg',
  },
  {
    name: 'Jest',
    imagePath: '/images/jest-logo.svg',
  },
  {
    name: 'GitHub',
    imagePath: '/images/github-logo.svg',
    invert: true,
  },
  {
    name: 'ChatGPT',
    imagePath: '/images/openai-logo.svg',
    invert: true,
  },
];

export default function Skills() {
  return (
    <section className='mt-32'>
      <div className='flex flex-wrap justify-center gap-8'>
        {skillPillInfo &&
          skillPillInfo.map((info, i) => (
            <SkillPill
              name={info.name}
              imagePath={info.imagePath}
              className={
                info.invert && getCurrentTheme() === Theme.Dark ? 'invert' : ''
              }
              key={i}
            />
          ))}
      </div>
      <div className='collapse mx-auto mt-4 w-fit bg-gradient-to-b from-base-300'>
        <input type='checkbox' />
        <div className='collapse-title px-0'>
          <h4 className='text-center text-xl font-medium'>More Skills</h4>
        </div>
        <div className='collapse-content'>
          <div className='mb-4 flex flex-wrap justify-center gap-8 md:mx-8'>
            {secondarySkillPillInfo &&
              secondarySkillPillInfo.map((info, i) => (
                <SkillPill
                  name={info.name}
                  imagePath={info.imagePath}
                  className={
                    info.invert && getCurrentTheme() === Theme.Dark
                      ? 'invert'
                      : ''
                  }
                  key={i}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
