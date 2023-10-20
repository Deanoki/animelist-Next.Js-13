import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className=" flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="md:text-2xl font-bold text-color-secondary">
          ANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;