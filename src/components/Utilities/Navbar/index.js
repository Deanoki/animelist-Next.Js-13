import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-indigo-500 flex md:flex-row flex-col justify-between p-4 gap-2">
      <Link href="/" className="md:text-2xl font-bold text-white">
        ANIME LIST
      </Link>
      <input type="text" placeholder="Search Anime" />
    </div>
  );
};

export default Navbar;
