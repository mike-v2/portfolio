import { Anchor } from '@/components/anchor';

export const projectData: ProjectData[] = [
  {
    imagePath: '/images/recreating-react-logo.png',
    title: 'Recreating React',
    subtitle: 'Building Four Core Features of React',
    article: 'https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5',
    video: 'https://youtu.be/BU37lgD28lU',
    source: 'https://github.com/mike-v2/react-from-scratch',
    summary: (
      <span>
        In this self-driven project, I undertook the challenge of recreating a
        simplified version of React from scratch to deepen my understanding of
        its inner workings.By building out core functions like createElement,
        render, useState, and useEffect, I gained valuable insights into JSX
        transformation, DOM manipulation, and state management.This hands-on
        experience has not only solidified my grasp of React fundamentals but
        also honed my problem-solving skills.I&apos;ve documented my journey and
        the technical intricacies of the project in a{' '}
        <Anchor href='https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5'>
          Medium article
        </Anchor>{' '}
        and a <Anchor href='https://youtu.be/BU37lgD28lU'>YouTube video</Anchor>{' '}
        for those interested in diving deeper.
      </span>
    ),
    features: (
      <ul className='list-disc ps-4'>
        <li key='createElement'>
          <span className='font-bold'>createElement</span> transforms JSX into
          ReactElement objects
        </li>
        <li key='render'>
          <span className='font-bold'>render</span> brings ReactElements to life
          on the DOM
        </li>
        <li key='useState'>
          <span className='font-bold'>useState</span> manages state
        </li>
        <li key='useEffect'>
          <span className='font-bold'>useEffect</span> synchronizes the
          component with an external system
        </li>
      </ul>
    ),
    primaryTools: ['TypeScript', 'Parcel'],
    secondaryTools: (
      <ul className='list-disc ps-4'>
        <li>Jest</li>
        <li>Prettier</li>
        <li>GitHub</li>
      </ul>
    ),
  },
  {
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
          Harry has been brought to life with state-of-the-art AI technology.
          Ask Harry detailed questions about the journals, or just chat!
          (powered by ChatGPT)
        </li>
        <li>Read journal entries one page at a time or easily skip around</li>
        <li>Search function for journal entries</li>
        <li>
          AI-generated topics for each entry allow users to understand an entry
          at a glance and link together stories woven through multiple entries
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
          Use Python library <Anchor href='https://opencv.org/'>OpenCV</Anchor>{' '}
          to preprocess images
        </li>
        <li>
          Run{' '}
          <Anchor href='https://github.com/clovaai/CRAFT-pytorch'>CRAFT</Anchor>{' '}
          AI locally to split images into lines
        </li>
        <li>Apply Google Vision API on lines</li>
        <li>
          Use GPT-4 to reconstruct journal entry from Google Vision output
        </li>
        <li>Generate metadata on journal entries with GPT-3.5 (ChatGPT) API</li>
        <li>Store data with Google Cloud Storage</li>
        <li>Run python scripts with Google Cloud Run</li>
      </ul>
    ),
  },
  {
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
          Automated data collection and processing pipeline that requires
          minimal manual intervention
        </li>
        <li>
          Utilizes OpenAI&apos;s GPT API to evaluate and filter news stories
          based on positivity and relevance to the chosen categories
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
  },
  {
    imagePath: '/images/journal-transcribe-screenshot.jpg',
    title: 'Journal Transcription Assistant',
    subtitle: 'Efficiently Transcribe Journal Entries',
    link: 'https://mike-v2.github.io/journal-transcribe/',
    desktopOnly: true,
    source: 'https://github.com/mike-v2/journal-transcribe',
    summary:
      'A kind of Content Management Application that serves images of journal pages to users and provides the tools to quickly and conveniently transcribe them. The transcription is indexed and stored in a database so that another website can analyze and display them.',
    features: (
      <ul className='list-disc ps-4'>
        <li>Process, index, and store images of journal pages</li>
        <li>Serve images of journal pages from firebase database</li>
        <li>Speech-to-text with added support for punctuation</li>
        <li>Click to zoom image for hard-to-read text</li>
        <li>Special annotation tools to enrich the text data</li>
      </ul>
    ),
    primaryTools: ['React', 'JavaScript', 'Firebase', 'GitHub'],
    secondaryTools: (
      <ul className='list-disc ps-4'>
        <li>React Speech Recognition</li>
        <li>React Inner Image Zoom</li>
      </ul>
    ),
  },
  {
    imagePath: '/images/dave-website.jpg',
    title: 'Service Now Auto Repair',
    subtitle: 'Small Business Redesign',
    link: 'https://service-now-auto-repair.vercel.app/',
    source: 'https://github.com/mike-v2/service-now-auto-repair',
    summary:
      'An update of an old website to make it clean, responsive, and consistent with modern design principles',
    features: (
      <ul className='list-disc ps-4'>
        <li>Splash page</li>
        <li>Navbar and Footer</li>
        <li>Responsive</li>
        <li>Realtime review data</li>
        <li>Embedded Google Map</li>
      </ul>
    ),
    primaryTools: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Bootstrap',
      'GitHub',
    ],
    secondaryTools: (
      <ul className='list-disc ps-4'>
        <li>Google Places API</li>
        <li>Google Maps API</li>
        <li>Yelp API</li>
      </ul>
    ),
  },
];
