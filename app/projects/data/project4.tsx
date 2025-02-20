import { Anchor } from '@/components/anchor';
import { ProjectData } from '@/types/project';

export const harrysJournals: ProjectData = {
  id: '4',
  imagePath: '/images/journal-search-chat.jpg',
  title: "Harry Howard's Journals",
  subtitle: 'Using AI to Make Big Data More Accessible',
  link: 'https://journal-search.vercel.app/',
  source: 'https://github.com/mike-v2/journal-search',
  summary:
    "I'm proud to introduce Harry Howard's Journals, an advanced web application that redefines the way we explore historical journal entries. Using Next.js, Python, and AI tools, the app processes and analyzes entries from the 1930s and 40s. These entries are enhanced by AI and made easily accessible, putting a treasure trove of historical data at your fingertips.",
  features: (
    <ul className='list-disc ps-4'>
      <li>
        Harry has been brought to life with state-of-the-art AI technology. Ask
        Harry detailed questions about the journals, or just chat! (powered by
        ChatGPT)
      </li>
      <li>Read journal entries one page at a time or easily skip around</li>
      <li>Search function for journal entries</li>
      <li>
        AI-generated topics for each entry allow users to understand an entry at
        a glance and link together stories woven through multiple entries
      </li>
      <li>
        Sign in with Google to keep track of pages read, save special passages
        and make posts to discuss entries with others
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
    'Prisma',
    'Supabase',
  ],
  secondaryTools: (
    <ul className='list-disc ps-4'>
      <li>
        Use Python library <Anchor href='https://opencv.org/'>OpenCV</Anchor> to
        preprocess images
      </li>
      <li>
        Run{' '}
        <Anchor href='https://github.com/clovaai/CRAFT-pytorch'>CRAFT</Anchor>{' '}
        AI locally to split images into lines
      </li>
      <li>Apply Google Vision API on lines</li>
      <li>Use GPT-4 to reconstruct journal entry from Google Vision output</li>
      <li>Generate metadata on journal entries with GPT-3.5 (ChatGPT) API</li>
      <li>Store data with Google Cloud Storage</li>
      <li>Run python scripts with Google Cloud Run</li>
    </ul>
  ),
};
