import Image from 'next/image';

import { Theme } from '@/types/theme.enum';
import { Anchor } from '@/components/anchor';

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
  theme,
}: {
  project: ProjectData;
  theme: Theme;
}) {
  let linkText = 'Link';
  if (project.desktopOnly) linkText += ' (desktop only)';

  return (
    <div className='collapse mx-auto mt-12 w-11/12 rounded-lg border-2 border-black p-2 shadow-lg '>
      <input type='checkbox' />
      <div className='collapse-title flex flex-col rounded-lg'>
        <h2 className='text-3xl'>{project.title}</h2>
        <h4 className='text-lg italic'>{project.subtitle}</h4>
      </div>
      <div className='collapse-content'>
        <div className='divider'></div>
        <div className='mx-auto mt-8 flex w-full flex-col lg:flex-row lg:gap-x-4'>
          <div className='relative lg:basis-7/12 xl:basis-1/2'>
            <div className='absolute left-0 top-0 flex -translate-y-6 gap-x-4 text-sm'>
              {project.link && <Anchor href={project.link}>{linkText}</Anchor>}
              {project.article && (
                <Anchor href={project.article}>Article</Anchor>
              )}
              {project.video && <Anchor href={project.video}>Video</Anchor>}
              {project.source && <Anchor href={project.source}>Source</Anchor>}
            </div>
            <Image
              src={project.imagePath}
              className='mx-auto h-auto rounded-xl xl:mx-0 xl:ml-auto'
              width={800}
              height={800}
              alt='profile pic'
            />
          </div>
          <div className='mx-auto mt-8 w-11/12 max-w-xl lg:mt-0 lg:basis-5/12 lg:pr-8 xl:mx-0 xl:mr-auto xl:basis-1/2'>
            <ProjectCardTab name='Summary' contents={project.summary} />
            <ProjectCardTab name='Main Features' contents={project.features} />
            <ProjectCardTab
              name='Primary Tools Used'
              contents={
                <PrimaryToolsContents
                  primaryTools={project.primaryTools}
                  theme={theme}
                />
              }
            />
            <ProjectCardTab
              name='Secondary Tools Used'
              contents={project.secondaryTools}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCardTab({
  name,
  contents,
}: {
  name: string;
  contents: React.ReactNode | string[];
}) {
  return (
    <div
      tabIndex={0}
      className='collapse-arrow collapse border border-green-600 bg-base-200'
    >
      <summary className='collapse-title text-xl'>{name}</summary>
      <div className='collapse-content'>
        <div className='px-4'>{contents}</div>
      </div>
    </div>
  );
}

function PrimaryToolsContents({
  primaryTools,
  theme,
}: {
  primaryTools: string[];
  theme: Theme;
}) {
  return (
    <ul className='flex flex-col gap-y-2 ps-8'>
      {primaryTools &&
        primaryTools.map((tool) => {
          return (
            <li key={tool.substring(0, 20)}>
              <div className='flex gap-x-3'>
                {toolIcons[tool].src !== '' && (
                  <Image
                    src={toolIcons[tool].src}
                    className={`-ms-8 mr-2 ${
                      toolIcons[tool].invert && theme === Theme.Dark
                        ? 'invert'
                        : ''
                    }`}
                    width={25}
                    height={25}
                    alt={`${tool} logo`}
                  />
                )}
                <p>{tool}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
