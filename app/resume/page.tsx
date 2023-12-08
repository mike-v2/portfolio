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
            <a href='mailto:mikemcguiness@protonmail.com' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>mikemcguiness@protonmail.com</a>
            <div className="divider lg:divider-horizontal my-0 dark:before:bg-slate-600 dark:after:bg-slate-600"></div>
            <p>
              LinkedIn: <a href='http://www.linkedin.com/in/michael-mcguiness-react' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>linkedin.com/in/michael-mcguiness-react</a>
            </p>
            <div className="divider lg:divider-horizontal my-0 dark:before:bg-slate-600 dark:after:bg-slate-600"></div>
            <p>
              GitHub: <a href='https://github.com/mike-v2' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>github.com/mike-v2</a>
            </p>
          </div>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>

        <div className='py-6'>
          <h2 className='font-bold pb-4'>
            PROJECTS
          </h2>
          <div className="flex flex-col gap-y-4">
            <div className=''>
              <div className="flex">
                <h4 className='font-bold pb-2'>
                  Recreating React
                </h4>
                <div className='ms-auto'>
                  <div className="flex gap-x-4 text-sm">
                    <a href='https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Article</a>
                    <a href='https://youtu.be/BU37lgD28lU' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Video</a>
                    <a href='https://github.com/mike-v2/react-from-scratch' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Source</a>
                  </div>
                </div>
              </div>

              <ul className='flex flex-col gap-y-2 list-disc ps-8'>
                <li>Demonstrated strong technical proficiency by recreating React&apos;s core functions, including createElement and render, to understand the intricacies of JSX transformation and virtual DOM.</li>
                <li>Showcased effective problem-solving and self-learning skills through the hands-on experience of developing custom hooks, such as useState and useEffect, to manage state and side effects in functional components.</li>
                <li>Enhanced communication skills by documenting the project&apos;s process and results in a comprehensive Medium article and a YouTube video, making complex technical information accessible and understandable.</li>
              </ul>
            </div>

            <div className=''>
              <div className="flex">
                <h4 className='font-bold pb-2'>
                  Harry Howard&apos;s Journals
                </h4>
                <div className='ms-auto'>
                  <div className="flex gap-x-4 text-sm">
                    <a href='https://journal-search.vercel.app/' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Link</a>
                    <a href='https://github.com/mike-v2/journal-search' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Source</a>
                  </div>
                </div>
              </div>

              <ul className='flex flex-col gap-y-2 list-disc ps-8'>
                <li>Engineered an advanced search engine capable of analyzing over a thousand documents for conceptual similarity, not just keyword matches. Implemented with OpenAI embeddings and Google Cloud Storage.</li>
                <li>Introduced a chat function for intuitive natural language querying, revolutionizing the accessibility of vast journal data. Integrated OpenAI embeddings with Vercel’s AI library for real-time data streaming.</li>
                <li>Incorporated community features for sharing and discussion, fostering engagement around interwoven journal narratives. Managed data with Prisma/Supabase and secured authentication using next-auth and Google Sign-In.</li>
                <li>Developed a custom AI solution to transcribe cursive handwriting, improving accuracy from 60% to 90%. Utilized Python, OpenCV, CRAFT AI, Google Vision API, and OpenAI’s GPT-4.</li>
                <li>Employed AI to preprocess and summarize journal entries, enhancing organization and presentation. Leveraged Python and OpenAI API.</li>
              </ul>
            </div>

            <div className=''>
              <div className="flex">
                <h4 className='font-bold pb-2'>
                  Journal Transcription Assistant
                </h4>
                <div className='ms-auto'>
                  <div className="flex gap-x-4 text-sm">
                    <a href='https://mike-v2.github.io/journal-transcribe/' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Link (desktop only)</a>
                    <a href='https://github.com/mike-v2/journal-transcribe' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Source</a>
                  </div>
                </div>
              </div>

              <ul className='flex flex-col gap-y-2 list-disc ps-8'>
                <li>Developed a system to process, index, and store journal images, serving them for user transcription. Incorporated annotation tools to enrich data capture. Data management done using Firebase.</li>
                <li>Implemented speech-to-text functionality enhanced with punctuation recognition through regular expressions. Utilized the React Speech Recognition library.</li>
              </ul>
            </div>
            <div className=''>
              <div className="flex">
                <h4 className='font-bold pb-2'>
                  Good News!
                </h4>
                <div className='ms-auto'>
                  <div className="flex gap-x-4 text-sm">
                    <a href='https://good-news-three.vercel.app/' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Link</a>
                    <a href='https://github.com/mike-v2/good-news' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Source</a>
                  </div>
                </div>
              </div>

              <ul className='flex flex-col gap-y-2 list-disc ps-8'>
                <li>Established an automated data collection and processing pipeline, minimizing manual intervention, with Google Cloud Functions, Cloud Scheduler, and Firebase.</li>
                <li>Automated the collection of global news stories using the Mediastack API and employed OpenAI API to assess and filter articles based on positivity and relevance.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>

        <div className='py-6'>
          <h2 className='font-bold'>
            EDUCATION
          </h2>
          <div className="flex flex-col gap-y-2 pt-4">
            <div className='flex justify-between'>
              <p>
                <span className='font-bold sm:whitespace-nowrap'>Bachelor of Science in Mathematics</span>, Cum Laude
              </p>
              <div className="divider divider-horizontal"></div>
              <p>
                Washington State University
              </p>
              <div className="divider divider-horizontal"></div>
              <p className='font-bold sm:whitespace-nowrap'>
                2007 - 2010
              </p>
            </div>
            <div className='flex justify-between'>
              <p>
                <span className='font-bold sm:whitespace-nowrap'>Bachelor of Science in Biotechnology</span>, Cum Laude
              </p>
              <div className="divider divider-horizontal"></div>
              <p>
                Washington State University
              </p>
              <div className="divider divider-horizontal"></div>
              <p className='font-bold sm:whitespace-nowrap'>
                2007 - 2010
              </p>
            </div>
          </div>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>

        <div className='py-6'>
          <h2 className='font-bold'>
            WORK EXPERIENCE
          </h2>
          <div className='flex justify-between pt-4'>
            <p className='font-bold'>
              Tutor
            </p>
            <div className="divider divider-horizontal"></div>
            <p>
              Various organizations and Freelance
            </p>
            <div className="divider divider-horizontal"></div>
            <p className='font-bold'>
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
          <h2 className='font-bold'>
            TECHNICAL SKILLS
          </h2>
          <ul className='flex flex-col gap-y-2 pt-4'>
            <li><span className='font-bold'>Front-End:</span> HTML, CSS, JavaScript, Typescript, React, Next.js, Tailwind CSS, Jest, Git</li>
            <li><span className='font-bold'>Database Management:</span> Prisma, Supabase (PostgreSQL), Firebase</li>
            <li><span className='font-bold'>Cloud Services:</span> Google Cloud Storage, Google Cloud Run, Google Cloud Functions</li>
            <li><span className='font-bold'>APIs:</span> OpenAI API, Google Maps API, Yelp API</li>
            <li><span className='font-bold'>Others:</span> Python, Unity, C#, Blender</li>
          </ul>
        </div>

        <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
        <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>

        <div className='py-6'>
          <h2 className='font-bold'>
            RESEARCH CONTRIBUTIONS
          </h2>
          <ul className='flex flex-col gap-y-2 pt-4'>
            <li>Rana V Smalling, Don A Delker, Yuxia Zhang, Natalia Nieto, <span className='font-bold'>Michael S McGuiness</span>, Shuanghu Liu, Scott L Friedman, Curt H Hagedorn, Li Wang. &quot;Genome-wide transcriptome analysis identifies novel gene signatures implicated in human
              chronic liver disease&quot; - <span className='italic'>American Journal of Physiology - Gastrointestinal and Liver Physiology</span>, 2013.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
