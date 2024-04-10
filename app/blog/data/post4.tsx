import { BlogPost } from '@/types/postData';
import EmbeddedVideo from '@/app/blog/components/embeddedVideo';

export const post4: BlogPost = {
  id: '4',
  title:
    'Adding Authentication to my Next.js App with Next-Auth and Google Sign In',
  date: '2023-10-09',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_adding-authentication-to-my-nextjs-app-with-activity-7117230565690380289-NnMw',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        {`Adding authentication is easy and straightforward with Next-Auth and
          Google Sign In. In this video I discuss how I did it, some stumbling
          blocks I ran into, as well as a quick explanation of what's happening
          behind the scenes.`}
      </p>

      <EmbeddedVideo src='https://www.youtube.com/embed/9A7fVwSDvzw' />
    </div>
  ),
};
