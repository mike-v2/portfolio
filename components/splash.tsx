import Image from 'next/image';
import Link from 'next/link';

export default function Splash() {
  return (
    <section className='mt-24'>
      <div className='mx-auto flex flex-col gap-y-4 md:flex-row'>
        <span className='mr-12 pr-5 md:mr-0 md:basis-1/2 lg:basis-1/3'>
          <Image
            src='/images/headshot.png'
            className='h-auto w-full'
            width={0}
            height={0}
            sizes='100vw'
            alt='profile pic'
            priority
          />
        </span>
        <span className='flex max-w-2xl flex-col pe-4 pl-2 md:basis-1/2 lg:basis-2/3'>
          <h2 className='text-[clamp(2rem,4vw,3.5rem)] leading-none'>
            Welcome! I&apos;m{' '}
          </h2>
          <h2 className='text-[clamp(3rem,7vw,4rem)] font-bold leading-tight'>
            Michael McGuiness
          </h2>
          <p className='pb-6 ps-1 pt-4 '>
            Passionate Full-Stack Developer adept at harnessing the latest in
            web technologies and AI to craft seamless, user-centric digital
            experiences. With expertise in React, Next.js, and Node.js, I&apos;m
            dedicated to evolving with the tech landscape to build the future of
            interactive applications.
          </p>
          <Link href='/contact'>
            <button className='btn w-fit rounded-full bg-green-400 px-8 text-black hover:bg-green-500'>
              Contact
            </button>
          </Link>
        </span>
      </div>
    </section>
  );
}
