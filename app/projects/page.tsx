import Image from 'next/image'

const projectData = [
  {
    imagePath: '/images/recreating-react-logo.png',
    title: 'Recreating React',
    subtitle: 'Building Four Core Features of React',
    article: 'https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5',
    video: 'https://youtu.be/BU37lgD28lU',
    source: 'https://github.com/mike-v2/react-from-scratch',
    summary: <span>In this self-driven project, I undertook the challenge of recreating a simplified version of React from scratch to deepen my understanding of its inner workings.By building out core functions like createElement, render, useState, and useEffect, I gained valuable insights into JSX transformation, DOM manipulation, and state management.This hands-on experience has not only solidified my grasp of React fundamentals but also honed my problem-solving skills.I&apos;ve documented my journey and the technical intricacies of the project in a <a target='blank' href="https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Medium article</a> and a <a target='blank' href="https://youtu.be/BU37lgD28lU" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>YouTube video</a> for those interested in diving deeper.</span>,
    features: [<p key={0}><span className='font-bold'>createElement</span> transforms JSX into ReactElement objects</p>, <p key={1}><span className='font-bold'>render</span> brings ReactElements to life on the DOM</p>, <p key={2}><span className='font-bold'>useState</span> manages state</p>, <p key={3}><span className='font-bold'>useEffect</span> synchronizes the component with an external system</p>],
    primaryTools: ['TypeScript', 'Parcel'],
    secondaryTools: ['Jest', 'Prettier', 'GitHub']
  },
  {
    imagePath: '/images/journal-search-chat.jpg',
    title: "Harry Howard's Journals",
    subtitle: 'Using AI to Make Big Data More Accessible',
    link: 'https://journal-search.vercel.app/',
    source: 'https://github.com/mike-v2/journal-search',
    summary: "I'm proud to introduce Harry Howard's Journals, an advanced web application that redefines the way we explore historical journal entries. Using Next.js, Python, and AI tools, the app processes and analyzes entries from the 1930s and 40s. These entries are enhanced by AI and made easily accessible, putting a treasure trove of historical data at your fingertips.",
    features: ["Harry has been brought to life with state-of-the-art AI technology. Ask Harry detailed questions about the journals, or just chat! (powered by ChatGPT)", "Read journal entries one page at a time or easily skip around", "Search function for journal entries", "AI-generated topics for each entry allow users to understand an entry at a glance and link together stories woven through multiple entries", "Sign in with Google to keep track of pages read, save special passages and make posts to discuss entries with others"],
    primaryTools: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Daisy UI", "ChatGPT API", "Prisma", "Supabase"],
    secondaryTools: ["Use Python library OpenCV to preprocess images", "Run CRAFT AI locally to split images into lines", "Apply Google Vision API on lines", "Use GPT-4 to reconstruct journal entry from Google Vision output", "Generate metadata on journal entries with GPT-3.5 (ChatGPT) API", "Store data with Google Cloud Storage", "Run python scripts with Google Cloud Run"]
  },
  {
    imagePath: '/images/good-news.jpg',
    title: "Good News!",
    subtitle: 'An Automated Pipeline for Finding Positive News Stories with AI',
    link: 'https://good-news-three.vercel.app/',
    source: 'https://github.com/mike-v2/good-news',
    summary: "Good News! aggregates global news stories through reputable news aggregator APIs, meticulously collecting articles related to building and construction projects, as well as advancements in healthcare, education, and peace. To identify the most uplifting and positive stories, I employ advanced AI analysis, powered by OpenAI's GPT. This sophisticated natural language processing helps to filter and present news that sparks optimism and inspiration, shedding light on the progress and goodwill that is constantly unfolding around the world.",
    features: ["Aggregates positive news stories from around the world related to construction projects, healthcare advancements, educational progress, and peace initiatives", "Interactable world map representing source countries", "Updated daily with new articles", "Automated data collection and processing pipeline that requires minimal manual intervention", "Utilizes OpenAI's GPT API to evaluate and filter news stories based on positivity and relevance to the chosen categories"],
    primaryTools: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Daisy UI", "ChatGPT API", "Firebase", "Google Cloud Functions", "Mediastack API"],
    secondaryTools: ["React Simple Maps"]
  },
  {
    imagePath: '/images/journal-transcribe-screenshot.jpg',
    title: "Journal Transcription Assistant",
    subtitle: 'Efficiently Transcribe Journal Entries',
    link: 'https://mike-v2.github.io/journal-transcribe/',
    desktopOnly: true,
    source: 'https://github.com/mike-v2/journal-transcribe',
    summary: "A kind of Content Management Application that serves images of journal pages to users and provides the tools to quickly and conveniently transcribe them. The transcription is indexed and stored in a database so that another website can analyze and display them.",
    features: ["Process, index, and store images of journal pages", "Serve images of journal pages from firebase database", "Speech-to-text with added support for punctuation", "Click to zoom image for hard-to-read text", "Special annotation tools to enrich the text data"],
    primaryTools: ["React", "JavaScript", "Firebase", "GitHub"],
    secondaryTools: ["React Speech Recognition", "React Inner Image Zoom"]
  },
  {
    imagePath: '/images/dave-website.jpg',
    title: "Service Now Auto Repair",
    subtitle: 'Small Business Redesign',
    link: 'https://service-now-auto-repair.vercel.app/',
    source: 'https://github.com/mike-v2/service-now-auto-repair',
    summary: "An update of an old website to make it clean, responsive, and consistent with modern design principles",
    features: ["Splash page", "Navbar and Footer", "Responsive", "Realtime review data", "Embedded Google Map"],
    primaryTools: ["React", "Next.js", "Node.js", "TypeScript", "Bootstrap", "GitHub"],
    secondaryTools: ["Google Places API", "Google Maps API", "Yelp API"]
  }
]

