import { BlogPost } from '@/types/postData';

export const posts: BlogPost[] = [
  {
    title: 'Theme Switching with Next.js and DaisyUI - Light and Dark Modes',
    date: '2024-03-12',
    link: 'https://www.linkedin.com/posts/michael-mcguiness-react_theme-switching-with-nextjs-and-daisyui-activity-7173385927979913218-stg1',
    content: (
      <div className='flex flex-col gap-y-4'>
        <p>
          I just put together a new video where I show you how to add light and
          dark modes to your website with DaisyUI and Next.js. It&apos;s pretty
          straightforward and could be a nice addition to any project
          you&apos;re working on!
        </p>
        <h6>Key Highlights:</h6>
        <ul className='list-disc ps-4'>
          <li>
            DaisyUI&apos;s Flexibility: Discover how DaisyUI&apos;s theme system
            can be dynamically manipulated to switch between light and dark
            modes (or any theme).
          </li>
          <li>
            Next.js and Cookies: Learn the nuts and bolts of using cookies()
            from next/headers to get and set user theme preferences.
          </li>
          <li>
            Don&apos;t use &apos;document.cookie&apos; on the client: Learn why
            it might be better for client components to retrieve cookie data
            from the server instead of &apos;document.cookie&apos;.
          </li>
        </ul>
        <p>
          If you&apos;re interested in making your sites more user-friendly or
          just love diving into new web dev techniques, this might be up your
          alley. Check out the video and let me know what you think! I&apos;m
          all ears for feedback or any questions you might have. Let&apos;s keep
          learning and building awesome stuff together.
        </p>
        <p>
          🎥 Watch the video here: <a href='https://lnkd.in/gSEJMe-6'></a>
          lnkd.in/gSEJMe-6
        </p>
        <p>Catch you in the comments or the next video!</p>
      </div>
    ),
  },
];
