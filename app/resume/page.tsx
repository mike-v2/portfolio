import Image from 'next/image'

export default function Resume() {
  return (
    <main className="">
      <div className='w-full px-2 md:px-0 md:w-5/6 lg:w-3/4 mx-auto mt-12'>
        <div className='py-6'>
          <h4 className='font-bold text-xl'>
            Michael McGuiness
          </h4>
          <div className='flex flex-col lg:flex-row pt-4'>
            <p>Vancouver, WA</p>
            <div className="divider lg:divider-horizontal my-0 dark:before:bg-slate-600 dark:after:bg-slate-600"></div>
            <a href='https://www.mikemcguiness@protonmail.com' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>mikemcguiness@protonmail.com</a>
            <div className="divider lg:divider-horizontal my-0 dark:before:bg-slate-600 dark:after:bg-slate-600"></div>
            <p>
              LinkedIn: <a href='http://www.linkedin.com/in/michael-mcguiness-react' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>linkedin.com/in/michael-mcguiness-react</a>
            </p>
            <div className="divider lg:divider-horizontal my-0 dark:before:bg-slate-600 dark:after:bg-slate-600"></div>
            <p>
              GitHub: <a href='github.com/mike-v2' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>github.com/mike-v2</a>
            </p>
          </div>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>

        <div className='py-6'>
          <h2 className='font-bold'>
            PROFILE SUMMARY
          </h2>
          <p className='pt-4'>
            Innovative Front-End Developer with a diverse background in technologies ranging from VR game development to neural networks. Excels in React, Next.js, and Tailwind CSS with experience in developing interactive websites and applications. Passionate about solving complex problems and learning new technologies.
          </p>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>


        <div className='py-6'>
          <h2 className='font-bold'>
            TECHNICAL SKILLS
          </h2>
          <ul className='flex flex-col gap-y-2 pt-4'>
            <li><span className='font-bold'>Front-End:</span> HTML, CSS, JavaScript, Typescript, React, Next.js, Tailwind CSS, Jest, Git</li>
            <li><span className='font-bold'>Database Management:</span> Prisma, Supabase, Firebase</li>
            <li><span className='font-bold'>Cloud Services:</span> Google Cloud Storage, Google Cloud Run</li>
            <li><span className='font-bold'>APIs:</span> OpenAI API, Google Maps API, Yelp API</li>
            <li><span className='font-bold'>Others:</span> Python, Unity, C#, Blender</li>
          </ul>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>


        <div className='py-6'>
          <h2 className='font-bold'>
            EDUCATION
          </h2>
          <div className="flex flex-col gap-y-2 pt-4">
            <div className='flex'>
              <p>
                Bachelor of Science in Mathematics, Cum Laude
              </p>
              <div className="divider divider-horizontal"></div>
              <p>
                Washington State University
              </p>
              <div className="divider divider-horizontal"></div>
              <p>
                2007 - 2010
              </p>
              <div className="divider divider-horizontal"></div>
            </div>
            <div className='flex'>
              <p>
                Bachelor of Science in Biotechnology, Cum Laude
              </p>
              <div className="divider divider-horizontal"></div>
              <p>
                Washington State University
              </p>
              <div className="divider divider-horizontal"></div>
              <p>
                2007 - 2010
              </p>
              <div className="divider divider-horizontal"></div>
            </div>
          </div>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>


        <div className='py-6'>
          <h2 className='font-bold'>
            WORK EXPERIENCE
          </h2>
          <div className='flex pt-4'>
            <p className='font-bold'>
              Tutor
            </p>
            <div className="divider divider-horizontal"></div>
            <p>
              Various organizations and Freelance
            </p>
            <div className="divider divider-horizontal"></div>
            <p>
              2008 - present
            </p>
          </div>
          <ul className='flex flex-col gap-y-2 list-disc ps-8 pt-4'>
            <li>Provided tutoring in Math, Physics, and Biology, offering one-on-one and group assistance</li>
            <li>Developed interpersonal skills through empathy, patience, and clear communication</li>
            <li>Gained proficiency in explaining complex concepts in an understandable manner</li>
          </ul>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>


        <div className='py-6'>
          <h2 className='font-bold pb-4'>
            PROJECTS
          </h2>
          <div className='pb-4'>
            <h4 className='font-bold pb-2'>
              Service Now Auto Repair
            </h4>
            <ul className='flex flex-col gap-y-2 list-disc ps-8'>
              <li>Developed a responsive web application with real-time review data and integrated Google Maps</li>
              <li>Project Link: <a href="https://service-now-auto-repair.vercel.app/" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' >service-now-auto-repair.vercel.app</a></li>
            </ul>
          </div>
          <div className='pb-4'>
            <h4 className='font-bold pb-2'>
              Journal Transcribe
            </h4>
            <ul className='flex flex-col gap-y-2 list-disc ps-8'>
              <li>Designed a system to process, index, and store images of journal pages, featuring user input, zoom functionality, and speech-to-text capabilities</li>
              <li>Project Link: <a href="https://mike-v2.github.io/journal-transcribe/" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>mike-v2.github.io/journal-transcribe</a></li>
            </ul>
          </div>
          <div className=''>
            <h4 className='font-bold pb-2'>
              Harry Howard&apos;s Journals
            </h4>
            <ul className='flex flex-col gap-y-2 list-disc ps-8'>
              <li>Created a user-focused platform for browsing and searching journal entries, with state-of-the-art AI that enables users to explore a large dataset with natural language</li>
              <li>Project Link: <a href="https://journal-search.vercel.app/" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>journal-search.vercel.app</a></li>
            </ul>
          </div>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>


        <div className='py-6'>
          <h2 className='font-bold'>
            INTERESTS
          </h2>
          <p className='pt-4'>
            Gardening, Cooking, Exercising
          </p>
        </div>
      </div>
    </main>
  )
}
