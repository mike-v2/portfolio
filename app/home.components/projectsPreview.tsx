import HoverSwellMenu from '@/components/hoverSwellMenu';

const selectedProjects = [
  {
    title: 'Good News!',
    subtitle: 'An Automated Pipeline for Finding Positive News Stories with AI',
    imagePath: '/images/project-good-news.jpg',
  },
  {
    title: "Harry Howard's Journals",
    subtitle: 'Using AI to Make Big Data More Accessible',
    imagePath: '/images/project-journal.jpg',
  },
  {
    title: 'Recreating React',
    subtitle: 'Building Four Core Features of React',
    imagePath: '/images/project-react.jpg',
  },
].map((project) => ({
  ...project,
  href: `/projects?project=${encodeURIComponent(project.title)}`,
}));

export default function ProjectsPreview() {
  return (
    <section>
      <h2 className='my-24 p-8 text-center text-8xl'>Projects</h2>
      <HoverSwellMenu items={selectedProjects as HoverSwellMenuItem[]} />
    </section>
  );
}
