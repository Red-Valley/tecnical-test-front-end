import { useSelector } from "react-redux";
import { getCharacters } from "../features/characters/charactersSlice";
import { Character } from "./Character";

export const CharacterList = () => {
  const characters = useSelector(getCharacters);
  // Function to render characters
  const renderCharacters = () => {
    return characters.map((character, index) => {
      return <Character key={index} character={character} />;
    });
  };

  return (
    <div className="container">
      <div className="row ">{renderCharacters()}</div>
    </div>
  );
};
