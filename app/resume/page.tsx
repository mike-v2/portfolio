import { Theme } from '@/types/theme.enum';
import { getCurrentTheme } from '@/utils/theme';

import Education from '@/app/resume/components/education';
import OpenSource from '@/app/resume/components/openSource';
import Projects from '@/app/resume/components/projects';
import Publications from '@/app/resume/components/publications';
import Skills from '@/app/resume/components/skills';
import WorkExperience from '@/app/resume/components/workExperience';

export default function Resume() {
  return (
    <main className=''>
      <div className='mx-auto mt-12 w-full max-w-5xl px-2 md:w-5/6 md:px-0 lg:w-3/4'>
        <div className='flex'>
          <h4 className='text-xl font-bold'>Michael McGuiness</h4>
          <p className='ms-auto flex flex-col justify-center'>Vancouver, WA</p>
        </div>

        <Divider />

        <WorkExperience />

        <Divider />

        <OpenSource />

        <Divider />

        <Projects />

        <Divider />

        <Education />

        <Divider />

        <Skills />

        <Divider />

        <Publications />
      </div>
    </main>
  );
}

function Divider() {
  return (
    <>
      <div className='divider my-0 before:bg-base-content after:bg-base-content'></div>
      <div className='divider my-0 before:bg-primary after:bg-primary'></div>
    </>
  );
}
