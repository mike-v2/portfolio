import { BlogPost } from '@/types/postData';
import Header4 from '@/app/blog/components/header4';

export const post9: BlogPost = {
  id: '9',
  title: 'Theme Switching with Next.js and DaisyUI - Light and Dark Modes',
  date: '2024-03-12',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_theme-switching-with-nextjs-and-daisyui-activity-7173385927979913218-stg1',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        I just put together a new video where I show you how to add light and
        dark modes to your website with DaisyUI and Next.js. It&apos;s pretty
        straightforward and could be a nice addition to any project you&apos;re
        working on!
      </p>

      <div>
        <Header4>Key Highlights:</Header4>
        <ul className='list-disc ps-4'>
          <li>
            <span className='font-bold'>DaisyUI&apos;s Flexibility:</span>{' '}
            Discover how DaisyUI&apos;s theme system can be dynamically
            manipulated to switch between light and dark modes (or any theme).
          </li>
          <li>
            <span className='font-bold'>Next.js and Cookies:</span> Learn the
            nuts and bolts of using cookies() from next/headers to get and set
            user theme preferences.
          </li>
          <li>
            <span className='font-bold'>
              Don&apos;t use &apos;document.cookie&apos; on the client:
            </span>{' '}
            Learn why it might be better for client components to retrieve
            cookie data from the server instead of &apos;document.cookie&apos;.
          </li>
        </ul>
      </div>

      <p>
        If you&apos;re interested in making your sites more user-friendly or
        just love diving into new web dev techniques, this might be up your
        alley. Check out the video and let me know what you think! I&apos;m all
        ears for feedback or any questions you might have. Let&apos;s keep
        learning and building awesome stuff together.
      </p>
      <p>Catch you in the comments or the next video!</p>

      <div className='relative mx-auto aspect-video w-full max-w-3xl overflow-hidden'>
        <iframe
          className='absolute inset-0 h-full w-full'
          width='853'
          height='480'
          src='https://www.youtube.com/embed/P2VxzeSsJzs'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
    </div>
  ),
};
