import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 text-center font-semibold text-xl my-5 mt-10">
      Created with ♥️ By{" "}
      <Link href={"https://dhaiyra-majmudar.netlify.app/"} target="_blank">
        <span className="text-primary hover:text-blue-800 dark:hover:text-blue-600">
          Dhairya Majmudar
        </span>
      </Link>
    </div>
  );
};

export default Footer;
