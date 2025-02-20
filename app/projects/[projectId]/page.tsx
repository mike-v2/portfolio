import Image from 'next/image';

import getProjectById from '@/app/projects/data/getProject';
import { toolIcons } from '@/app/projects/data/toolIconData';
import { ProjectData } from '@/types/project';

export default function Blog({ params }: { params: { projectId: string } }) {
  const project: ProjectData = getProjectById(params.projectId);

  if (!project) return;

  return (
    <main className='summary-gradient bg-black'>
      <div className='space-y-4 pt-32 text-center text-primary'>
        <h1 className='text-6xl'>{project.title}</h1>
        <p className='font-sans'>{project.subtitle}</p>
      </div>

      <div className='my-12 flex flex-wrap justify-center gap-x-6 gap-y-4'>
        {project.primaryTools &&
          project.primaryTools.map((tool) => {
            return <ToolWithIcon tool={tool} />;
          })}
      </div>

      <div className='relative h-[30rem] w-auto '>
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className='object-contain p-8'
        />
      </div>

      <p className='text-primary'>{project.summary}</p>
      <p className='font-sans text-white'>{project.features}</p>
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
