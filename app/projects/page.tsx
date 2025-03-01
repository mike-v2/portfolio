import ProjectPageMenu from '@/components/projectPageMenu';
import { projects } from '@/app/projects/data/getProject';

export default function Projects() {
  return (
    <main className='bg-zinc-800'>
      <h1 className='py-20 text-center text-6xl text-primary'>Projects</h1>

      <ProjectPageMenu items={projects} bgColor='bg-zinc-800' />
    </main>
  );
}
