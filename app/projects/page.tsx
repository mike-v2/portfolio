import { getCurrentTheme } from '@/utils/theme';

import { projectData } from '@/app/projects/data';
import ProjectList from '@/app/projects/components/projectList';

export default function Projects({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedProject = searchParams['project'] as string;

  return (
    <main>
      {!selectedProject && (
        <h1 className='my-20 w-full text-center text-6xl'>Projects</h1>
      )}

      <ProjectList theme={getCurrentTheme()} projects={projectData} />
    </main>
  );
}