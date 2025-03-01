import { Anchor } from '@/components/anchor';
import { BlogPost } from '@/types/postData';
import EmbeddedVideo from '@/app/blog/components/embeddedVideo';

export const post5: BlogPost = {
  id: '5',
  imagePath: 'recreating-react-logo',
  title: 'Recreating React',
  date: '2023-10-23',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_react-javascript-frontenddevelopment-activity-7122370503448657922-1oCI',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        {`So, I've been using React for a while now, and recently I decided to
          really dive deep and understand the nuts and bolts of it. There were
          always these questions that kept popping up in my mind, like "How does
          React transform all that JSX jargon into delightful DOM nodes?" and
          "How do hooks keep track of their state?" So, I decided to find out!`}
      </p>
      <p>
        Following the advice of{' '}
        <Anchor href='https://www.linkedin.com/in/raymond-gan-0ba8011'>
          Raymond Gan
        </Anchor>{' '}
        and others, I took on the challenge of creating my own React clone. I
        thought it would not only be a great learning experience but also a
        fantastic way to showcase my abilities as a junior developer.
      </p>
      <p>
        Going into this project, I thought I had a pretty solid grasp of React,
        but boy, was I wrong! I learned so much more by actually building it
        from scratch. For instance, I always thought state was closely tied to
        the component it resides in. But turns out, all the hooks from an app
        are kept in a single global hooks array, and each hook just keeps a
        reference to its index in that array. I was quite surprised to discover
        this!
      </p>
      <p>
        {`If you're curious to see how I did it, I've written a detailed article
          over on Medium that you can check out. I included the software tests
          so you can see exactly what its capabilities are. Plus, I made a
          YouTube video demonstrating the whole thing in action. Feel free to
          take a look, and let me know your thoughts!`}
      </p>
      <p>
        In-depth explanation:{' '}
        <Anchor href='https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5'>
          Medium Article
        </Anchor>
      </p>
      <p>
        Source:{' '}
        <Anchor href='https://github.com/mike-v2/react-from-scratch'>
          GitHub Project
        </Anchor>
      </p>

      <EmbeddedVideo src='https://www.youtube.com/embed/BU37lgD28lU' />
    </div>
  ),
};
