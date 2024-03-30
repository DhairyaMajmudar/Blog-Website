import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="max-w-2xl mx-auto px-4 py-5 w-full relative flex items-center justify-between">
        <Link href={"/"} className="font-bold text-3xl uppercase">
          Dhairya&#39;s <span className="text-primary">Blog</span>
        </Link>

        <div className="flex flex-row justify-center items-center gap-7">
          <Link href={"https://github.com/DhairyaMajmudar/Blog-Website/"}>
            <Github />
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
