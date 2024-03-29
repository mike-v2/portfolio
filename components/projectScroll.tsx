import Image from 'next/image';

import { ContainerScroll } from '@/components/containerScrollAnimation';
import { projectData } from '@/app/projects/data';

const selectedProjects = projectData.filter(
  (project) =>
    project.title === 'Recreating React' ||
    project.title === "Harry Howard's Journals" ||
    project.title === 'Good News!',
);

export default function ProjectScroll() {
  return (
    <>
      {selectedProjects.map((project) => (
        <ContainerScroll titleComponent=''>
          <div className=''>
            <Image
              src={project.imagePath}
              width={0}
              height={0}
              sizes='100vw'
              className='h-auto w-full'
              alt={`Image representing the project, ${project.title}`}
            />
          </div>
        </ContainerScroll>
      ))}
    </>
  );
}
