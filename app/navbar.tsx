'use client';

import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Home",
    address: "/",
  },
  {
    name: "About Me",
    address: "/about",
  },
  {
    name: "Resume",
    address: "/resume",
  },
  {
    name: "Projects",
    address: "/projects",
  },
  {
    name: "Contact",
    address: "/contact",
  }
]

export default function NavBar() {

  return (
    <nav className="flex bg-green-200 h-28">
      <div className="basis-2/3 md:basis-1/3 flex gap-x-12 ps-12 pb-4 mt-auto">
        <a href="https://github.com/mike-v2/">
          <Image src='/images/github-logo.svg' className="hover:invert hover:scale-125 transition duration-250" width={30} height={30} alt='github logo' />
        </a>
        <a href="https://www.linkedin.com/in/michael-mcguiness-react/">
          <Image src='/images/linkedin-logo.svg' className="hover:invert hover:scale-125 transition duration-250" width={30} height={30} alt='github logo' />
        </a>
        <a href="mailto:mikemcguiness@protonmail.com">
          <Image src='/images/email-logo.svg' className="hover:invert  hover:scale-125 transition duration-250" width={30} height={30} alt='github logo' />
        </a>
      </div>
      <div className="basis-1/3 md:basis-2/3 flex justify-end h-full">
        <div className="md:hidden dropdown dropdown-bottom dropdown-end mt-auto">
          <label tabIndex={0} className="btn m-1 h-16 w-16 p-2">
            <Image src='/images/menu-icon.svg' width={40} height={40} alt="menu icon" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {links.map((link, i) => {
              return (
                <li key={i}><Link href={link.address} className="text-xl hover:font-bold hover:underline" onClick={e => e.currentTarget.blur()} key={i}>{link.name}</ Link></li>
              )
            })}
          </ul>
        </div>

        <div className="hidden md:flex basis-2/3 max-w-2xl justify-between gap-x-2 mt-auto pb-4 pr-4">
          {links.map((link, i) => {
            return (
              <Link href={link.address} className="text-xl hover:font-bold hover:underline" key={i}>{link.name}</ Link>
            )
          })}
        </div>
      </div>

    </nav>
  )
}