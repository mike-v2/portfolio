import Link from 'next/link';

export default function HighlightedProject() {
  return (
    <section className='mx-auto my-40 max-w-5xl'>
      <h2 className=' mx-auto mb-12  w-fit border-b-2 border-green-400 px-8 py-4 text-4xl'>
        Highlighted Project
      </h2>
      <div className='mx-auto flex flex-col gap-y-4'>
        <div className='video-container relative mx-auto w-full overflow-hidden'>
          <iframe
            className='absolute inset-0 h-full w-full'
            width='853'
            height='480'
            src='https://www.youtube.com/embed/SmqiGkeuxo8'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
        <div className=''>
          <div className='flex'>
            <h4 className='flex flex-col justify-end text-2xl'>
              Harry Howard&apos;s Journals
            </h4>
            <Link href='/projects' className='ml-auto'>
              <div className='btn rounded-full bg-green-400 px-8 text-black hover:bg-green-500'>
                Go To Project
              </div>
            </Link>
          </div>
          <h6 className='pt-2 text-lg italic'>
            Reimagining the exploration of historical journals with AI
          </h6>
          <p className=' px-4 pt-4'>
            Harry Howard&apos;s Journals is a cutting-edge web application that
            leverages Next.js, Python, and AI tools to make a rich collection of
            historical entries from the 1930s and 40s readily accessible.
          </p>
        </div>
      </div>
    </section>
  );
}
