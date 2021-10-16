import { useEffect } from "react";
import { Header } from "../organisms/Header";
import { CardsGrid } from "../organisms/CardsGrid";
import { CubeGrid } from "../atoms/CubeGrid";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "../molecules/Pagination";
import {
  changePage,
  changeTotalCount,
} from "../features/characters/pagination-slice";
import {
  selectLoading,
  fetchCharacters,
  selectDataInfoCount,
} from "../features/characters/api-slice";
import { selectFilter } from "../features/characters/search-slice";

import "../styles/scss/templates/home.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const { search: filter } = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);
  const { currentPage, totalCount = 0 } = useSelector(
    (state) => state.pagination
  );
  const count = useSelector(selectDataInfoCount);

  // On pagination or filter changes
  useEffect(() => {
    dispatch(fetchCharacters({ page: currentPage, name: filter }));
  }, [currentPage, filter, dispatch]);

  // Pagination items total change
  useEffect(() => {
    dispatch(changeTotalCount(count));
  }, [count, dispatch]);

  return (
    <div className="container" id="home">
      <Header />
      {isLoading ? (
        <div
          style={{ margin: "5rem 0 1rem 0", width: "100%" }}
          className="d-flex justify-content-center"
        >
          <CubeGrid />
        </div>
      ) : null}
      <CardsGrid />
      <div className="d-flex justify-content-center align-items-center">
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={20}
          onPageChange={(page) => dispatch(changePage(page))}
        />
      </div>
    </div>
  );
};
