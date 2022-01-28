import "./card-detail.scss";
import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const CardDetail = ({ character = {} }) => {
  const { name, image, location, status, origin, gender, species, type } =
    character;
  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>{name}</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Image variant="top" src={image} />
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col md="auto">
          <p className="card-text">
            Location: <span>{location?.name}</span>
          </p>
          <p className="card-text">
            Status: <span>{status}</span>
          </p>
          <p className="card-text">
            Origin: <span>{origin?.name}</span>
          </p>
          <p className="card-text">
            Gender: <span>{gender}</span>
          </p>
          <p className="card-text">
            Specie: <span>{species}</span>
          </p>
          <p className="card-text">
            type: <span>{type}</span>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default CardDetail;
