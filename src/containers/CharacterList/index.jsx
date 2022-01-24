import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getCharacterListAction } from "../../actions";

import CharacterCard from "../../components/CharacterCard";

import "./CharacterList.scss";

const CharacterList = ({ characterList, getCharacterList, isSucces }) => {
  useEffect(() => {
    const payload = {
      api: 'https://rickandmortyapi.com/api/character'
    };
    getCharacterList(payload);
  }, []);

  return (
    <div className="CharacterList">
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
