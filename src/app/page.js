import Link from "next/link";
import AnimeList from "@/components/AnimeList";

const Home = async () => {
  const response = await fetch(` ${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();

  return (
    <>
      <div>
        <div className="mx-5 py-5 flex justify-between items-center">
          <h1 className=" font-bold text-2xl ">Popular Anime 🔥</h1>
          <Link href="/populer" className="md:text-xl text-sm hover:text-indigo-500 hover:underline transition-all">
            Lihat Semua
          </Link>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mx-5 ">
          {anime.data.map((data) => {
            return (
              <div key={data.mal_id} className="shadow-xl">
                <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
