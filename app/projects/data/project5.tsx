import { ProjectData } from '@/types/project';

export const recreatingReact: ProjectData = {
  id: '5',
  imagePath: '/images/recreating-react-logo.png',
  title: 'Recreating React',
  subtitle: 'Building Four Core Features of React',
  article: 'https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5',
  video: 'https://youtu.be/BU37lgD28lU',
  source: 'https://github.com/mike-v2/react-from-scratch',
  summary:
    'In this self-driven project, I undertook the challenge of recreating a simplified version of React from scratch to deepen my understanding of its inner workings.',
  summaryMore:
    "By building out core functions like createElement, render, useState, and useEffect, I gained valuable insights into JSX transformation, DOM manipulation, and state management. This hands-on experience has not only solidified my grasp of React fundamentals but also honed my problem-solving skills. I've documented my journey and the technical intricacies of the project in a Medium article and a YouTube video for those interested in diving deeper (links below).",
  features: [
    'createElement transforms JSX into ReactElement objects',
    'render brings ReactElements to life on the DOM',
    'useState manages state',
    'useEffect synchronizes the component with an external system',
  ],
  primaryTools: ['TypeScript', 'Parcel', 'Jest'],
  secondaryTools: ['Prettier', 'GitHub'],
};
