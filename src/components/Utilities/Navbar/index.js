import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="bg-indigo-500 flex md:flex-row flex-col justify-between p-4 gap-2">
      <Link href="/" className="md:text-2xl font-bold text-white">
        ANIME LIST
      </Link>
      <InputSearch/>
    </div>
  );
};

export default Navbar;
