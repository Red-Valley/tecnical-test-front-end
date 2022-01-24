import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getCharacterListAction } from "../../actions";

import CharacterCard from "../../components/CharacterCard";
import Pagination from "../../components/Pagination";

import "./CharacterList.scss";

const CharacterList = ({ characterList, getCharacterList, isSucces }) => {
  const [actualPage, setActualPage] = useState(1);

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
    const payload = {
      api: `https://rickandmortyapi.com/api/character/?page=${actualPage}`,
    };
    getCharacterList(payload);
  }, []);

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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characterList: state.characterList.data,
    isSucces: state.characterList.isSucces,
  };
};

const mapDispatchToProps = {
  getCharacterList: (payload) => getCharacterListAction(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
