import Splash from '@/app/home.components/splash';
import ProjectsPreview from '@/app/home.components/projectsPreview';
import Summary from '@/app/home.components/summary';

export default function Home() {
  return (
    <main>
      <Splash />

      <Summary />

      <ProjectsPreview />
    </main>
  );
}
