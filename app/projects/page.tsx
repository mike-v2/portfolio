import Image from 'next/image'

const projectData = [
  {
    imagePath: '/images/journal-search-chat.jpg',
    title: "Harry Howard's Journals",
    link: 'https://journal-search.vercel.app/',
    source: 'https://github.com/mike-v2/journal-search',
    summaryHeader: 'Using AI to Make Big Data More Accessible',
    summary: "I'm proud to introduce Harry Howard's Journals, an advanced web application that redefines the way we explore historical journal entries. Using Next.js, Python, and AI tools, the app processes and analyzes entries from the 1930s and 40s. These entries are enhanced by AI and made easily accessible, putting a treasure trove of historical data at your fingertips.",
    features: ["Harry has been brought to life with state-of-the-art AI technology. Ask Harry detailed questions about the journals, or just chat! (powered by ChatGPT)", "Read journal entries one page at a time or easily skip around", "Search function for journal entries", "AI-generated topics for each entry allow users to understand an entry at a glance and link together stories woven through multiple entries", "Sign in with Google to keep track of pages read, save special passages and make posts to discuss entries with others"],
    primaryTools: ["Next.js", "Tailwind CSS", "Daisy UI", "ChatGPT API", "Prisma", "Supabase", "ElasticSearch", "Lunr Search"],
    secondaryTools: ["Use Python library OpenCV to preprocess images", "Run CRAFT AI locally to split images into lines", "Apply Google Vision API on lines", "Use GPT-4 to reconstruct journal entry from Google Vision output", "Generate metadata on journal entries with GPT-3.5 (ChatGPT) API", "Store data with Google Cloud Storage", "Run python scripts with Google Cloud Run"]
  },
  {
    imagePath: '/images/journal-transcribe-screenshot.jpg',
    title: "Journal Transcription Assistant",
    link: 'https://mike-v2.github.io/journal-transcribe/',
    desktopOnly: true,
    source: 'https://github.com/mike-v2/journal-transcribe',
    summaryHeader: 'Efficiently Transcribe Journal Entries',
    summary: "A kind of Content Management Application that serves images of journal pages to users and provides the tools to quickly and conveniently transcribe them. The transcription is indexed and stored in a database so that another website can analyze and display them.",
    features: ["Process, index, and store images of journal pages", "Serve images of journal pages from firebase database", "Speech-to-text with added support for punctuation", "Click to zoom image for hard-to-read text", "Special annotation tools to enrich the text data"],
    primaryTools: ["React", "Firebase", "GitHub"],
    secondaryTools: ["React Speech Recognition", "React Inner Image Zoom"]
  },
  {
    imagePath: '/images/dave-website.jpg',
    title: "Service Now Auto Repair",
    link: 'https://service-now-auto-repair.vercel.app/',
    source: 'https://github.com/mike-v2/service-now-auto-repair',
    summaryHeader: 'Small Business Redesign',
    summary: "An update of an old website to make it clean, responsive, and consistent with modern design principles",
    features: ["Splash page", "Navbar and Footer", "Responsive", "Realtime review data", "Embedded Google Map"],
    primaryTools: ["Next.js", "Bootstrap", "GitHub"],
    secondaryTools: ["Google Places API", "Google Maps API", "Yelp API"]
  }
]

