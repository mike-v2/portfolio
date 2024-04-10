'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ProjectCard from '@/app/projects/components/projectCard';

export default function ProjectList({ projects }: { projects: ProjectData[] }) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlProject = decodeURIComponent(searchParams.get('project') ?? '');

  useEffect(() => {
    const selectedProj = projects.find(
      (project) => project.title === urlProject,
    );
    if (selectedProj) setSelectedProject(selectedProj);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    selectedProject
      ? params.set('project', encodeURIComponent(selectedProject.title))
      : params.delete('project');
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [selectedProject]);

  function handleExpandChange(project: ProjectData, isExpanded: boolean) {
    isExpanded ? setSelectedProject(project) : setSelectedProject(null);
  }

  return (
    <>
      <div className='flex justify-center'>
        {selectedProject && (
          <ProjectCard
            project={selectedProject}
            isExpanded={true}
            onExpandedChange={(isExpanded) =>
              handleExpandChange(selectedProject, isExpanded)
            }
          />
        )}
      </div>

      <div className='mx-auto flex max-w-7xl flex-wrap justify-center gap-x-16'>
        {projects &&
          projects
            .filter((project) => project.title !== urlProject)
            .map((project) => (
              <ProjectCard
                key={project.imagePath}
                project={project}
                isExpanded={false}
                onExpandedChange={(isExpanded) =>
                  handleExpandChange(project, isExpanded)
                }
              />
            ))}
      </div>
    </>
  );
}
