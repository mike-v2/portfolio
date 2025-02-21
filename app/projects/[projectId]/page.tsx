import Image from 'next/image';

import getProjectById from '@/app/projects/data/getProject';
import { toolIcons } from '@/app/projects/data/toolIconData';
import { ProjectData } from '@/types/project';

export default function Blog({ params }: { params: { projectId: string } }) {
  const project: ProjectData = getProjectById(params.projectId);

  if (!project) return;

  return (
    <main className='summary-gradient bg-black px-4 leading-loose text-primary'>
      <div className='mx-auto max-w-5xl'>
        <header className='space-y-4 pt-32 text-center'>
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
            className='object-contain p-8'
          />
        </section>

        <section className='my-16 space-y-8' aria-labelledby='summary-heading'>
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
          <p className=''>{project.features}</p>
        </section>

        <section className='mt-10 space-y-4 font-sans'>
          <SectionHeader text='Other Tools' />
          <div className='font-sans'>{project.secondaryTools}</div>
        </section>
      </div>
    </main>
  );
}

function ToolWithIcon({ tool }: { tool: string }) {
  return (
    <div key={tool.substring(0, 20)} className='flex items-center gap-x-2'>
      {toolIcons[tool].src !== '' && (
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