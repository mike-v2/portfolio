import Link from "next/link";

const links = [
  {
    name: "Home",
    address: "/",
  },
  {
    name: "About Me",
    address: "/about-me",
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
    <nav className="">
      <div className="flex justify-end">
        <div className=" max-w-2xl">
          {links.map((link) => {
            return (
              <Link href={link.address} className="p-3">{link.name}</ Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}