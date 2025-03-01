import { Anchor } from '@/components/anchor';
import { BlogPost } from '@/types/postData';

export const post1: BlogPost = {
  id: '1',
  imagePath: 'blog-journal',
  title: "Harry Howard's Journals: Using AI to Make Big Data More Accessible",
  date: '2023-08-10',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_harry-howards-journals-using-ai-to-make-activity-7095504010203316224-nyHt',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        {`I'm proud to introduce Harry Howard's Journals, an advanced web
          application that redefines the way we explore historical journal
          entries. The entries are enhanced by AI and made easily accessible,
          putting a treasure trove of historical data at your fingertips. Let me
          know if you have any questions or comments!`}
      </p>
      <div className='flex gap-x-4'>
        <Anchor href='https://journal-search.vercel.app'>Site</Anchor>
        <Anchor href='https://github.com/mike-v2/journal-search'>Source</Anchor>
      </div>

      <div className='relative mx-auto aspect-video w-full max-w-3xl overflow-hidden'>
        <iframe
          className='absolute inset-0 h-full w-full'
          width='853'
          height='480'
          src='https://www.youtube.com/embed/SmqiGkeuxo8'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
    </div>
  ),
};
