'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
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

const icons = [
  {
    name: 'GitHub',
    link: 'https://github.com/mike-v2/',
    imagePath: '/images/github-logo.svg'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/michael-mcguiness-react/',
    imagePath: '/images/linkedin-logo.svg'
  },
  {
    name: 'Email',
    link: 'mailto:mikemcguiness@protonmail.com',
    imagePath: '/images/email-logo.svg'
  }
]

export default function NavBar() {
  const [isLogoHovered, setIsLogoHovered] = useState<boolean>(false);

  return (
    <nav className="flex h-32 relative">
      <Link href='/' className="absolute flex w-14 h-14 top-1 left-1/2 transform -translate-x-1/2" onMouseEnter={e => setIsLogoHovered(true)} onMouseLeave={e => setIsLogoHovered(false)}>
        <Image src='/images/m-outside.svg' className={`transition-transform duration-250 h-auto ${isLogoHovered ? '-translate-x-1' : ''}`} width={15} height={60} alt='logo part' />
        <Image src='/images/m-inside.svg' className={`transition h-auto ${isLogoHovered ? 'translate-y-1 filter-green-400 scale-150' : ''}`} width={25} height={60} alt='logo part' />
        <Image src='/images/m-outside.svg' className={`rotate-180 transition-transform duration-250 h-auto ${isLogoHovered ? 'translate-x-1' : ''}`} width={15} height={60} alt='logo part' />
      </ Link>
      <div className="basis-1/2 flex pl-4 pb-4 gap-x-6 md:gap-x-12 md:pl-12 mt-auto">
        {icons && icons.map((icon, i) => {
          return (
            <a href={icon.link} key={i}>
              <Image src={icon.imagePath} className="hover:scale-125 transition duration-250" width={30} height={30} alt={`${icon.name} logo`} key={i} />
            </a>
          )
        })}
      </div>
      <div className="basis-1/2 flex justify-end h-full">
        <div className="md:hidden dropdown dropdown-bottom dropdown-end mt-auto mr-4">
          <label tabIndex={0} className="btn m-1 h-12 w-12 p-2">
            <Image src='/images/menu-icon.svg' width={25} height={25} alt="menu icon" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {links.map((link, i) => {
              return (
                <li key={i}><Link href={link.address} className="text-lg hover:font-bold hover:underline" onClick={e => e.currentTarget.blur()} key={i}>{link.name}</ Link></li>
              )
            })}
          </ul>
        </div>

        <div className="hidden md:flex basis-full max-w-lg justify-between  mt-auto pb-4 px-4">
          {links.map((link, i) => {
            return (
              <Link href={link.address} className="whitespace-nowrap hover:font-bold hover:underline decoration-green-400 decoration-2" key={i}>{link.name}</ Link>
            )
          })}
        </div>
      </div>

    </nav>
  )
}