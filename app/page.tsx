import Image from 'next/image';
import Link from 'next/link';

import { getCurrentTheme } from '@/utils/theme';
import { Theme } from '@/types/theme.enum';

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
    name: 'HTML',
    imagePath: '/images/html-logo.svg',
  },
  {
    name: 'CSS',
    imagePath: '/images/css-logo.svg',
  },
  {
    name: 'Javascript',
    imagePath: '/images/js-logo.svg',
  },
];

const secondarySkillPillInfo = [
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

export default function Home() {
  return (
    <main>
      <section className='mt-24'>
        <div className='mx-auto flex flex-col  gap-y-4 md:flex-row'>
          <span className='mr-12 pr-5 md:mr-0 md:basis-1/2 lg:basis-1/3'>
            <Image
              src='/images/headshot.png'
              className='h-auto'
              width={800}
              height={800}
              alt='profile pic'
            />
          </span>
          <span className='flex max-w-2xl flex-col pe-4 pl-2 md:basis-1/2 lg:basis-2/3'>
            <h2 className='text-[clamp(2rem,4vw,3.5rem)] leading-none'>
              Welcome! I&apos;m{' '}
            </h2>
            <h2 className='text-[clamp(3rem,7vw,4rem)] font-bold leading-tight'>
              Michael McGuiness,
            </h2>
            <p className='pb-6 ps-1 pt-4 '>
              A front-end web developer with a strong foundation in React,
              Next.js, and{' '}
              <span className='whitespace-nowrap'>Tailwind CSS</span>,
              passionate about building functional, user-centric digital
              experiences.
            </p>
            <Link href='/contact'>
              <button className='btn w-fit rounded-full bg-green-400 px-8 hover:bg-green-500 dark:text-black'>
                Contact
              </button>
            </Link>
          </span>
        </div>
      </section>

      <section className='mt-32'>
        <div className='flex flex-wrap justify-center gap-8'>
          {skillPillInfo &&
            skillPillInfo.map((info, i) => (
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

      <section className='mx-auto my-40 max-w-5xl'>
        <h2 className=' mx-auto mb-12  w-fit border-b-2 border-green-400 px-8 py-4 text-4xl'>
          Highlighted Project
        </h2>
        <div className='mx-auto flex flex-col gap-y-4'>
          <div className='video-container relative mx-auto w-full overflow-hidden'>
            <iframe
              className='absolute inset-0 h-full w-full'
              width='853'
              height='480'
              src='https://www.youtube.com/embed/SmqiGkeuxo8'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </div>
          <div className=''>
            <div className='flex'>
              <h4 className='flex flex-col justify-end text-2xl'>
                Harry Howard&apos;s Journals
              </h4>
              <Link href='/projects' className='ml-auto'>
                <div className='btn rounded-full bg-green-400 px-8 hover:bg-green-500 dark:text-black'>
                  Go To Project
                </div>
              </Link>
            </div>
            <h6 className='pt-2 text-lg italic'>
              Reimagining the exploration of historical journals with AI
            </h6>
            <p className=' px-4 pt-4'>
              Harry Howard&apos;s Journals is a cutting-edge web application
              that leverages Next.js, Python, and AI tools to make a rich
              collection of historical entries from the 1930s and 40s readily
              accessible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
