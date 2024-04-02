'use client';

import Image from 'next/image';

const skills = [
  {
    name: 'React',
    imagePath: '/images/react-logo.svg',
  },
  {
    name: 'Next.js',
    imagePath: '/images/nextjs-logo.svg',
  },
  {
    name: 'Node.js',
    imagePath: '/images/node-logo.svg',
  },
  {
    name: 'Express',
    imagePath: '/images/express-logo.svg',
  },
  {
    name: 'MongoDB',
    imagePath: '/images/mongodb-logo.svg',
  },
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
  },
  {
    name: 'ChatGPT',
    imagePath: '/images/openai-logo.svg',
  },
];

const width = 'w-[200vw]';

export default function SkillsTicker() {
  return (
    <div className='relative flex h-64 items-center overflow-x-hidden border-2 border-primary bg-cyan-200'>
      <div className={`${width} animate-ticker`}>
        <ul
          className={`${width} absolute inset-0 flex -translate-x-full justify-around`}
        >
          <Contents />
        </ul>
        <ul className={`${width} flex justify-around`}>
          <Contents />
        </ul>
        <ul
          className={`${width} absolute inset-0 flex translate-x-full justify-around`}
        >
          <Contents />
        </ul>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <>
      {skills.map((skill, index) => (
        <li
          key={index - skills.length}
          className='flex items-center gap-x-4 whitespace-nowrap py-2 pr-24'
        >
          <Image
            src={skill.imagePath}
            height={64}
            width={64}
            alt={`${skill.name} logo`}
          />
          <span className='text-4xl'>{skill.name}</span>
        </li>
      ))}
    </>
  );
}
