import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCharacters } from "../redux/actions/characterActions";

const SearchBar = () => {
  // Handle Search
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setCharacters(search));
  };

  useEffect(() => {
    // Fetch Characters
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("?name=" + search);
        dispatch(setCharacters(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, [search]);

  return (
    <div className="flex flex-col md:flex-row justify-center">
      <form
        onSubmit={handleSearch}
        className="form-control mx-auto mb-2 md:mb-5 "
      >
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" className="btn btn-warning my-2 form-control">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
