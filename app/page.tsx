import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <section className='mt-24'>
        <div className='flex flex-col md:flex-row max-w-5xl mx-auto'>
          <span className='md:basis-1/3 mx-auto md:pt-20 pr-5'>
            <Image src='/images/profile_pic.jpg' className='rounded-xl' width={300} height={300} alt='profile pic' />
          </span>
          <span className='md:basis-2/3 p-2'>
            <h2 className='text-3xl font-bold'>
              Welcome! I'm Michael McGuiness,
            </h2>
            <p>
              <br />
              A front-end web developer with a strong foundation in React, Next.js, and Tailwind CSS, passionate about building functional, user-centric digital experiences.
              <br />
              <br />
              My unique background, which spans from VR game development to neural networks, allows me to draw from a broad palette of tools and approaches to solve complex problems. This multi-disciplinary perspective, combined with a knack for continuous learning, equips me to adapt to evolving tech landscapes and always find the right tool for the task, whether it be traditional front-end technologies or state-of-the-art AI tools like OpenAI's ChatGPT.
              <br />
              <br />
              What sets me apart is my exceptional interpersonal skills, honed during my years as a tutor. This experience taught me to appreciate the diversity of thought processes and to communicate complex concepts in a straightforward manner. It has shaped my ability to work effectively in teams, liaise between technical and non-technical stakeholders, and articulate design and development decisions clearly.
              <br />
              <br />
              I'm always seeking new challenges, particularly those that allow me to leverage my varied skill set to create impactful, innovative solutions. If you're looking for a developer with a wide-ranging toolkit and a collaborative approach, let's talk!
            </p>
          </span>
        </div>
      </section>

      <section className='mt-24 max-w-5xl mx-auto '>
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
