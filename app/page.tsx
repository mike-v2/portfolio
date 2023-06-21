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
  },
  {
    name: 'HTML',
    imagePath: '/images/html-logo1.svg',
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
  },
  {
    name: 'ChatGPT',
    imagePath: '/images/openai-logo.svg',
  },
]

export default function Home() {
  return (
    <main className="">
      <section className='mt-24'>
        <div className='flex flex-col md:flex-row max-w-5xl mx-auto gap-y-4'>
          <span className='md:basis-1/2 lg:basis-1/3 pr-5'>
            <Image src='/images/profile_pic.jpg' className='rounded-xl mx-auto md:mx-0 md:ml-auto h-auto' width={300} height={300} alt='profile pic' />
          </span>
          <span className='md:basis-1/2 lg:basis-2/3 flex flex-col pl-2 pe-4'>
            <h2 className='text-[clamp(2rem,4vw,3.5rem)] leading-none'>Welcome! I'm </h2>
            <h2 className='text-[clamp(3rem,7vw,4rem)] leading-tight font-bold'>Michael McGuiness,</h2>
            <p className='pt-4 pb-6 ps-1 '>
              A front-end web developer with a strong foundation in React, Next.js, and Tailwind CSS, passionate about building functional, user-centric digital experiences.
            </p>
            <Link href='/contact'>
              <button className='btn w-fit bg-green-400 hover:bg-green-300 rounded-full px-8'>Contact</button>
            </Link>
          </span>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-center pt-32 gap-8">
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

      <section className='my-32 max-w-5xl mx-auto'>
        <h2 className='text-center text-4xl mb-12'>
          Highlighted Project
        </h2>

        <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 mx-auto">
          <div className='basis-1/2'>
            <Image src='/images/journal-search-screenshot.jpg' className='rounded-xl h-auto mx-auto' width={800} height={800} alt='profile pic' />
          </div>
          <div className='basis-1/2'>
            <h4 className='text-2xl pb-4 font-bold'>
              Harry Howard's Journals
            </h4>
            <h6 className='text-lg italic'>Reimagining the exploration of historical journals with AI</h6>
            <p className=' pt-2 px-4'>Harry Howard's Journals is a cutting-edge web application that leverages Next.js, Python, and AI tools to make a rich collection of historical entries from the 1930s and 40s readily accessible.</p>
          </div>
        </div>
        <div className='pt-4 px-2'>
          <div className='flex flex-col lg:flex-row gap-y-4 gap-x-4 mx-auto pt-6'>
            <div className='basis-1/2'>
              <h6 className='font-bold'>Key Features</h6>
              <ul className='flex flex-col gap-y-2 list-disc ps-8 pt-2'>
                <li>State-of-the-art AI interaction, allowing users to ask Harry questions about the journals or just chat, powered by ChatGPT</li>
                <li>AI-generated topics for each entry, enabling users to understand an entry at a glance and discover stories woven through multiple entries</li>
                <li>Users can log in to keep track of their progress, save favorite entries, and share discoveries with the community</li>
              </ul>
            </div>
            <div className='basis-1/2'>
              <h6 className='font-bold'>Technologies</h6>
              <ul className='flex flex-col gap-y-2 list-disc ps-8 pt-2'>
                <li>Next JS, Tailwind CSS, Daisy UI for the frontend</li>
                <li>AI technologies like ChatGPT API for enhanced interaction and GPT-4 for data reconstruction</li>
                <li>Prisma, Supabase, ElasticSearch, and Lunr Search for robust backend functionality</li>
              </ul>
            </div>
          </div>
          <div className='flex pt-6'>
            <p className='pr-4 italic text-sm'>Want to delve into the details? Check out the <a href='https://journal-search.vercel.app/' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>live project</a> or explore the <a href='https://github.com/mike-v2/journal-search' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>source code</a>.</p>
            <Link href='/projects' className='ml-auto'>
              <button className="btn btn-accent md:btn-wide ">More Projects</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
