import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListSelector } from "../../../store/selectors";
import { getData } from "../../../store/actions";
import SearchBar from "../../molecules/search-bar";
import PaginationBar from "../../molecules/pagination-bar";
import CardMolecule from "../../molecules/card";
import { Col, Container, Row } from "react-bootstrap";

const List = () => {
  const dispatch = useDispatch();
  const { info, results, currentPage, filter } = useSelector(getListSelector);

  React.useEffect(() => {
    dispatch({ type: getData });
  }, [dispatch]);

  if (!results) {
    window.location.reload();
  }
  
  return (
    <>
      <SearchBar value={filter} />
      <Container>
        <Row sm={1} md={2} lg={3} xl={3} xxl={4}>
          {results.map((character) => (
            <Col key={character.id}>
              <CardMolecule character={character} />
            </Col>
          ))}
        </Row>
      </Container>

      <PaginationBar page={currentPage} pages={info.pages} />
    </>
  );
};

export default List;
