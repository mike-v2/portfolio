import Image from 'next/image';

import { Anchor } from '@/components/anchor';
import { BlogPost } from '@/types/postData';

export const post6: BlogPost = {
  id: '6',
  imagePath: 'blog-cutout',
  title:
    'Turn the Corner on Your Web Design Skills with This CSS Page Fold Trick',
  date: '2023-10-31',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_css-frontenddevelopment-webdevelopment-activity-7125279394880753664-o79O',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        I wanted to share this cool CSS trick I learned that gives the
        appearance of a page corner folding. This effect can increase visual
        interest by adding depth to the page, and it can also complement themes
        related to books, writing, or even vintage styles.
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

      <p>Now, let&apos;s set the CSS properties:</p>
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
          Set the width/height of the class that we&apos;ll apply to the square.
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
        Don&apos;t forget to add some drop shadow to give it a feeling of depth!
        And there you have it - a cool page corner fold effect using CSS!
      </p>

      <p>
        📊 In my project, I made variables for the square width and cutout
        diagonal so that I could adjust them from my component after the user
        hovers over the corner.{' '}
        <Anchor href='https://github.com/mike-v2/journal-search'>
          [Project Source]
        </Anchor>
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
};
