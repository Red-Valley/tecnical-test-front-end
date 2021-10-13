import { Header } from "../organisms/Header";
import { CardsGrid } from "../organisms/CardsGrid";
import { useGetCharactersListQuery } from "../features/characters/characters-slice";
import { CubeGrid } from "../atoms/CubeGrid";

export const Home = () => {
  const { data = [], isFetching } = useGetCharactersListQuery();

  return (
    <div className="container">
      <Header />
      {isFetching ? (
        <div
          style={{ margin: "5rem 0 1rem 0", width: "100%" }}
          className="d-flex justify-content-center"
        >
          <CubeGrid />
        </div>
      ) : null}
      <CardsGrid grid={data} />
    </div>
  );
};
