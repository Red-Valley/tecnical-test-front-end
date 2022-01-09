import { useDispatch } from "react-redux";
import { Character } from "./Character";
import axios from "axios";
import { useEffect, useState } from "react";
// Action types
import { setCharacters } from "../redux/actions/characterActions";
import { Loading } from "./Loading";

const CharacterList = () => {
  // Hooks
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  //   fetch products
  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await axios.get();
      dispatch(setCharacters(response.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          <Character />
        </div>
      )}
    </div>
  );
};

export default CharacterList;
