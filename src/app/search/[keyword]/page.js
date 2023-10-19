import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async ({params}) => {
  const { keyword } = params
  const response = await fetch(
    ` ${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}limit=12`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header
          title={`Pencarian untuk ${keyword}`}
        />
        <AnimeList api_data={searchAnime} />
      </section>
    </>
  );
};

export default Page;
