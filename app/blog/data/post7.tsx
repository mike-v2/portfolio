import Image from 'next/image';

import { BlogPost } from '@/types/postData';
import { Anchor } from '@/components/anchor';
import Header4 from '@/app/blog/components/header4';

export const post7: BlogPost = {
  id: '7',
  title:
    'Vivid Variants with Class Variance Authority: Revolutionizing React Styles',
  date: '2023-11-15',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_reactjs-webdevelopment-frontenddevelopment-activity-7130657637385326592-z-08',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        Recently, I started working with a new team at{' '}
        <Anchor href='https://www.linkedin.com/company/applied-coding'>
          Applied Coding, Inc
        </Anchor>{' '}
        and was introduced to a tool I hadn&apos;t used before -{' '}
        <Anchor href='https://github.com/joe-bell/cva#readme'>
          Class Variance Authority (CVA)
        </Anchor>
        . It&apos;s a straightforward and practical tool that simplifies
        managing styles. This not only makes my coding life easier but also
        leads to a cleaner, more user-friendly interface in the projects I work
        on.
      </p>

      <Header4>
        Here&apos;s a glimpse of how CVA works in a button component:
      </Header4>
      <Image
        src='/images/cva-code-1.png'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full'
        alt='Code to make a button with cva'
      />

      <p>
        In this snippet, buttonStyles utilizes CVA to create a flexible styling
        base. The variant property allows for easy toggling between styles like
        &apos;primary&apos; and &apos;secondary&apos;. This is particularly
        useful when you want to maintain consistency across various buttons
        while also providing unique styles where necessary.
      </p>

      <Image
        src='/images/cva-example.png'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-20 w-auto'
        alt='Two buttons with Primary and Secondary styles'
      />

      <Header4>
        Now, let&apos;s compare this to the traditional approach:
      </Header4>
      <Image
        src='/images/cva-code-2.png'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full'
        alt='Code to make a button without cva'
      />

      <p>
        In the traditional method, we manually concatenate classes based on the
        variant prop, leading to more complex and less maintainable code. This
        approach can quickly become cumbersome, especially in larger projects
        with numerous components requiring various styles.
      </p>

      <Header4>Key advantages of CVA:</Header4>
      <ul className='list-disc ps-4'>
        <li>
          <span className='font-bold'>Simplicity in Variance:</span> Switching
          styles is as simple as changing the variant prop.
        </li>
        <li>
          <span className='font-bold'>Cleaner Codebase:</span> The styling logic
          is neatly encapsulated within buttonStyles, making the component
          structure more organized and readable.
        </li>
        <li>
          <span className='font-bold'>Scalability:</span> It&apos;s far simpler
          to add or modify styles with CVA, especially as project requirements
          evolve.
        </li>
      </ul>

      <p>
        Have you worked with CVA before? What tools have you used to create
        style variants?
      </p>
    </div>
  ),
};
