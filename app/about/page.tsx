import Image from "next/image"
import Link from "next/link"


export default function About() {
  return (
    <main>
      <div className='mx-auto my-20 flex max-w-2xl flex-col gap-y-4'>
        <div className='mx-auto mb-4 w-fit border border-green-400 p-4'>
          <Image
            src='/images/profile-pic.jpg'
            className='rounded-xl'
            width={300}
            height={300}
            alt='picture of Mike'
          />
        </div>

        <div className='divider mx-2 my-0 before:bg-green-400 after:bg-green-400'></div>

        <div className='mx-2 flex flex-col gap-y-4'>
          <p>
            My unique background, which spans from VR game development to neural
            networks, allows me to draw from a{' '}
            <span className='font-bold text-green-600'>
              broad palette of tools
            </span>{' '}
            and approaches to solve complex problems. This{' '}
            <span className='font-bold text-green-600'>
              multi-disciplinary perspective
            </span>
            , combined with a knack for{' '}
            <span className='font-bold text-green-600'>
              continuous learning
            </span>
            , equips me to adapt to evolving tech landscapes and always find the
            right tool for the task, whether it be traditional front-end
            technologies or state-of-the-art AI tools like OpenAI&apos;s
            ChatGPT.
          </p>
          <p>
            What sets me apart is my exceptional interpersonal skills, honed
            during my years as a tutor. This experience taught me to appreciate
            the{' '}
            <span className='font-bold text-green-600'>
              diversity of thought processes
            </span>{' '}
            and to{' '}
            <span className='font-bold text-green-600'>
              communicate complex concepts
            </span>{' '}
            in a straightforward manner. It has shaped my ability to work
            effectively in teams, liaise between technical and non-technical
            stakeholders, and articulate design and development decisions
            clearly.
          </p>
          <p>
            I&apos;m always seeking new challenges, particularly those that
            allow me to leverage my varied skill set to create{' '}
            <span className='font-bold text-green-600'>
              impactful, innovative solutions
            </span>
            . If you&apos;re looking for a developer with a wide-ranging toolkit
            and a collaborative approach, let&apos;s talk!
          </p>
          <Link href='/contact' className='mx-auto mt-2'>
            <button className='btn btn-wide rounded-full bg-green-400 px-8 text-black hover:bg-green-500'>
              Contact
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}