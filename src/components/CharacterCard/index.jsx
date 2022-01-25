import React from "react";

import "./CharacterCard.scss";

const CharacterCard = ({ id, name, status, species, image, goToCharacter }) => {
  return (
    <div className="CharacterCard" key={id} onClick={goToCharacter}>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="semi-title">{name}</div>
      <div>
        {status} - {species}
      </div>
    </div>
  );
};

export default CharacterCard;
