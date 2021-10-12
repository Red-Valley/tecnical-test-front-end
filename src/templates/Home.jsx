import { Header } from "../organisms/Header";
import { CardsGrid } from "../organisms/CardsGrid";
import { useGetCharactersListQuery } from "../features/characters/characters-slice";

export const Home = () => {
  const { data = [], isFetching } = useGetCharactersListQuery();

  return (
    <div className="container">
      <Header />
      {isFetching ? "...Loading" : ""}
      <CardsGrid grid={data} />
    </div>
  );
};
