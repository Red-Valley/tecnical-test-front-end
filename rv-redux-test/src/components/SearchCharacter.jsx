import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncCharacterByName } from "../features/characters/charactersSlice";

export const SearchCharacter = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchAsyncCharacterByName(search));
  //   }, [search]);
  return (
    <div className="input-group flex-nowrap">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="input-group-text btn btn-primary logButton"
        id="addon-wrapping"
        onClick={() => dispatch(fetchAsyncCharacterByName(search))}
      >
        Search
      </button>
    </div>
  );
};
