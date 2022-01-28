import React from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getData } from "../../../store/actions";

const SearchBar = ({ value = "" }) => {
  const dispatch = useDispatch();
  const handleKeyPress = (evt) => {
    if (evt.charCode === 13) {
      const filter = evt.target.value;
      dispatch({ type: getData, payload: { filter, page: 1 } });
    }
  };

  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Control
          defaultValue={value}
          placeholder="Search Characters"
          onKeyPress={handleKeyPress}
        />
      </Form.Group>
    </Container>
  );
};

export default SearchBar;
