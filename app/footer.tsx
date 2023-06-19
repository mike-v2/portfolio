import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-200 mt-24">
      <div className="flex justify-center gap-x-12 py-12">
        <a href="https://github.com/mike-v2/">
          <Image src='/images/github-logo.svg' className="hover:invert hover:scale-125 transition duration-250" width={50} height={50} alt='github logo' />
        </a>
        <a href="https://www.linkedin.com/in/michael-mcguiness-react/">
          <Image src='/images/linkedin-logo.svg' className="hover:invert hover:scale-125 transition duration-250" width={50} height={50} alt='github logo' />
        </a>
        <a href="mailto:mikemcguiness@protonmail.com">
          <Image src='/images/email-logo.svg' className="hover:invert  hover:scale-125 transition duration-250" width={50} height={50} alt='github logo' />
        </a>
      </div>
    </footer>
  )
} 