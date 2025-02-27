import { ProjectData } from '@/types/project';

export const mechanicWebsite: ProjectData = {
  id: '1',
  imagePath: '/images/dave-website.jpg',
  title: 'Service Now Auto Repair',
  subtitle: 'Small Business Redesign',
  link: 'https://service-now-auto-repair.vercel.app/',
  source: 'https://github.com/mike-v2/service-now-auto-repair',
  summary:
    'An update of an old website to make it clean, responsive, and consistent with modern design principles',
  features: [
    'Updates review data in realtime',
    'Embeds Google Map to display business location',
  ],
  primaryTools: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Bootstrap',
    'GitHub',
  ],
  secondaryTools: ['Google Places API', 'Google Maps API', 'Yelp API'],
};
