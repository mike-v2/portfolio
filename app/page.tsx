import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section className='flex max-w-5xl justify-center mt-24'>
        <span className='w-1/4 '>
          <Image src='/profile_pic.jpg' className='rounded-xl' width={800} height={800} alt='profile pic' />
        </span>
        <span>
          <h2 className='text-2xl font-bold'>
            Michael McGuiness
          </h2>
          About Me Section
        </span>
      </section>

      <section>
        Resume Highlights
      </section>

      <section>
        Project Highlights
      </section>
    </main>
  )
}
