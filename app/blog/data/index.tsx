import Image from 'next/image';

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
          🎥 Watch the video here:{' '}
          <a href='https://youtu.be/P2VxzeSsJzs' target='_blank'></a>
          youtu.be/P2VxzeSsJzs
        </p>
        <p>Catch you in the comments or the next video!</p>
      </div>
    ),
  },
  {
    title:
      "AI Awakens Ancestry: Interactive Innovation in Harry Howard's Journals",
    date: '2023-11-25',
    link: 'https://www.linkedin.com/posts/michael-mcguiness-react_ai-awakens-ancestry-interactive-innovation-activity-7133983316197732352-_M7l',
    content: (
      <div className='flex flex-col gap-y-4'>
        <p>
          Thrilled to share a new feature in my web app, Harry Howard&apos;s
          Journals, where my great-grandfather&apos;s life leaps off the pages.
          His journals, rich with tales from the 30s and 40s, have inspired me
          to meld the reliability of traditional web development with the
          exciting possibilities of AI.
        </p>
        <p>
          What&apos;s New? Now, users can engage with a ChatGPT-simulated Harry
          Howard directly on the homepage. This feature fuses OpenAI&apos;s
          advanced AI with the robustness of React and Next.js, transforming
          historical storytelling into an interactive, accessible digital
          experience.
        </p>
        <p>
          Tech Fusion: The app combines the cutting-edge AI of ChatGPT with core
          web development practices, offering an immersive narrative journey
          that showcases the synergy between AI innovation and established web
          technologies.
        </p>
        <h6>Behind the Scenes:</h6>
        <ul className='list-disc ps-4'>
          <li>
            React & Next.js: Utilized for dynamic user interactions and
            efficient routing, ensuring a smooth transition from initial
            engagement to a full conversation.
          </li>
          <li>
            State Management & URL Encoding: Skillfully managed user input and
            conversation continuity, highlighting the importance of user
            experience in design.
          </li>
        </ul>
        <p>
          User Experience at the Forefront: The focus was not just on technical
          integration, but also on creating an engaging, intuitive, and
          accessible interface. This enhances the overall storytelling aspect,
          making each interaction unique and personal.
        </p>
        <p>
          Your Thoughts?: Whether you&apos;re a tech enthusiast, a storyteller,
          or simply curious, I&apos;d love to hear your thoughts on this fusion
          of AI and web development. How do you see such technologies shaping
          the future of online interaction?
        </p>
        <p>Looking forward to your insights and feedback!</p>
        <p>
          Source:{' '}
          <a href='https://github.com/mike-v2/journal-search' target='_blank'>
            github.com/mike-v2/journal-search
          </a>
        </p>
      </div>
    ),
  },
  {
    title:
      'Vivid Variants with Class Variance Authority: Revolutionizing React Styles',
    date: '2023-11-15',
    link: 'https://www.linkedin.com/posts/michael-mcguiness-react_reactjs-webdevelopment-frontenddevelopment-activity-7130657637385326592-z-08',
    content: (
      <div className='flex flex-col gap-y-4'>
        <p>
          Recently, I started working with a new team at{' '}
          <a
            href='https://www.linkedin.com/company/applied-coding'
            target='_blank'
          >
            Applied Coding, Inc
          </a>{' '}
          and was introduced to a tool I hadn&apos;t used before -{' '}
          <a href='https://github.com/joe-bell/cva#readme' target='_blank'>
            Class Variance Authority (CVA)
          </a>
          . It&apos;s a straightforward and practical tool that simplifies
          managing styles. This not only makes my coding life easier but also
          leads to a cleaner, more user-friendly interface in the projects I
          work on.
        </p>
        <p>Here&apos;s a glimpse of how CVA works in a button component:</p>

        <Image
          src='/images/cva-code-1.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-4xl'
          alt='Code to make a button with cva'
        />

        <p>
          In this snippet, buttonStyles utilizes CVA to create a flexible
          styling base. The variant property allows for easy toggling between
          styles like &apos;primary&apos; and &apos;secondary&apos;. This is
          particularly useful when you want to maintain consistency across
          various buttons while also providing unique styles where necessary.
        </p>

        <Image
          src='/images/cva-example.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-20 w-auto'
          alt='Two buttons with Primary and Secondary styles'
        />

        <p>Now, let&apos;s compare this to the traditional approach:</p>

        <Image
          src='/images/cva-code-2.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-4xl'
          alt='Code to make a button without cva'
        />

        <p>
          In the traditional method, we manually concatenate classes based on
          the variant prop, leading to more complex and less maintainable code.
          This approach can quickly become cumbersome, especially in larger
          projects with numerous components requiring various styles.
        </p>

        <h6>Key advantages of CVA:</h6>
        <ul className='list-disc ps-4'>
          <li>
            <span className='font-bold'>Simplicity in Variance:</span> Switching
            styles is as simple as changing the variant prop.
          </li>
          <li>
            <span className='font-bold'>Cleaner Codebase:</span> The styling
            logic is neatly encapsulated within buttonStyles, making the
            component structure more organized and readable.
          </li>
          <li>
            <span className='font-bold'>Scalability:</span> It&apos;s far
            simpler to add or modify styles with CVA, especially as project
            requirements evolve.
          </li>
        </ul>

        <p>
          Have you worked with CVA before? What tools have you used to create
          style variants?
        </p>
      </div>
    ),
  },
  {
    title:
      'Turn the Corner on Your Web Design Skills with This CSS Page Fold Trick',
    date: '2023-10-31',
    link: 'https://www.linkedin.com/posts/michael-mcguiness-react_css-frontenddevelopment-webdevelopment-activity-7125279394880753664-o79O',
    content: (
      <div className='flex flex-col gap-y-4'>
        <p>
          I wanted to share this cool CSS trick I learned that gives the
          appearance of a page corner folding. This effect can increase visual
          interest by adding depth to the page, and it can also complement
          themes related to books, writing, or even vintage styles.
        </p>
        <Image
          src='/images/cutout-1.jpeg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-md'
          alt='Cutout effect'
        />

        <p>
          The basic idea is to use absolute positioning to place a square in the
          upper right corner of the page element.
        </p>
        <Image
          src='/images/cutout-2.jpeg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-md'
          alt='Full square without cutout'
        />

        <p>
          Then, we cut away half the square from the diagonal while cutting the
          same amount from the page element.
        </p>
        <Image
          src='/images/cutout-3.jpeg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-md'
          alt='Cutout effect showing diagonal'
        />

        <p>
          To do this, we need to know two things: the width/height of the square
          and the diagonal length.
        </p>
        <Image
          src='/images/cutout-4.jpeg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-md'
          alt='Cutout effect showing diagonal and width'
        />

        <p>
          Since we want the diagonal to cut the square in half, we can use some
          simple math to find that the width should be 1.4 times the diagonal
          length. For example, let&apos;s say we choose our diagonal to be 20
          pixels. That means the width would be 28 pixels.
        </p>

        <h6>Now, let&apos;s set the CSS properties:</h6>
        <ul className='list-disc ps-4'>
          <li>
            We&apos;ll create the cutout effect using a linear gradient with an
            abrupt transition from transparent to the page color.
          </li>
          <li>
            A default gradient moves from left to right, but we want it to move
            from the top right corner down and to the left. That&apos;s why we
            rotate the gradient 225 degrees.
          </li>
          <li>
            Set the width/height of the class that we&apos;ll apply to the
            square.
          </li>
        </ul>

        <Image
          src='/images/cutout-code-1.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-4xl'
          alt='CSS code of cutout background linear gradient'
        />

        <Image
          src='/images/cutout-code-2.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-4xl'
          alt='CSS code of corner fold'
        />

        <p>
          Don&apos;t forget to add some drop shadow to give it a feeling of
          depth! And there you have it - a cool page corner fold effect using
          CSS!
        </p>

        <p>
          📊 In my project, I made variables for the square width and cutout
          diagonal so that I could adjust them from my component after the user
          hovers over the corner.{' '}
          <a href='https://github.com/mike-v2/journal-search' target='_blank'>
            [Project Source]
          </a>
        </p>

        <Image
          src='/images/cutout-demo.gif'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-md'
          alt='CSS code of corner fold'
        />

        <p>
          I hope you find this trick helpful and can use it to spice up your
          designs! Let me know if you have any questions. Happy coding! 😊
        </p>
      </div>
    ),
  },
];
