'use client';

import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Home",
    address: "/",
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
    <nav className="bg-slate-200 h-28">
      <div className="flex justify-end h-full">
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
              <Link href={link.address} className="text-2xl hover:font-bold hover:underline" key={i}>{link.name}</ Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}