import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8  xl:py-10 text-white  ">
      <div className="container mx-auto  flex justify-between items-center ">
        {/* logo */}

        <Link href="/">
          <h1 className="text-4xl font-semibold flex items-center gap-2">
            Md.Hasan <span className="text-accent text-2xl">&lt;/&gt;</span>
          </h1>
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
