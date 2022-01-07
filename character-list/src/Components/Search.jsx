import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useSelector } from "react-redux";
import Character from "./Character";
import { useDispatch } from 'react-redux';
import { fetchAllCharacters } from '../Redux/characters/characters';
import Page from './Page';

const Search = () => {

  const Characters = useSelector((state) => state.charactersReducer);

  let history = useHistory();

  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(q);
  const [characters, setCharacters] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const update = () => {
    setInputValue("")
    history.push(`?q=${inputValue}`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${inputValue}`);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase()
      const characters = Characters.filter((character) => character.name.toLocaleLowerCase().includes(value))
      setCharacters(characters)
    } else {
      setCharacters([])
    }
  }

  useEffect(() => {
    getCharacters()
  }, [q])

  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchAllCharacters()); }, []);
  const maxPageValue = Array.from({ length: 42 }, (_, i) => i + 1);
  const newPage = (pageValue) => {
    dispatch(fetchAllCharacters(pageValue));
  };

  return (
    <>
      <div className="container m-4">
        <h2>Filtrar por página</h2>
        <select className="form-select w-25" onClick={update} name="page" id="pages" onChange={(e) => { newPage(e.target.value); }}>
          {maxPageValue.map((number) => (
            <Page
              key={number}
              number={number}
            />
          ))}
        </select>
      </div>
      <hr />
      <div className="container m-4">

        <h2 className="mb-3">Filtrar por nombre</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            <input
              className="form-control"
              autoComplete="off"
              value={inputValue}
              onChange={handleChange}
              placeholder="Nombre del personaje"
              type="text"
            />{" "}
          </label>
          <button type="submit" className="btn btn-outline-dark mb-1 ms-3">
            <span className="material-icons-outlined">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="15"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </button>
        </form>
      </div>
      <div className="container-fluid">
        {
          characters.length !== 0 && (
            <div>
              <hr />
              <h2>
                resultados: {characters.length}
              </h2>
              <ul className="row">
                {characters.map((character) => (
                  <Character
                    key={character.id}
                    character={character}
                  />
                ))}
              </ul>
              <hr />

            </div>
          )
        }
        {
          characters.length == 0 && (
            <ul className="row">
              {Characters.map((character) => (
                <Character
                  key={character.id}
                  character={character}
                />
              ))}
            </ul>)
        }
      </div>

    </>
  );
};

export default Search;
