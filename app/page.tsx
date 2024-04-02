import Splash from '@/app/home.components/splash';
import ProjectsPreview from '@/app/home.components/projectsPreview';
import Summary from '@/app/home.components/summary';
import SkillsTicker from '@/app/home.components/skillsTicker';

export default function Home() {
  return (
    <main>
      <Splash />

      <Summary />

      <SkillsTicker />

      <ProjectsPreview />
    </main>
  );
}
