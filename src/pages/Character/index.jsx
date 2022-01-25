import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

import CharacterDetail from "../../components/CharacterDetail";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import { getCharacterAction } from "../../actions";

import "./Character.scss";
import ButtonIcon from "../../components/ButtonIcon";

const Character = ({
  character,
  isSucces,
  isLoading,
  isError,
  errorDetail,
  getCharacter,
}) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const payload = {
      api: `https://rickandmortyapi.com/api/character/${id}`,
    };
    getCharacter(payload);
  }, []);

  return (
    <section className="Character">
      <div className="big-title">
        {character?.name || "Detalle del personaje"}
      </div>
      <ButtonIcon
        Icon={MdArrowBack}
        alignIcon="left"
        text="Regresar a la lista de personajes"
        onClick={handleGoBack}
        className="Character__button"
      />
      {isSucces && (
        <>
          <CharacterDetail
            id={character.id}
            name={character.name}
            status={character.status || "N/A"}
            species={character.species || "N/A"}
            type={character.type || "N/A"}
            gender={character.gender || "N/A"}
            origin={character.origin?.name || "N/A"}
            location={character.location?.name || "N/A"}
            image={character.image}
          />
        </>
      )}
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character.data,
    isSucces: state.character.isSucces,
    isLoading: state.character.isLoading,
    isError: state.character.isError,
    errorDetail: state.character.errorDetail,
  };
};

const mapDispatchToProps = {
  getCharacter: (payload) => getCharacterAction(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
