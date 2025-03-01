import Image from 'next/image';

import { BlogPost } from '@/types/postData';
import Header4 from '@/app/blog/components/header4';

export const post11: BlogPost = {
  id: '11',
  imagePath: 'blog-auth',
  title: 'Request Rundown: Navigating the Nuances of Authenticated Access',
  date: '2024-03-19',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_logging-in-is-just-the-start-what-happens-activity-7175900680732258304-4Zlb',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        {` Logging in is just the start. What happens next in a web app when you want access to your personalized data? Express, Express-Session, and Passport.js not only simplify the login process but also make it easy to handle authenticated requests. `}
      </p>
      <p>
        {`In this post, we'll focus on what happens after a user has successfully logged in. I'll guide you through each step, from the user making a request for personalized data, to verifying the user's identity, and finally sending back the requested information. By the end, you'll have a clear understanding of how to secure your application's routes and data using Express, Express-Session, and Passport.js.`}
      </p>

      <ul className='flex list-decimal flex-col gap-y-3 ps-4'>
        <li>
          <Header4>User Makes Authenticated Request</Header4>A user asks for
          data that is specific to them, like book recommendations, by sending a
          request that includes proof of being logged in.
        </li>
        <li>
          <Header4>Receive Request on Back End</Header4>
          {`Our server catches the request and gets ready to check if it's from a recognized user.`}
        </li>
        <li>
          <Header4>Express-Session Validates Session Cookie</Header4>
          {`We confirm the user's 'digital ID card' (session cookie) is valid, ensuring they are who they say they are.`}
        </li>
        <li>
          <Header4>Retrieve User Data</Header4>
          {`Using the session cookie, we find the user's full details in our records to understand who's asking for data.`}
        </li>
        <li>
          <Header4>Passport Attaches User Data to req.user</Header4>
          {`We attach the user's details to the request, making it easy to access their information that may be necessary to process the request.`}
        </li>
        <li>
          <Header4>Use req.user to Retrieve Data and Send to Client</Header4>
          {`With the user's info at hand, we fetch what they asked for (like their favorite genres' books) and send it back to them.`}
        </li>
      </ul>

      <Image
        src='/images/auth-request.jpg'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='Diagram showing authenticated request flow'
      />
    </div>
  ),
};
