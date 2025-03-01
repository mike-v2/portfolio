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
    'A Content Management Application that serves images of journal pages to users and provides the tools to quickly and conveniently transcribe them.',
  summaryMore:
    'The transcription is indexed and stored in a database so that another website can analyze and display them.',
  features: [
    'Processes, indexes, and stores images of journal pages',
    'Serves images of journal pages from firebase database',
    'Allows for convenient transcription with speech-to-text, including added support for punctuation',
    'Expands image on click for hard-to-read text',
    'Enriches text data with special annotation tools',
  ],
  primaryTools: ['React', 'JavaScript', 'Firebase', 'GitHub'],
  secondaryTools: ['React Speech Recognition', 'React Inner Image Zoom'],
};