export default function Projects() {
  function getImagePath(tool: string): string {
    return tool === 'Next.js' ? '/images/nextjs-logo.svg' :
      tool === 'React' ? '/images/react-logo.svg' :
        tool === 'GitHub' ? '/images/github-logo.svg' :
          tool === 'Tailwind CSS' ? '/images/tailwind-logo.svg' :
            tool === 'ChatGPT' ? '/images/openai-logo.svg' :
              tool === 'ChatGPT API' ? '/images/openai-logo.svg' :
                tool === 'Firebase' ? '/images/firebase-logo.svg' :
                  tool === 'Prisma' ? '/images/prisma-logo.svg' :
                    tool === 'Bootstrap' ? '/images/bootstrap-logo.svg' :
                      tool === 'Supabase' ? '/images/supabase-logo.svg' :
                        tool === 'Daisy UI' ? '/images/daisyui-logo.svg' :
                          tool === 'ElasticSearch' ? '/images/elasticsearch-logo.svg' :
                            tool === 'Lunr Search' ? '/images/lunrjs-logo.svg' :
                              tool === 'Google Cloud Functions' ? '/images/cloud_functions.png' :
                                tool === 'Mediastack API' ? '/images/mediastack.png' :
                                  tool === "JavaScript" ? '/images/js-logo.svg' :
                                    tool === 'TypeScript' ? '/images/typescript-logo.svg' :
                                      tool === 'Node.js' ? '/images/node-logo.svg' :
                                        tool === 'Parcel' ? '/images/parcel-logo.png' :
                                          '';
  }
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
                <h4 className='text-lg italic'>{project.subtitle}</h4>
              </div>
              <div className='collapse-content'>
                <div className="divider"></div>
                <div className='mt-8 flex flex-col lg:flex-row lg:gap-x-4 w-full mx-auto'>
                  <div className='lg:basis-7/12 xl:basis-1/2 relative'>
                    <div className='text-sm absolute top-0 left-0 -translate-y-6'>
                      {project.link &&
                        <a href={project.link} target='_blank' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600 pr-5'>
                          {linkText}
                        </a>
                      }
                      {project.article &&
                        <a href={project.article} target='_blank' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600 pr-5'>
                          Article
                        </a>
                      }
                      {project.video &&
                        <a href={project.video} target='_blank' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600 pr-5'>
                          Video
                        </a>
                      }
                      <a href={project.source} target='_blank' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
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
                          {project.features && project.features.map((feature, j) => {
                            return (
                              <li key={j}>{feature}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-200 mt-1.5 border border-green-600">
                      <summary className="collapse-title text-xl">Primary Tools Used</summary>
                      <div className="collapse-content">
                        <ul className='flex flex-col gap-y-2 ps-8'>
                          {project.primaryTools && project.primaryTools.map((tool, i) => {
                            const src = getImagePath(tool);
                            const invert = tool === 'Next.js' ||
                              tool === 'GitHub' ||
                              tool === 'ChatGPT' ||
                              tool === 'ChatGPT API' ||
                              tool === 'Prisma' ||
                              tool === 'Lunr Search' ||
                              tool === 'Bootstrap';
                            return (
                              <li key={i} className=''>
                                <div className='flex'>
                                  {src !== '' && <Image src={src} className={`-ms-8 mr-2 ${invert ? 'dark:invert' : ''}`} width={25} height={25} alt={`${tool} logo`} />}
                                  <p className=''>{tool}</p>
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
                                      <a href='https://opencv.org/' target='_blank' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>{word}</a>{' '}
                                    </span>
                                  )
                                } else if (word === 'CRAFT') {
                                  return (
                                    <span key={wordIndex}>
                                      <a href='https://github.com/clovaai/CRAFT-pytorch' target='_blank' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>{word}</a>{' '}
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
