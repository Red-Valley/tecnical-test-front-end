import { useSelector } from "react-redux";
import { getCharacters } from "../features/characters/charactersSlice";
import { Character } from "./Character";

export const CharacterList = () => {
  const characters = useSelector(getCharacters);
  const isLoading = useSelector((state) => state.characters.loading);
  console.log(isLoading);
  // Function to render characters
  const renderCharacters = () => {
    return characters.map((character, index) => {
      return <Character key={index} character={character} />;
    });
  };

  return (
    <div className="container">
      {
        // If characters are loading, show a loading message
        isLoading ? (
          <div
            className="d-flex justify-content-center mx-auto text-primary"
            style={{ width: "15rem", marginTop: "5rem", height: "15rem" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row ">{renderCharacters()}</div>
        )
      }
    </div>
  );
};
