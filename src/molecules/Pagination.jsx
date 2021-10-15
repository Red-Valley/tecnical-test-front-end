import { usePagination } from "../hooks/usePagination";
import { Button } from "../atoms/Button";

import "../styles/scss/molecules/pagination.scss";

export const Pagination = ({
  pageSize = 20,
  currentPage,
  totalCount,
  onPageChange,
  siblingCount,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        <li className="page-item">
          <Button
            className="page-link"
            isDisabled={currentPage === 1}
            type="none"
            handleClick={onPrevious}
          >
            Previous
          </Button>
        </li>
        {paginationRange.map((page) => (
          <li className="page-item" key={page}>
            <Button
              className={`page-link ${page === currentPage ? "active" : ""}`}
              isDisabled={currentPage === page}
              type="none"
              handleClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          </li>
        ))}
        <li className="page-item">
          <Button
            className="page-link"
            isDisabled={currentPage === lastPage}
            type="none"
            handleClick={onNext}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};
