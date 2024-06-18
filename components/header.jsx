import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"

const header = () => {
  return (
    
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">
        
        {/* logo */}
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Jaiwin <span className="text-accent">.</span>
            </h1>
        </Link>
        {/* desktop nav */}
        <Nav />
        </div>
    </header>
  )
}

export default header