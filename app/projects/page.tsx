import Image from 'next/image'

export default function Projects() {
  return (
    <main className="">
      <h1 className='text-2xl text-center w-full my-20'>
        Projects
      </h1>

      <div className='flex flex-col lg:flex-row w-full lg:w-4/5 max-w-5xl mx-auto'>
        <div className='flex flex-col justify-center w-full lg:w-1/2'>
          <Image src='/journal-search-screenshot.jpg' className='rounded-xl w-auto' width={800} height={800} alt='profile pic' />
        </div>
        <div className='lg:w-1/2 p-4'>
          <div className='flex'>
            <h2 className='text-xl'>Harry Howard's Journals</h2>
            <div className='ms-auto me-4'>
              <a href='https://journal-search.vercel.app/'>
                Link
              </a>
              <a href='https://github.com/mike-v2/journal-search' className='ps-4'>
                Source
              </a>
            </div>
          </div>
          <h4 className='text-lg'>Using AI to Make Big Data More Accessible</h4>
          <p>
            I'm proud to introduce Harry Howard's Journals, an advanced web application that redefines the way we explore historical journal entries. Using Next.js, Python, and AI tools, the app processes and analyzes entries from the 1930s and 40s. These entries are enhanced by AI and made easily accessible, putting a treasure trove of historical data at your fingertips. Features include user profiles, a dynamic search engine, and a shared posting page for community engagement.
          </p>
          <p>
            Main Features:
          </p>
          <ul>
            <li>
              keep track of pages read, save special passages and make posts to discuss entries with others
            </li>
            <li>
              read one page at a time or easily skip through the entries
            </li>
            <li>
              search journal function for journal entries
            </li>
            <li>
              AI-generated topics for each entry allow users to understand an entry at a glance and link stories woven through multiple entries
            </li>
          </ul>
          <p>
            Primary Tools Used:
          </p>
          <ul>
            <li>
              Next JS
            </li>
            <li>
              Tailwind CSS
            </li>
            <li>
              Prisma
            </li>
            <li>
              Supabase
            </li>
            <li>
              ElasticSearch
            </li>
            <li>
              Lunr Search
            </li>
          </ul>
          <p>
            Secondary Tools Used:
          </p>
          <ul>
            <li>
              Python library opencv to preprocess images
            </li>
            <li>
              run CRAFT AI locally to split images into lines
            </li>
            <li>
              apply Google Vision API on lines
            </li>
            <li>
              use GPT-4 to reconstruct journal entry from Google Vision output
            </li>
            <li>
              generate metadata on journal entries with GPT-3.5 API
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
