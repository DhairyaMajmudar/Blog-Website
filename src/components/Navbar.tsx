import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="max-w-2xl mx-auto px-4 py-5 w-full relative flex items-center justify-between">
        <Link href={"/"} className="font-bold text-3xl">
          Dhairya <span className="text-blue-600">Blog</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
