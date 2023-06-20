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
]

export default function Home() {
  return (
    <main className="">
      <section className='mt-24'>
        <div className='flex flex-col md:flex-row max-w-5xl mx-auto'>
          <span className='md:basis-1/3 mx-auto pr-5'>
            <Image src='/images/profile_pic.jpg' className='rounded-xl' width={300} height={300} alt='profile pic' />
          </span>
          <span className='md:basis-2/3 flex flex-col pl-2'>
            <div className='text-[clamp(3rem,7vw,5rem)]'>
              <h2 className='leading-none'>Welcome! I'm </h2>
              <h2 className=' leading-tight font-bold'>Michael McGuiness,</h2>
            </div>
            <p className='pt-4'>
              A front-end web developer with a strong foundation in React, Next.js, and Tailwind CSS, passionate about building functional, user-centric digital experiences.
            </p>
          </span>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-center pt-32 gap-8">
          {skillPillInfo && skillPillInfo.map((info, i) =>
            <SkillPill {...info} key={i} />
          )}
        </div>
        <div tabIndex={0} className="collapse bg-base-200 mt-4 w-3/4 mx-auto">
          <div className="collapse-title text-xl font-medium text-center px-0">
            More Skills
          </div>
          <div className="collapse-content flex flex-wrap justify-center gap-8">
            {secondarySkillPillInfo && secondarySkillPillInfo.map((info, i) =>
              <SkillPill {...info} key={i} />
            )}
          </div>
        </div>
      </section>

      <section className='mt-32 max-w-5xl mx-auto '>
        <h2 className='text-center text-2xl mb-8'>
          Highlighted Project
        </h2>
        <h4 className='text-center text-xl font-bold'>
          Harry Howard's Journals
        </h4>
        <div className=''>
          <Image src='/images/journal-search-screenshot.jpg' className='rounded-xl w-auto mx-auto' width={800} height={800} alt='profile pic' />
        </div>
        <div className='pt-4 px-2'>
          <h6 className='text-center text-lg italic'>Reimagining the exploration of historical journals with AI</h6>
          <p className='max-w-3xl mx-auto pt-2'>Harry Howard's Journals is a cutting-edge web application that leverages Next.js, Python, and AI tools to make a rich collection of historical entries from the 1930s and 40s readily accessible.</p>
          <div className='flex flex-col lg:flex-row gap-y-4 gap-x-4  mx-auto pt-6'>
            <div className='basis-1/2'>
              <h6 className='font-bold'>Key Features</h6>
              <ul className='flex flex-col gap-y-2 list-disc ps-8 pt-2'>
                <li>State-of-the-art AI interaction, allowing users to ask Harry questions about the journals or just chat, powered by ChatGPT</li>
                <li>Search function that lets users easily explore the journal entries</li>
                <li>AI-generated topics for each entry, enabling users to understand an entry at a glance and discover stories woven through multiple entries</li>
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
