import { projectData } from '@/app/projects/data';
import ProjectWindow from '@/components/projectWindow';

const selectedProjects = projectData.filter(
  (project) =>
    project.title === 'Recreating React' ||
    project.title === "Harry Howard's Journals" ||
    project.title === 'Good News!',
);

export default function ProjectScroll() {
  return (
    <div className='flex flex-col gap-y-24'>
      {selectedProjects.map((project) => (
        <ProjectWindow project={project} key={project.title} />
      ))}
    </div>
  );
}
