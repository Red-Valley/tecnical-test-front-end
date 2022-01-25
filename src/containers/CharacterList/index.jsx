import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getCharacterListAction } from "../../actions";

import CharacterCard from "../../components/CharacterCard";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import "./CharacterList.scss";

const CharacterList = ({
  characterList,
  getCharacterList,
  isSucces,
  isLoading,
  isError,
  errorDetail,
  searchValue,
}) => {
  let navigate = useNavigate();
  const [actualPage, setActualPage] = useState(1);

  const handleGoCharacter = (id) => {
    navigate(`/character/${id}`);
  };

  const handleNextPage = () => {
    const payload = {
      api: characterList.info.next,
    };
    getCharacterList(payload);
    setActualPage(actualPage + 1);
  };

  const handlePrevPage = () => {
    const payload = {
      api: characterList.info.prev,
    };
    getCharacterList(payload);
    setActualPage(actualPage - 1);
  };

  useEffect(() => {
    let searchValueTemp = "";
    if (searchValue) {
      setActualPage(1);
      searchValueTemp = searchValue.trim().replace(" ", "%20");
    }
    const payload = {
      api: `https://rickandmortyapi.com/api/character/?page=${actualPage}&name=${searchValueTemp}`,
    };
    getCharacterList(payload);
  }, [searchValue]);

  return (
    <div className="CharacterList">
      <Pagination
        actualPage={actualPage}
        disableNext={!characterList?.info?.next}
        next={handleNextPage}
        disablePrev={!characterList?.info?.prev}
        prev={handlePrevPage}
      />
      <div className="CharacterList__container">
        {isSucces &&
          characterList.results.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                image={character.image}
                goToCharacter={() => {
                  handleGoCharacter(character.id);
                }}
              />
            );
          })}
      </div>
      {isSucces && (
        <Pagination
          actualPage={actualPage}
          disableNext={!characterList?.info?.next}
          next={handleNextPage}
          disablePrev={!characterList?.info?.prev}
          prev={handlePrevPage}
        />
      )}
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characterList: state.characterList.data,
    isSucces: state.characterList.isSucces,
    isLoading: state.characterList.isLoading,
    isError: state.characterList.isError,
    errorDetail: state.characterList.errorDetail,
  };
};

const mapDispatchToProps = {
  getCharacterList: (payload) => getCharacterListAction(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
