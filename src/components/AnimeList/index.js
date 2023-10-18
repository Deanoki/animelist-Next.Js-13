import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, id, images }) => {
  return (
    <Link href="/">
      <Image src={images} alt={title} width={350} height={350} className="w-full max-h-96 objec-cover" />
      <h3 className="font-bold md:text-xl text-md p-5">{title}</h3>
    </Link>
  );
};

export default AnimeList;
