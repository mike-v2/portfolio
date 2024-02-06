export default function Projects() {
  return (
    <div className="py-6">
      <h2 className="font-bold pb-4">PROJECTS</h2>
      <div className="flex flex-col gap-y-4">
        <div className="">
          <div className="flex">
            <h4 className="font-bold pb-2">Recreating React</h4>
            <div className="ms-auto">
              <div className="flex gap-x-4 text-sm">
                <a
                  href="https://medium.com/@mmcguiness8700/recreating-react-96e8a01d4cb5"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Article
                </a>
                <a
                  href="https://youtu.be/BU37lgD28lU"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Video
                </a>
                <a
                  href="https://github.com/mike-v2/react-from-scratch"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-y-2 list-disc ps-8">
            <li>
              Demonstrated strong technical proficiency by recreating
              React&apos;s core functions, including createElement and render,
              to understand the intricacies of JSX transformation and virtual
              DOM.
            </li>
            <li>
              Showcased effective problem-solving and self-learning skills
              through the hands-on experience of developing custom hooks, such
              as useState and useEffect, to manage state and side effects in
              functional components.
            </li>
            <li>
              Enhanced communication skills by documenting the project&apos;s
              process and results in a comprehensive Medium article and a
              YouTube video, making complex technical information accessible and
              understandable.
            </li>
          </ul>
        </div>

        <div className="">
          <div className="flex">
            <h4 className="font-bold pb-2">Harry Howard&apos;s Journals</h4>
            <div className="ms-auto">
              <div className="flex gap-x-4 text-sm">
                <a
                  href="https://journal-search.vercel.app/"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Link
                </a>
                <a
                  href="https://github.com/mike-v2/journal-search"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-y-2 list-disc ps-8">
            <li>
              Engineered an advanced search engine capable of analyzing over a
              thousand documents for conceptual similarity, not just keyword
              matches. Implemented with OpenAI embeddings and Google Cloud
              Storage.
            </li>
            <li>
              Introduced a chat function for intuitive natural language
              querying, revolutionizing the accessibility of vast journal data.
              Integrated OpenAI embeddings with Vercel&apos;s AI library for
              real-time data streaming.
            </li>
            <li>
              Incorporated community features for sharing and discussion,
              fostering engagement around interwoven journal narratives. Managed
              data with Prisma/Supabase and secured authentication using
              next-auth and Google Sign-In.
            </li>
            <li>
              Developed a custom AI solution to transcribe cursive handwriting,
              improving accuracy from 60% to 90%. Utilized Python, OpenCV, CRAFT
              AI, Google Vision API, and OpenAI&apos;s GPT-4.
            </li>
            <li>
              Employed AI to preprocess and summarize journal entries, enhancing
              organization and presentation. Leveraged Python and OpenAI API.
            </li>
          </ul>
        </div>

        <div className="">
          <div className="flex">
            <h4 className="font-bold pb-2">Good News!</h4>
            <div className="ms-auto">
              <div className="flex gap-x-4 text-sm">
                <a
                  href="https://good-news-three.vercel.app/"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Link
                </a>
                <a
                  href="https://github.com/mike-v2/good-news"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-y-2 list-disc ps-8">
            <li>
              Established an automated data collection and processing pipeline,
              minimizing manual intervention, with Google Cloud Functions, Cloud
              Scheduler, and Firebase.
            </li>
            <li>
              Automated the collection of global news stories using the
              Mediastack API and employed OpenAI API to assess and filter
              articles based on positivity and relevance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
