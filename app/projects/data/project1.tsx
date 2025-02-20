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
};
