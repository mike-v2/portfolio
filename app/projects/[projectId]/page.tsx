import Image from 'next/image';

import { getProjectById } from '@/app/projects/data/getProject';
import { toolIcons } from '@/app/projects/data/toolIconData';
import { ProjectData } from '@/types/project';

export default function Blog({ params }: { params: { projectId: string } }) {
  const project: ProjectData = getProjectById(params.projectId);

  return (
    <main className='summary-gradient bg-black p-4 leading-loose text-primary'>
      <div className='mx-auto max-w-5xl'>
        <header className='space-y-4 pt-24 text-center'>
          <h1 className='text-6xl'>{project.title}</h1>
          <p className='font-sans text-white'>{project.subtitle}</p>
        </header>

        <section aria-labelledby='primary-tools-heading' className='my-12'>
          <h2 id='primary-tools-heading' className='sr-only'>
            Primary Tools
          </h2>
          <div className='flex flex-wrap justify-center gap-x-6 gap-y-4'>
            {project.primaryTools.map((tool) => (
              <ToolWithIcon key={tool} tool={tool} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby='project-image-heading'
          className='relative h-[30rem] w-auto '
        >
          <h2 id='project-image-heading' className='sr-only'>
            Project Image
          </h2>
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            className='object-contain '
          />
        </section>

        <section
          aria-labelledby='project-links-heading'
          className='mt-12 text-center'
        >
          <h2 id='project-links-heading' className='sr-only'>
            Project Links
          </h2>
          <div className='flex flex-wrap justify-center gap-4'>
            {project.link && (
              <ResourceLinkButton href={project.link} icon='Link'>
                Live Site
              </ResourceLinkButton>
            )}
            {project.source && (
              <ResourceLinkButton href={project.source} icon='GitHub'>
                Source Code
              </ResourceLinkButton>
            )}
            {project.article && (
              <ResourceLinkButton href={project.article} icon='Medium'>
                Read Article
              </ResourceLinkButton>
            )}
            {project.video && (
              <ResourceLinkButton href={project.video} icon='YouTube'>
                Watch Video
              </ResourceLinkButton>
            )}
          </div>
        </section>

        <div className='mb-20 mt-28 space-y-16 rounded-2xl bg-zinc-800/40 p-8 shadow-lg'>
          <section className='space-y-8' aria-labelledby='summary-heading'>
            <SectionHeader text='Summary' id='summary-heading' />
            <p className='lead text-4xl leading-[1.5] tracking-wide'>
              {project.summary}
            </p>
            {project.summaryMore && (
              <p className='font-sans text-white'>{project.summaryMore}</p>
            )}
          </section>

          <section className='space-y-4 font-sans'>
            <SectionHeader text='Features' />
            <ul className='grid gap-4 md:grid-cols-2'>
              {project.features.map((feature) => (
                <li
                  key={feature.slice(0, 20)}
                  className='rounded-lg bg-white/5 p-4 text-lg transition-all hover:shadow-lg'
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className='space-y-4 font-sans'>
            <SectionHeader text='Other Tools' />
            <div className='flex flex-wrap gap-3'>
              {project.secondaryTools.map((tool) => (
                <span
                  key={tool}
                  className='rounded-full bg-black/10 px-4 py-2 text-sm '
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ResourceLinkButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-3 font-sans text-white transition-colors hover:bg-zinc-700'
    >
      {toolIcons[icon]?.src && (
        <Image
          src={toolIcons[icon].src}
          width={20}
          height={20}
          alt={`${icon} logo`}
          className={toolIcons[icon].invert ? 'invert' : ''}
        />
      )}
      <span>{children}</span>
    </a>
  );
}

function ToolWithIcon({ tool }: { tool: string }) {
  return (
    <div key={tool.substring(0, 20)} className='flex items-center gap-x-2'>
      {toolIcons[tool]?.src && (
        <Image
          src={toolIcons[tool].src}
          width={32}
          height={32}
          alt={`${tool} logo`}
          className={toolIcons[tool].invert ? 'invert' : ''}
        />
      )}
      <p className='font-mono text-white'>{tool}</p>
    </div>
  );
}

type SectionHeaderProps = React.ComponentProps<'h2'> & {
  text: string;
};
function SectionHeader({ text, ...props }: SectionHeaderProps) {
  return (
    <h2
      className='font-sans text-2xl uppercase tracking-widest text-white'
      {...props}
    >
      {text}
    </h2>
  );
}