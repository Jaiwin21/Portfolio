"use client";

import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "project",
        path: "/project"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <div>logo</div>
    </SheetContent>
    </Sheet>
  )
}

export default MobileNav