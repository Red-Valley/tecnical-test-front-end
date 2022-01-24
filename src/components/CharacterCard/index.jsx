import React from "react";

import "./CharacterCard.scss";

const CharacterCard = ({ id, name, status, species, image }) => {
  return (
    <div className="CharacterCard" key={id}>
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
