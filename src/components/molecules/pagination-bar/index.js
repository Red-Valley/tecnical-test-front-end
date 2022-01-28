import "./pagination-bar.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Pagination from "@vlsergey/react-bootstrap-pagination";
import { getData } from "../../../store/actions";

const PaginationBar = ({ page, pages }) => {
  const dispatch = useDispatch();

  const handlePageChange = ({ target: { name, value } }) => {
    dispatch({ type: getData, payload: { page: value + 1 } });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Pagination
          value={page - 1}
          totalPages={pages}
          onChange={handlePageChange}
        />
      </Row>
    </Container>
  );
};

export default PaginationBar;
