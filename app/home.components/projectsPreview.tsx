import HoverSwellMenu from '@/components/hoverSwellMenu';
import SectionTitle from '@/components/sectionTitle';

const selectedProjects = [
  {
    title: 'Recreating React',
    subtitle: 'Building Four Core Features of React',
    imagePath: '/images/project-react.jpg',
  },
  {
    title: "Harry Howard's Journals",
    subtitle: 'Using AI to Make Big Data More Accessible',
    imagePath: '/images/project-journal.jpg',
  },
  {
    title: 'Good News!',
    subtitle: 'An Automated Pipeline for Finding Positive News Stories with AI',
    imagePath: '/images/project-good-news.jpg',
  },
].map((project) => ({
  ...project,
  href: `/projects?project=${encodeURIComponent(project.title)}`,
})) as HoverSwellMenuItem[];

export default function ProjectsPreview() {
  return (
    <section>
      <SectionTitle title='Projects' />
      <HoverSwellMenu items={selectedProjects} />
    </section>
  );
}
