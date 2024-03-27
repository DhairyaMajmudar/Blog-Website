import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <>
      <nav className="max-w-2xl mx-auto px-4 py-5 w-full relative flex items-center justify-between">
        <Link href={"/"} className="font-bold text-3xl">
          Dhairya&#39;s <span className="text-primary">Blog</span>
        </Link>
        <ModeToggle />
      </nav>
    </>
  );
};

export default Navbar;