export default function Projects() {
  return (
    <main className="">
      <h1 className='text-6xl text- text-center w-full my-20'>
        Projects
      </h1>

      <div className='mb-16'>
        {projectData && projectData.map((project, i) => {
          let linkText = 'Link';
          if (project.desktopOnly) linkText += ' (desktop only)'
          return (
            <div className='collapse border-2 border-black rounded-lg w-11/12 mx-auto p-2 mt-12 shadow-lg ' key={i}>
              <input type="checkbox" />
              <div className='collapse-title rounded-lg flex flex-col'>
                <h2 className='text-3xl'>{project.title}</h2>
                <h4 className='text-lg italic'>{project.summaryHeader}</h4>
              </div>
              <div className='collapse-content'>
                <div className="divider"></div>
                <div className='mt-8 flex flex-col lg:flex-row lg:gap-x-4 w-full mx-auto'>
                  <div className='lg:basis-7/12 xl:basis-1/2 relative'>
                    <div className='text-sm absolute top-0 left-0 -translate-y-6'>
                      <a href={project.link} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600 pr-5'>
                        {linkText}
                      </a>
                      <a href={project.source} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                        Source
                      </a>
                    </div>
                    <Image src={project.imagePath} className='rounded-xl h-auto mx-auto xl:mx-0 xl:ml-auto' width={800} height={800} alt='profile pic' />

                  </div>
                  <div className='w-11/12 lg:basis-5/12 xl:basis-1/2 max-w-xl mx-auto xl:mx-0 xl:mr-auto lg:pr-8 mt-8 lg:mt-0'>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-200 border border-green-600">
                      <summary className="collapse-title text-xl">Summary</summary>
                      <div className="collapse-content">
                        <div className='px-4'>
                          <p className='pt-1'>{project.summary}</p>
                        </div>
                      </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-200 mt-1.5 border border-green-600">
                      <summary className="collapse-title text-xl">Main Features</summary>
                      <div className="collapse-content">
                        <ul className='list-disc ps-8'>
                          {project.features && project.features.map((feature, i) => {
                            return (
                              <li key={i}>{feature}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-200 mt-1.5 border border-green-600">
                      <summary className="collapse-title text-xl">Primary Tools Used</summary>
                      <div className="collapse-content">
                        <ul className='flex flex-col gap-y-2 ps-8'>
                          {project.primaryTools && project.primaryTools.map((primary, i) => {
                            const src = primary === 'Next.js' ? '/images/nextjs-logo.svg' :
                              primary === 'React' ? '/images/react-logo.svg' :
                                primary === 'GitHub' ? '/images/github-logo.svg' :
                                  primary === 'Tailwind CSS' ? '/images/tailwind-logo.svg' :
                                    primary === 'ChatGPT' ? '/images/openai-logo.svg' :
                                      primary === 'ChatGPT API' ? '/images/openai-logo.svg' :
                                        primary === 'Firebase' ? '/images/firebase-logo.svg' :
                                          primary === 'Prisma' ? '/images/prisma-logo.svg' :
                                            primary === 'Bootstrap' ? '/images/bootstrap-logo.svg' :
                                              primary === 'Supabase' ? '/images/supabase-logo.svg' :
                                                primary === 'Daisy UI' ? '/images/daisyui-logo.svg' :
                                                  primary === 'ElasticSearch' ? '/images/elasticsearch-logo.svg' :
                                                    primary === 'Lunr Search' ? '/images/lunrjs-logo.svg' :
                                              '';
                            return (
                              <li key={i} className=''>
                                <div className='flex'>
                                  {src !== '' && <Image src={src} className='-ms-8 mr-2' width={25} height={25} alt={`${primary} logo`} />}
                                  <p className=''>{primary}</p>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-200 mt-1.5 border border-green-600">
                      <summary className="collapse-title text-xl">Secondary Tools Used</summary>
                      <div className="collapse-content">
                        <ul className='list-disc ps-8'>
                          {project.secondaryTools && project.secondaryTools.map((secondary, i) => {
                            const words = secondary.split(' ');
                            return (
                              <li key={i}>{words.map((word, wordIndex) => {
                                if (word === 'OpenCV') {
                                  return (
                                    <span key={wordIndex}>
                                      <a href='https://opencv.org/' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>{word}</a>{' '}
                                    </span>
                                  )
                                } else if (word === 'CRAFT') {
                                  return (
                                    <span key={wordIndex}>
                                      <a href='https://github.com/clovaai/CRAFT-pytorch' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>{word}</a>{' '}
                                    </span>
                                  )
                                } else {
                                  return word + ' ';
                                }
                              })}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </main>
  )
}
