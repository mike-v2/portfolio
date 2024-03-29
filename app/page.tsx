import Splash from '@/app/home.components/splash';
import Skills from '@/app/home.components/skills';
import HighlightedProject from '@/app/home.components/highlightedProject';

export default function Home() {
  return (
    <main>
      <Splash />

      <Skills />

      <HighlightedProject />
    </main>
  );
}
