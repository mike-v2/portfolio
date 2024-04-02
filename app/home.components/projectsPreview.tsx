import HoverSwellMenu from '@/components/hoverSwellMenu';
import { projectData } from '@/app/projects/data';

const menuItems: HoverSwellMenuItem[] = projectData
  .filter(
    (project) =>
      project.title === 'Recreating React' ||
      project.title === "Harry Howard's Journals" ||
      project.title === 'Good News!',
  )
  .map((project) => ({
    title: project.title,
    subtitle: project.subtitle,
    imagePath: project.imagePath,
    href: `/projects?project=${encodeURIComponent(project.title)}`,
  }));

export default function ProjectsPreview() {
  return (
    <section>
      <h2 className='my-24 p-8 text-center text-8xl'>Projects</h2>
      <HoverSwellMenu items={menuItems} />
    </section>
  );
}
