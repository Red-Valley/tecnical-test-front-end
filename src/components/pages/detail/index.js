import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailSelector,
  getLoadingSelector,
} from "../../../store/selectors";
import { getDetail } from "../../../store/actions";
import CardDetail from "../../molecules/card-detail";
import { Container } from "react-bootstrap";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingSelector);
  const detail = useSelector(getDetailSelector);

  React.useEffect(() => {
    dispatch({ type: getDetail, payload: { id } });
  }, [dispatch, id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Link to="/" className="btn btn-secondary btn-lg">
        back
      </Link>
      <CardDetail character={detail} />
    </Container>
  );
};

export default Detail;
