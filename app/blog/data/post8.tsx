import { Anchor } from '@/components/anchor';
import { BlogPost } from '@/types/postData';
import Header4 from '@/app/blog/components/header4';

export const post8: BlogPost = {
  title:
    "AI Awakens Ancestry: Interactive Innovation in Harry Howard's Journals",
  date: '2023-11-25',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_ai-awakens-ancestry-interactive-innovation-activity-7133983316197732352-_M7l',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        Thrilled to share a new feature in my web app, Harry Howard&apos;s
        Journals, where my great-grandfather&apos;s life leaps off the pages.
        His journals, rich with tales from the 30s and 40s, have inspired me to
        meld the reliability of traditional web development with the exciting
        possibilities of AI.
      </p>

      <div>
        <Header4>What&apos;s New?</Header4>
        <p>
          Now, users can engage with a ChatGPT-simulated Harry Howard directly
          on the homepage. This feature fuses OpenAI&apos;s advanced AI with the
          robustness of React and Next.js, transforming historical storytelling
          into an interactive, accessible digital experience.
        </p>
      </div>

      <div>
        <Header4>Tech Fusion</Header4>
        <p>
          The app combines the cutting-edge AI of ChatGPT with core web
          development practices, offering an immersive narrative journey that
          showcases the synergy between AI innovation and established web
          technologies.
        </p>
      </div>

      <div>
        <Header4>Behind the Scenes:</Header4>
        <ul className='list-disc ps-4'>
          <li>
            <span className='font-bold'>React & Next.js:</span> Utilized for
            dynamic user interactions and efficient routing, ensuring a smooth
            transition from initial engagement to a full conversation.
          </li>
          <li>
            <span className='font-bold'>State Management & URL Encoding:</span>{' '}
            Skillfully managed user input and conversation continuity,
            highlighting the importance of user experience in design.
          </li>
        </ul>
      </div>

      <div>
        <Header4>User Experience at the Forefront</Header4>
        <p>
          The focus was not just on technical integration, but also on creating
          an engaging, intuitive, and accessible interface. This enhances the
          overall storytelling aspect, making each interaction unique and
          personal.
        </p>
      </div>

      <div>
        <Header4>Your Thoughts?</Header4>
        <p>
          Whether you&apos;re a tech enthusiast, a storyteller, or simply
          curious, I&apos;d love to hear your thoughts on this fusion of AI and
          web development. How do you see such technologies shaping the future
          of online interaction?
        </p>
      </div>

      <p>Looking forward to your insights and feedback!</p>
      <p>
        Source:{' '}
        <Anchor href='https://github.com/mike-v2/journal-search'>
          github.com/mike-v2/journal-search
        </Anchor>
      </p>
    </div>
  ),
};
