import { ProjectData } from '@/types/project';

export const goodNews: ProjectData = {
  id: '3',
  imagePath: '/images/good-news.jpg',
  title: 'Good News!',
  subtitle: 'An Automated Pipeline for Finding Positive News Stories with AI',
  link: 'https://good-news-three.vercel.app/',
  source: 'https://github.com/mike-v2/good-news',
  summary:
    "Good News! aggregates global news stories through reputable news aggregator APIs, meticulously collecting articles related to building and construction projects, as well as advancements in healthcare, education, and peace. To identify the most uplifting and positive stories, I employ advanced AI analysis, powered by OpenAI's GPT. This sophisticated natural language processing helps to filter and present news that sparks optimism and inspiration, shedding light on the progress and goodwill that is constantly unfolding around the world.",
  features: (
    <ul className='list-disc ps-4'>
      <li>
        Aggregates positive news stories from around the world related to
        construction projects, healthcare advancements, educational progress,
        and peace initiatives
      </li>
      <li>Interactable world map representing source countries</li>
      <li>Updated daily with new articles</li>
      <li>
        Automated data collection and processing pipeline that requires minimal
        manual intervention
      </li>
      <li>
        Utilizes OpenAI&apos;s GPT API to evaluate and filter news stories based
        on positivity and relevance to the chosen categories
      </li>
    </ul>
  ),
  primaryTools: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Tailwind CSS',
    'Daisy UI',
    'ChatGPT API',
    'Firebase',
    'Google Cloud Functions',
    'Mediastack API',
  ],
  secondaryTools: (
    <ul className='list-disc ps-4'>
      <li>React Simple Maps</li>
    </ul>
  ),
};
