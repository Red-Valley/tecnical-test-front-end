import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailSelector,
  getLoadingSelector,
} from "../../../store/selectors";
import { getDetail } from "../../../store/actions";
import CardDetail from "../../molecules/card-detail";
import { Container, Spinner, Stack } from "react-bootstrap";
import "./detail.scss"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingSelector);
  const detail = useSelector(getDetailSelector);

  React.useEffect(() => {
    dispatch({ type: getDetail, payload: { id } });
  }, [dispatch, id]);

  if (loading) {
    return (
      <Stack  className="col-md-1 mx-auto">
          <div>
            <Spinner className="justify-content-md-center loading-icon" animation="border" variant="primary" />
          </div>
      </Stack>
    );
  }

  return (
    <Container>
      <Link to="/" className="btn btn-secondary btn-lg">
        Go Back To Main List
      </Link>
      <CardDetail character={detail} />
    </Container>
  );
};

export default Detail;
