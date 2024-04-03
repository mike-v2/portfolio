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
];

export default function SkillsTicker() {
  return (
    <div className='relative flex h-32 items-center overflow-x-hidden border-2 border-primary bg-cyan-200 md:h-64'>
      <div className='animate-ticker'>
        <ul className='absolute inset-0 flex -translate-x-full justify-around'>
          <Contents />
        </ul>
        <ul className='flex w-[100rem] justify-around md:w-[200rem]'>
          <Contents />
        </ul>
        <ul className='absolute inset-0 flex translate-x-full justify-around'>
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
          className='flex  items-center gap-x-2 whitespace-nowrap py-2 pr-24 md:gap-x-4 '
        >
          <div></div>
          <Image
            src={skill.imagePath}
            height={0}
            width={0}
            sizes='100vw'
            alt={`${skill.name} logo`}
            className='h-8 w-8 md:h-16 md:w-16'
          />
          <span className='text-xl md:text-4xl'>{skill.name}</span>
        </li>
      ))}
    </>
  );
}
