import Link from "next/link"
import { Button } from "./ui/button"
const header = () => {
  return (
    
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">
        
        {/* logo */}
        <Link href="/">
            <h1>
                Jaiwin <span>.</span>
            </h1>
        </Link>
        
        </div>
    </header>
  )
}

export default header