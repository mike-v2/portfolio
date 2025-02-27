import { ProjectData } from '@/types/project';

export const harrysJournals: ProjectData = {
  id: '4',
  imagePath: '/images/journal-search-chat.jpg',
  title: "Harry Howard's Journals",
  subtitle: 'Using AI to Make Big Data More Accessible',
  link: 'https://journal-search.vercel.app/',
  source: 'https://github.com/mike-v2/journal-search',
  summary:
    "I'm proud to introduce Harry Howard's Journals, an advanced web application that redefines the way we explore historical journal entries.",
  summaryMore:
    'Using Next.js, Python, and AI tools, the app processes and analyzes entries from the 1930s and 40s. These entries are enhanced by AI and made easily accessible, putting a treasure trove of historical data at your fingertips.',
  features: [
    'Harry has been brought to life with state-of-the-art AI technology. Ask Harry detailed questions about the journals, or just chat! (powered by ChatGPT)',
    'Read journal entries one page at a time or easily skip around',
    'Search function for journal entries',
    'AI-generated topics for each entry allow users to understand an entry at a glance and link together stories woven through multiple entries',
    'Sign in with Google to keep track of pages read, save special passages and make posts to discuss entries with others',
  ],
  primaryTools: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Tailwind CSS',
    'ChatGPT API',
    'Prisma',
    'Supabase',
  ],
  secondaryTools: [
    'Uses Python library OpenCV to preprocess images',
    'Runs CRAFT AI locally to split images into lines',
    'Applies Google Vision API on individual lines of text',
    'Uses GPT-4 to reconstruct journal entry from Google Vision output',
    'Generates metadata on journal entries with GPT-3.5 API',
    'Stores data with Google Cloud Storage',
    'Runs python scripts with Google Cloud Run',
  ],
};
