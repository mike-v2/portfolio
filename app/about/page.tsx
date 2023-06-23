import Image from "next/image"
import Link from "next/link"


export default function About() {
  return (
    <main>
      <div className="flex flex-col gap-y-4 max-w-2xl mx-auto my-20">
        <div className="p-4 border border-green-400 w-fit mx-auto mb-4">
          <Image src='/images/profile-pic.jpg' className="rounded-xl" width={300} height={300} alt='picture of Mike' />
        </div>

        <div className="divider before:bg-green-400 after:bg-green-400 my-0 mx-2"></div>

        <div className="flex flex-col gap-y-4 mx-2">
          <p>
            My unique background, which spans from VR game development to neural networks, allows me to draw from a <span className="text-green-600 font-bold">broad palette of tools</span> and approaches to solve complex problems. This <span className="text-green-600 font-bold">multi-disciplinary perspective</span>, combined with a knack for <span className="text-green-600 font-bold">continuous learning</span>, equips me to adapt to evolving tech landscapes and always find the right tool for the task, whether it be traditional front-end technologies or state-of-the-art AI tools like OpenAI&apos;s ChatGPT.
          </p>
          <p>
            What sets me apart is my exceptional interpersonal skills, honed during my years as a tutor. This experience taught me to appreciate the <span className="text-green-600 font-bold">diversity of thought processes</span> and to <span className="text-green-600 font-bold">communicate complex concepts</span> in a straightforward manner. It has shaped my ability to work effectively in teams, liaise between technical and non-technical stakeholders, and articulate design and development decisions clearly.
          </p>
          <p>
            I&apos;m always seeking new challenges, particularly those that allow me to leverage my varied skill set to create <span className="text-green-600 font-bold">impactful, innovative solutions</span>. If you&apos;re looking for a developer with a wide-ranging toolkit and a collaborative approach, let&apos;s talk!
          </p>
          <Link href='/contact' className="mx-auto mt-2">
            <button className='btn btn-wide bg-green-400 hover:bg-green-500 rounded-full px-8'>Contact</button>
          </Link>
        </div>

      </div>
    </main >
  )
}