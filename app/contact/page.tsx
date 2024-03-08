import { getCurrentTheme } from '@/utils/theme';
import { Theme } from '@/types/theme.enum';

import ContactForm from '@/app/contact/components/contactForm';

export default function Contact() {
  return (
    <main className='mt-8'>
      <div className='mx-auto flex max-w-4xl flex-col gap-y-2 pb-8'>
        <h1
          className={`text-2xl font-bold ${getCurrentTheme() === Theme.Dark ? 'text-slate-200' : ''} pb-2`}
        >
          Thanks for taking the time to explore my portfolio!
        </h1>
        <p className=''>
          Whether you have a potential job opportunity, an exciting project
          collaboration in mind, or just want to chat about web development,
          I&apos;d love to hear from you. Don&apos;t hesitate to reach out using
          the contact form below or through my{' '}
          <a
            href='https://www.linkedin.com/in/michael-mcguiness-react/'
            target='_blank'
            className='text-blue-600 visited:text-purple-600 hover:text-blue-800'
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            href='https://github.com/mike-v2/'
            target='_blank'
            className='text-blue-600 visited:text-purple-600 hover:text-blue-800'
          >
            GitHub
          </a>{' '}
          profiles, or via email at{' '}
          <a
            href='mailto:mikemcguiness@protonmail.com'
            className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800'
          >
            mikemcguiness@protonmail.com
          </a>
          .
        </p>
        <p>
          I&apos;m always open to new ideas, interesting challenges, and
          opportunities to expand my skills and network. I&apos;m looking
          forward to connecting with you!
        </p>
      </div>
      <ContactForm theme={getCurrentTheme()} />
    </main>
  );
}
