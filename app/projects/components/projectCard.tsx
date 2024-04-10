'use client';

import Image from 'next/image';

import { LuX } from 'react-icons/lu';

const toolIcons: ToolIconData = {
  'Next.js': {
    src: '/images/nextjs-logo.svg',
    invert: true,
  },
  React: {
    src: '/images/react-logo.svg',
  },
  GitHub: {
    src: '/images/github-logo.svg',
    invert: true,
  },
  'Tailwind CSS': {
    src: '/images/tailwind-logo.svg',
  },
  'ChatGPT API': {
    src: '/images/openai-logo.svg',
    invert: true,
  },
  Firebase: {
    src: '/images/firebase-logo.svg',
  },
  Prisma: {
    src: '/images/prisma-logo.svg',
    invert: true,
  },
  Bootstrap: {
    src: '/images/bootstrap-logo.svg',
    invert: true,
  },
  Supabase: {
    src: '/images/supabase-logo.svg',
  },
  'Daisy UI': {
    src: '/images/daisyui-logo.svg',
  },
  'Google Cloud Functions': {
    src: '/images/cloud_functions.png',
  },
  'Mediastack API': {
    src: '/images/mediastack.png',
  },
  JavaScript: {
    src: '/images/js-logo.svg',
  },
  TypeScript: {
    src: '/images/typescript-logo.svg',
  },
  'Node.js': {
    src: '/images/node-logo.svg',
  },
  Parcel: {
    src: '/images/parcel-logo.png',
  },
};

export default function ProjectCard({
  project,
  isExpanded,
  onExpandedChange,
}: {
  project: ProjectData;
  isExpanded: boolean;
  onExpandedChange: (isExpanded: boolean) => void;
}) {
  return (
    <div
      className={`flex max-w-3xl flex-col ${!isExpanded ? 'card w-96 cursor-pointer' : ''}`}
      onClick={(e) => {
        if (!isExpanded) onExpandedChange(true);
      }}
    >
      {isExpanded && (
        <button
          className='my-4 flex justify-end text-xl'
          onClick={(e) => onExpandedChange(false)}
        >
          <LuX />
        </button>
      )}
      <Image
        src={project.imagePath}
        width={0}
        height={0}
        sizes='100vw'
        alt={`image representing ${project.title}`}
        className={`${isExpanded ? 'h-96' : 'h-36'} w-full object-cover`}
      />
      <div className='card-body'>
        <h2 className='card-title'>{project.title}</h2>
        <p>{project.subtitle}</p>

        <div
          className={`mt-6 flex flex-col gap-y-4 ${isExpanded ? 'block' : 'hidden'}`}
        >
          <Collapse name='Summary' contents={project.summary} />
          <Collapse name='Main Features' contents={project.features} />
          <Collapse
            name='Primary Tools Used'
            contents={
              <PrimaryToolsContents primaryTools={project.primaryTools} />
            }
          />
          <Collapse
            name='Secondary Tools Used'
            contents={project.secondaryTools}
          />
        </div>
      </div>
    </div>
  );
}

function Collapse({
  name,
  contents,
}: {
  name: string;
  contents: React.ReactNode | string[];
}) {
  return (
    <div className='collapse bg-base-200'>
      <input type='checkbox' />
      <div className='collapse-title text-lg font-medium underline decoration-primary'>
        {name}
      </div>
      <div className='collapse-content'>{contents}</div>
    </div>
  );
}

function PrimaryToolsContents({ primaryTools }: { primaryTools: string[] }) {
  return (
    <div className='flex flex-wrap gap-x-6 gap-y-4'>
      {primaryTools &&
        primaryTools.map((tool) => {
          return (
            <div
              key={tool.substring(0, 20)}
              className='flex items-center gap-x-2'
            >
              {toolIcons[tool].src !== '' && (
                <Image
                  src={toolIcons[tool].src}
                  width={32}
                  height={32}
                  alt={`${tool} logo`}
                />
              )}
              <p>{tool}</p>
            </div>
          );
        })}
    </div>
  );
}
