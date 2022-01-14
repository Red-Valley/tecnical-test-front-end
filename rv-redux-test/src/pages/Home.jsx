import { useEffect } from "react";
import { CharacterList } from "./CharacterList";
import api from "../common/API/charactersApi";
import { useDispatch } from "react-redux";
import { addCharacters } from "../features/characters/charactersSlice";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await api.get();
        dispatch(addCharacters(data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1 className="text-center">Character List</h1>
      <CharacterList />
    </div>
  );
};
