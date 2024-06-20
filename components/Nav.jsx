"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "skills",
        path: "/skills"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "about",
        path: "/about"
    },
]

const Nav = () => {
  return (
    <nav>desktop nav</nav>
  )
}

export default Nav