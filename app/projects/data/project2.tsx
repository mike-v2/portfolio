import { ProjectData } from '@/types/project';

export const journalTranscribe: ProjectData = {
  id: '2',
  imagePath: '/images/journal-transcribe-screenshot.jpg',
  title: 'Journal Transcription Assistant',
  subtitle: 'Efficiently Transcribe Journal Entries',
  link: 'https://mike-v2.github.io/journal-transcribe/',
  desktopOnly: true,
  source: 'https://github.com/mike-v2/journal-transcribe',
  summary:
    'A kind of Content Management Application that serves images of journal pages to users and provides the tools to quickly and conveniently transcribe them.',
  summaryMore:
    'The transcription is indexed and stored in a database so that another website can analyze and display them.',
  features: [
    'Process, index, and store images of journal pages',
    'Serve images of journal pages from firebase database',
    'Speech-to-text with added support for punctuation',
    'Click to zoom image for hard-to-read text',
    'Special annotation tools to enrich the text data',
  ],
  primaryTools: ['React', 'JavaScript', 'Firebase', 'GitHub'],
  secondaryTools: (
    <ul className='list-disc ps-4'>
      <li>React Speech Recognition</li>
      <li>React Inner Image Zoom</li>
    </ul>
  ),
};
