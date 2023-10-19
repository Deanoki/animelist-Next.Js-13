import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api_data }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 m-5 ">
      {api_data.data.map((anime) => {
        return(
          <Link href={`/${anime.mal_id}`} clasName="cursor-pointer">
          <Image
            src={anime.images.webp.image_url}
            alt={anime.title}
            width={350}
            height={350}
            className="w-full max-h-96 objec-cover"
          />
          <h3 className="font-bold md:text-xl text-md p-5">{anime.title}</h3>
        </Link>
        )
      })}
    </div>
  );
};

export default AnimeList;
