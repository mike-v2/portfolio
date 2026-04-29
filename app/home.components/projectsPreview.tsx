import HoverSwellMenu from '@/components/hoverSwellMenu';
import SectionTitle from '@/components/sectionTitle';

const selectedProjects = [
  {
    title: 'Recreating React',
    subtitle: 'Building Four Core Features of React',
    imagePath: '/images/project-react.jpg',
    href: '/projects/5',
  },
  {
    title: "Harry Howard's Journals",
    subtitle: 'Using AI to Make Big Data More Accessible',
    imagePath: '/images/project-journal.jpg',
    href: '/projects/4',
  },
  {
    title: 'Good News!',
    subtitle: 'An Automated Pipeline for Finding Positive News Stories with AI',
    imagePath: '/images/project-good-news.jpg',
    href: '/projects/3',
  },
];

export default function ProjectsPreview() {
  return (
    <section>
      <SectionTitle title='Projects' />
      <HoverSwellMenu items={selectedProjects} />
    </section>
  );
}
