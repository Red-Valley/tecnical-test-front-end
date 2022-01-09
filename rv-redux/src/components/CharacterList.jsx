import { useDispatch } from "react-redux";
import { Character } from "./Character";
import axios from "axios";
import { useEffect, useState } from "react";
// Action types
import { setCharacters } from "../redux/actions/characterActions";
import { Loading } from "./Loading";
import SearchBar from "./SearchBar";

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
  // Next page
  const [page, setPage] = useState(1);

  const nextFunction = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    const fetchPageCharacters = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`?page=${page}`);
        dispatch(setCharacters(response.data));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchPageCharacters();
  }, [page]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchBar />
          <div className="grid md:grid-cols-2 gap-4">
            <Character />
          </div>
          <nav aria-label="Page navigation example" className="mt-3 mx-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="/"
                  aria-label="Next"
                  onClick={nextFunction}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default CharacterList;
