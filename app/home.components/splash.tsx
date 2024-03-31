import Image from 'next/image';

import SplashText from '@/app/home.components/splashText';
import MediaLinks from '@/app/home.components/mediaLinks';

export default function Splash() {
  return (
    <section className='relative flex min-h-screen items-center bg-black'>
      <Image
        src='/images/background-spotlight-teal.jpg'
        alt='Image of spotlight'
        quality={100}
        fill
        className='object-contain'
      />
      <SplashText />
      <div className='absolute inset-x-0 bottom-8'>
        <MediaLinks />
      </div>
    </section>
  );
}
