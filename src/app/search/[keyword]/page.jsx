import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const response = await fetch(` ${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`);
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}`} />
        <AnimeList api_data={searchAnime} />
      </section>
    </>
  );
};

export default Page;
