import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-8  xl:py-10 text-white  sticky top-0   ">
      <div className="container mx-auto  flex justify-between items-center ">
        {/* logo */}

        <Link href="/">
          
          
          
          
          <div className="flex items-center gap-3 ">
  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
    <FaCode className="text-primary text-lg" />
  </div>
   
  <h1 className="text-4xl text-accent font-semibold flex items-center gap-2">
  Md.Hasan 
  
</h1>
   
   
</div>
        </Link>

        {/* desktop Navbar & hire me button*/}

        <div className="hidden xl:flex items-center gap-8 ">
          <Navbar />
          <Link href="/contact">
            <Button className="font-bold">Hire me</Button>
          </Link>
        </div>

        {/* mobile Navbar */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
