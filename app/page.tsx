import SkillPill from '@/components/skillPill'
import Image from 'next/image'
import Link from 'next/link'

const skillPillInfo = [
  {
    name: 'React',
    imagePath: '/images/react-logo.svg',
  },
  {
    name: 'Next.js',
    imagePath: '/images/nextjs-logo.svg',
    invert: true,
  },
  {
    name: 'HTML',
    imagePath: '/images/html-logo.svg',
  },
  {
    name: 'CSS',
    imagePath: '/images/css-logo.svg',
  },
  {
    name: 'Javascript',
    imagePath: '/images/js-logo.svg',
  }
]

const secondarySkillPillInfo = [
  {
    name: 'Tailwind CSS',
    imagePath: '/images/tailwind-logo.svg',
  },
  {
    name: 'Jest',
    imagePath: '/images/jest-logo.svg',
  },
  {
    name: 'GitHub',
    imagePath: '/images/github-logo.svg',
    invert: true,
  },
  {
    name: 'ChatGPT',
    imagePath: '/images/openai-logo.svg',
    invert: true,
  },
]

export default function Home() {
  return (
    <main className="">
      <section className='mt-24'>
        <div className='flex flex-col md:flex-row  mx-auto gap-y-4'>
          <span className='md:basis-1/2 lg:basis-1/3 pr-5 mr-12 md:mr-0'>
            <Image src='/images/headshot.png' className='h-auto' width={800} height={800} alt='profile pic' />
          </span>
          <span className='md:basis-1/2 lg:basis-2/3 flex flex-col pl-2 pe-4 max-w-2xl'>
            <h2 className='text-[clamp(2rem,4vw,3.5rem)] leading-none'>Welcome! I&apos;m </h2>
            <h2 className='text-[clamp(3rem,7vw,4rem)] leading-tight font-bold'>Michael McGuiness,</h2>
            <p className='pt-4 pb-6 ps-1 '>
              A front-end web developer with a strong foundation in React, Next.js, and <span className='whitespace-nowrap'>Tailwind CSS</span>, passionate about building functional, user-centric digital experiences.
            </p>
            <Link href='/contact'>
              <button className='btn w-fit bg-green-400 hover:bg-green-500 rounded-full px-8 dark:text-black'>Contact</button>
            </Link>
          </span>
        </div>
      </section>

      <section className='mt-32'>
        <div className="flex flex-wrap justify-center gap-8">
          {skillPillInfo && skillPillInfo.map((info, i) =>
            <SkillPill {...info} key={i} />
          )}
        </div>
        <div className="collapse mt-4 w-fit mx-auto bg-gradient-to-b from-base-300">
          <input type="checkbox" />
          <div className="collapse-title px-0">
            <h4 className='text-xl font-medium text-center'>More Skills</h4>
          </div>
          <div className="collapse-content">
            <div className='flex flex-wrap justify-center gap-8 mb-4 md:mx-8'>
              {secondarySkillPillInfo && secondarySkillPillInfo.map((info, i) =>
                <SkillPill {...info} key={i} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='my-40 max-w-5xl mx-auto'>
        <h2 className=' border-green-400 border-b-2  w-fit mx-auto text-4xl px-8 py-4 mb-12'>
          Highlighted Project
        </h2>
        <div className="flex flex-col gap-y-4 mx-auto">
          <div className="video-container relative w-full overflow-hidden mx-auto" >
            <iframe
              className='absolute inset-0 w-full h-full'
              width="853"
              height="480"
              src='https://www.youtube.com/embed/SmqiGkeuxo8'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className=''>
            <div className="flex">
              <h4 className='text-2xl flex flex-col justify-end'>
                Harry Howard&apos;s Journals
              </h4>
              <Link href='/projects' className='ml-auto'>
                <div className="btn bg-green-400 hover:bg-green-500 rounded-full px-8 dark:text-black">Go To Project</div>
              </Link>
            </div>
            <h6 className='text-lg italic pt-2'>Reimagining the exploration of historical journals with AI</h6>
            <p className=' pt-4 px-4'>Harry Howard&apos;s Journals is a cutting-edge web application that leverages Next.js, Python, and AI tools to make a rich collection of historical entries from the 1930s and 40s readily accessible.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
