import { Header } from "../organisms/Header";
import { CardsGrid } from "../organisms/CardsGrid";
import { useGetCharacterByNameQuery } from "../features/characters/characters-slice";
import { CubeGrid } from "../atoms/CubeGrid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Home = () => {
  const [filter, setFilter] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const { data: mountedData, isFetching } = useGetCharacterByNameQuery(filter);

  const filteredCharacter = useSelector(
    (state) => state.characters.queries[`getCharacterByName("${filter}")`]
  );

  function handleSearchChange(s) {
    setFilter(s);
  }

  // Load characters data base on filter changes
  useEffect(() => {
    if (filteredCharacter) {
      setCurrentData(filteredCharacter.data);
    }
  }, [filter, filteredCharacter]);

  // Load all characters data on mounted
  useEffect(() => {
    let mounted = true;
    if (mounted && mountedData) {
      setCurrentData(mountedData.results);
    }
    return () => (mounted = false);
  }, [mountedData]);

  return (
    <div className="container">
      <Header handleSearch={handleSearchChange} />
      {isFetching ? (
        <div
          style={{ margin: "5rem 0 1rem 0", width: "100%" }}
          className="d-flex justify-content-center"
        >
          <CubeGrid />
        </div>
      ) : null}
      <CardsGrid grid={currentData} />
    </div>
  );
};
