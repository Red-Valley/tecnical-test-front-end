import React from "react";

import "./CharacterDetail.scss";

const CharacterDetail = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
}) => {
  return (
    <div className="CharacterDetail" key={id}>
      <figure className="CharacterDetail__figure">
        <img src={image} alt={name} />
      </figure>
      <table className="CharacterDetail__table">
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Estado</td>
            <td>{status}</td>
          </tr>
          <tr>
            <td>Especie</td>
            <td>{species}</td>
          </tr>
          <tr>
            <td>Tipo</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Genero</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>Origen</td>
            <td>{origin}</td>
          </tr>
          <tr>
            <td>Ubicación</td>
            <td>{location}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CharacterDetail;
