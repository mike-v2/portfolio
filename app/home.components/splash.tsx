import Image from 'next/image';

import SplashText from '@/app/home.components/splashText';
import MediaLinks from '@/app/home.components/mediaLinks';

export default function Splash() {
  return (
    <section className='relative'>
      <Image
        src='/images/background-spotlight-teal.jpg'
        alt='Image of spotlight'
        width={0}
        height={0}
        sizes='100vw'
        quality={100}
        className='h-auto w-full'
      />
      <div className='absolute inset-x-0 bottom-1/2 translate-y-1/2'>
        <SplashText />
      </div>
      <div className='absolute right-4 top-4 md:right-16 md:top-12'>
        <MediaLinks />
      </div>
    </section>
  );
}
