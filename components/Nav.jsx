"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/project" }, 
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  // Cache active link class
  const activeClass = "text-accent border-b-2 border-accent";
  const defaultClass = "text-white hover:text-accent";

  return (
    <nav className="flex gap-8">
      {links.map(({ name, path }, index) => (
        <Link
          href={path}
          key={index}
          className={`capitalize font-medium transition-colors duration-300 ${
            path === pathname ? activeClass : defaultClass
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
