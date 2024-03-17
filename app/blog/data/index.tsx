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
          src='/images/cutoutPost/cutout-1.jpeg'
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
          src='/images/cutoutPost/cutout-2.jpeg'
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
          src='/images/cutoutPost/cutout-3.jpeg'
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
          src='/images/cutoutPost/cutout-4.jpeg'
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
          src='/images/cutoutPost/cutout-code-1.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-3xl'
          alt='CSS code of cutout background linear gradient'
        />

        <Image
          src='/images/cutoutPost/cutout-code-2.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-3xl'
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
          src='/images/cutoutPost/cutout-demo.gif'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-md'
          alt='Gif showing corner expanding on mouse hover'
        />

        <p>
          I hope you find this trick helpful and can use it to spice up your
          designs! Let me know if you have any questions. Happy coding! 😊
        </p>
      </div>
    ),
  },
  {
    title: 'Recreating React',
    date: '2023-10-23',
    link: 'https://www.linkedin.com/posts/michael-mcguiness-react_react-javascript-frontenddevelopment-activity-7122370503448657922-1oCI',
    content: (
      <div className='flex flex-col gap-y-4'>
        <p>
          So, I've been using React for a while now, and recently I decided to
          really dive deep and understand the nuts and bolts of it. There were
          always these questions that kept popping up in my mind, like "How does
          React transform all that JSX jargon into delightful DOM nodes?" and
          "How do hooks keep track of their state?" So, I decided to find out!
        </p>
        <p>
          Following the advice of{' '}
          <a
            href='https://www.linkedin.com/in/raymond-gan-0ba8011'
            target='_blank'
          >
            Raymond Gan
          </a>
          and others, I took on the challenge of creating my own React clone. I
          thought it would not only be a great learning experience but also a
          fantastic way to showcase my abilities as a junior developer.
        </p>
        <p>
          Going into this project, I thought I had a pretty solid grasp of
          React, but boy, was I wrong! I learned so much more by actually
          building it from scratch. For instance, I always thought state was
          closely tied to the component it resides in. But turns out, all the
          hooks from an app are kept in a single global hooks array, and each
          hook just keeps a reference to its index in that array. I was quite
          surprised to discover this!
        </p>
        <p>
          If you're curious to see how I did it, I've written a detailed article
          over on Medium that you can check out. I included the software tests
          so you can see exactly what its capabilities are. Plus, I made a
          YouTube video demonstrating the whole thing in action. Feel free to
          take a look, and let me know your thoughts!
        </p>
        <p>
          In-depth explanation:{' '}
          <a
            href='https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5'
            target='_blank'
          >
            Medium Article
          </a>
        </p>
        <p>
          Source:{' '}
          <a
            href='https://github.com/mike-v2/react-from-scratch'
            target='_blank'
          >
            GitHub Project
          </a>
        </p>

        <div className='relative mx-auto aspect-video w-full max-w-3xl overflow-hidden'>
          <iframe
            className='absolute inset-0 h-full w-full'
            width='853'
            height='480'
            src='https://www.youtube.com/embed/BU37lgD28lU'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
      </div>
    ),
  },
  {
    title:
      'Adding Authentication to my Next.js App with Next-Auth and Google Sign In',
    date: '2023-10-09',
    link: 'https://www.linkedin.com/posts/michael-mcguiness-react_adding-authentication-to-my-nextjs-app-with-activity-7117230565690380289-NnMw',
    content: (
      <div className='flex flex-col gap-y-4'>
        <p>
          Adding authentication is easy and straightforward with Next-Auth and
          Google Sign In. In this video I discuss how I did it, some stumbling
          blocks I ran into, as well as a quick explanation of what's happening
          behind the scenes.
        </p>

        <div className='relative mx-auto aspect-video w-full max-w-3xl overflow-hidden'>
          <iframe
            className='absolute inset-0 h-full w-full'
            width='853'
            height='480'
            src='https://www.youtube.com/embed/9A7fVwSDvzw'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
      </div>
    ),
  },
  {
    title:
      'Deciphering the Past: A Journey of Transcribing Handwritten Journals',
    date: '2023-09-30',
    link: 'https://www.linkedin.com/posts/michael-mcguiness-react_adding-authentication-to-my-nextjs-app-with-activity-7117230565690380289-NnMw',
    content: (
      <div className='flex flex-col gap-y-4'>
        <p>
          Holding my great grandfather's journals, a torrent of possibilities
          rushed through my mind. Visions of a digital sanctuary where these
          pages could come alive—searchable entries that users could revisit and
          bookmark, a space where every passage, every memory, every sentiment
          would be just a click away. I even dreamt of crafting a chatbot, a
          virtual echo of my great grandfather, brought to life through his own
          words and stories. The excitement was palpable, yet all these grand
          aspirations shared one foundational need: an accurate digital
          transcription of the decades-old text.
        </p>

        <h3 className='text-3xl font-bold'>
          Challenge: Accurate Transcription of Handwritten Journals
        </h3>
        <p>
          The elegance of my great grandfather's cursive posed a surprising
          obstacle. While today it seems like AI can do anything, transcription
          AIs faltered before this challenge. Initial attempts with Google
          Vision API yielded disappointing results. I was confident I was on the
          right track but felt like I hit a wall. The AI had an accuracy rate of
          just 64% - nowhere near precise enough for preserving family history.
        </p>
        <Image
          src='/images/ocrPost/entry-short.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-2xl'
          alt='Journal entry with cursive handwriting'
        />

        <h5 className='text-xl font-bold'>
          Google Vision output of the above entry (confidence values are
          displayed next to each word):
        </h5>
        <p>
          66 97 Juve 26 Amen 64 . 40 Sulfer 33 th 40 Saturday 94 , 89 Long 83 ,
          40 long 50 after 62 the 99 premt 85 generation 82 has 74 gone 80 . 51
          the 96 great 97 was 84 In 80 which 97 the 99 vations 81 are 95 now 99
          locked 84 , 77 has 62 posssed 60 , 76 June 80 6 87 , 80 1944 95 will
          83 be 91 a 93 great 93 historic 83 day 97 . 79 The 98 day
        </p>

        <h5 className='text-xl font-bold'>
          GPT-4 reconstruction of Google Vision output:
        </h5>
        <p>
          Jun. 6: Long after the present generation has gone, the great war in
          which the nations are now locked will be remembered. June 6, 1944 will
          be a great historic day. The day
        </p>

        <h5 className='text-xl font-bold'>Accuracy</h5>
        <p>
          (measured with{' '}
          <a href='https://app.copyleaks.com/text-compare' target='_blank'>
            Copyleaks
          </a>
          )
        </p>
        <Image
          src='/images/ocrPost/compare-before.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-2xl'
          alt='String comparison tool showing 63.9% similarity'
        />

        <h3 className='text-3xl font-bold'>The Solution:</h3>
        <p>
          I noticed that sometimes Google Vision would mix words from different
          lines. But what if I could make the AI focus on one line at a time?
          With this in mind, I turned to{' '}
          <a href='https://github.com/clovaai/CRAFT-pytorch' target='_blank'>
            CRAFT AI
          </a>
          . By identifying and isolating individual lines of text, I hoped to
          present clearer data for Google Vision to interpret.
        </p>

        <p>First, I used CRAFT AI to identify each word:</p>
        <Image
          src='/images/ocrPost/boxes-short.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-2xl'
          alt='Journal entry with boxes around each word'
        />
        <p>
          Using some python algorithms, I could use the CRAFT boxes to identify
          the boundaries of each line
        </p>
        <Image
          src='/images/ocrPost/lines-short.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-2xl'
          alt='Journal entry with lines separating each line of text'
        />

        <p>
          Then I could make a new image from each line, starting with the first
          line:
        </p>
        <Image
          src='/images/ocrPost/line-1.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-2xl'
          alt='The first line of a journal entry'
        />
        <p>Then the second line:</p>
        <Image
          src='/images/ocrPost/line-2.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-2xl'
          alt='The second line of a journal entry'
        />
        <p>And third (and so on...)</p>
        <Image
          src='/images/ocrPost/line-3.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-2xl'
          alt='The third line of a journal entry'
        />

        <h5 className='text-xl font-bold'>Results</h5>
        <Image
          src='/images/ocrPost/compare-after.png'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto h-auto w-full max-w-2xl'
          alt='String comparison tool showing 85.7% similarity'
        />
        <p>
          The proof was in the transcription. A comparison of the AI's results
          using the entire page versus individual lines showed a remarkable
          improvement. From a mediocre 64%, accuracy soared to a commendable 86%
          !!
        </p>

        <h3 className='text-3xl font-bold'>Conclusion</h3>
        <p>
          The journey from an age-old journal to a digitized archive was
          challenging but incredibly rewarding. With every stumbling block, I
          found ways to innovate and move forward. The end product not only
          preserves my family's history but makes it more accessible than ever.
        </p>
        <p>
          As for the tools and techniques I discovered and employed, they're not
          just about this project. They're about the resilience and
          resourcefulness of self-taught developers. Whether it's a familial
          treasure or a personal project, with determination and the right
          resources, anything is possible.
        </p>
        <p>
          View the full{' '}
          <a href='https://github.com/mike-v2/journal-search' target='_blank'>
            source code
          </a>
          .
        </p>
        <p>
          Checkout{' '}
          <a href='https://journal-search.vercel.app' target='_blank'>
            the website
          </a>{' '}
          in action.
        </p>
      </div>
    ),
  },
  {
    title: 'Deep Dive into Software Testing: Handling Comment Edits',
    date: '2023-09-27',
    link: 'https://www.linkedin.com/posts/michael-mcguiness-react_softwaretesting-react-nextjs-activity-7112922913929924608-nKlT',
    content: (
      <div className='flex flex-col gap-y-4'>
        <p>Hey LinkedIn Learners,</p>
        <p>
          Today, I'd like to share a snippet from one of my software tests,
          written in Jest for a React/Next.js app. While we often talk about the
          importance of building robust features, it's equally crucial to ensure
          those features work flawlessly under various scenarios. Let's delve
          into one such test!
        </p>

        <h5 className='text-xl'>The Setup</h5>
        <p>
          We've got a post with comments, and users should be able to edit their
          own comments. We start with a mock comment and aim to modify it.
        </p>
        <p>{`const specialComments = [{ ... text: 'old comment' }];`}</p>

        <h5 className='text-xl'>The Sequence</h5>
        <p>1. Simulate user interaction to expand a post.</p>
        <p className='ps-4'>{`fireEvent.click(getByText(mockPost.title));`}</p>
        <p>2. Open the menu that is attached to the user's comment.</p>
        <div className='ps-4'>
          <p>{`fireEvent.click(getByLabelText('Open menu'));`}</p>
          <p>{`fireEvent.click(getByText('Edit'));`}</p>
        </div>
        <p>3. Edit the comment content.</p>
        <div className='ps-4'>
          <p>{`const input = getByLabelText('Edit Comment Input');`}</p>
          <p>{`userEvent.clear(input);`}</p>
          <p>{`await userEvent.type(input, 'This is an edited comment');`}</p>
        </div>

        <p>4. Submit the changes.</p>
        <p className='ps-4'>{`fireEvent.click(getByText('Submit'));`}</p>

        <h5 className='text-xl'>The Magic</h5>
        <ul className='list-disc ps-4'>
          <li>
            For UI interactions, we leverage both fireEvent and userEvent
            functions.
          </li>
          <li>
            For typing in inputs, we prefer userEvent over a simple fireEvent.
            Why? Because userEvent.type closely mimics human behavior by
            focusing on the input, and simulating the keypress of each
            individual character, offering a more realistic interaction for our
            tests.
          </li>
          <li>
            Given the async nature of user events, we deploy async/await to
            handle these gracefully.
          </li>
        </ul>

        <h5 className='text-xl'>The Validation</h5>
        <p>
          Post-edit, our test checks if the comment's content has been updated
          in the UI. The expectation? To find the revised comment - 'This is an
          edited comment'.
        </p>
        <p className='ps-4'>{`expect(await findByText('This is an edited comment')).toBeInTheDocument();`}</p>

        <p>
          The importance of such tests? Ensuring that our users experience a
          seamless and bug-free environment while interacting with the app.
        </p>
        <p>
          Check out the{' '}
          <a
            href='https://github.com/mike-v2/journal-search/blob/main/tests/postBox.test.tsx'
            target='_blank'
          >
            full test
          </a>
          .
        </p>
        <p>
          Would love to hear your thoughts or any tips on enhancing software
          testing!
        </p>
      </div>
    ),
  },
  {
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
          <a href='https://journal-search.vercel.app'>Site</a>
          <a href='https://github.com/mike-v2/journal-search'>Source</a>
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
  },
];
