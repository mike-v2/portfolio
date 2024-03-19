'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Theme } from '@/types/theme.enum';

import ProjectCard from '@/app/projects/components/projectCard';

export default function ProjectList({
  projects,
  theme,
}: {
  projects: ProjectData[];
  theme: Theme;
}) {
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
      <div className='my-20 flex justify-center'>
        {selectedProject && (
          <ProjectCard
            project={selectedProject}
            theme={theme}
            isExpanded={true}
            onExpandedChange={(isExpanded) =>
              handleExpandChange(selectedProject, isExpanded)
            }
          />
        )}
      </div>

      <div className='flex flex-wrap justify-center gap-x-8'>
        {projects &&
          projects
            .filter((project) => project.title !== urlProject)
            .map((project) => (
              <ProjectCard
                key={project.imagePath}
                project={project}
                theme={theme}
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
