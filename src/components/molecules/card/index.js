import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.scss";

const CardMolecule = ({ character }) => {
  const { id, name, image, location, status, origin } = character;
  return (
    <Card className="card-container" style={{ width: "18rem" }}>
      <Link to={`/detail/${id}`}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Body>
          <p className="card-text">
            Location: <span>{location.name}</span>
          </p>
          <p className="card-text">
            Status: <span>{status}</span>
          </p>
          <p className="card-text">
            Origin: <span>{origin.name}</span>
          </p>
        </Card.Body>
        <Link to={`/detail/${id}`} className="btn btn-primary ">
          Show More
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardMolecule;
