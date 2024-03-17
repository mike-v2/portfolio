import { getCurrentTheme } from '@/utils/theme';

import { projectData } from '@/app/projects/data';
import ProjectCard from '@/app/projects/components/projectCard';

export default function Projects() {
  return (
    <main>
      <h1 className='text- my-20 w-full text-center text-6xl'>Projects</h1>

      <div className='mb-16'>
        {projectData &&
          projectData.map((project) => (
            <ProjectCard
              key={project.imagePath}
              project={project}
              theme={getCurrentTheme()}
            />
          ))}
      </div>
    </main>
  );
}
