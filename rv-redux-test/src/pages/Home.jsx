import { useEffect } from "react";
import { CharacterList } from "./CharacterList";
import { useDispatch } from "react-redux";
import { fetchAsyncCharacters } from "../features/characters/charactersSlice";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <h1 className="text-center mt-2 mb-2">Character List</h1>
      <CharacterList />
    </div>
  );
};
