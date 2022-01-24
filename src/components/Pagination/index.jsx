import React from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import ButtonIcon from "../ButtonIcon";

import "./Pagination.scss";

const Pagination = ({ actualPage, disableNext, next, disablePrev, prev }) => {
  return (
    <div className="Pagination">
      <ButtonIcon
        Icon={MdChevronLeft}
        alignIcon="left"
        text="Página anterior"
        disable={disablePrev}
        onClick={prev}
      />
      <p className="Pagination__actual-page">Pagina actual: {actualPage}</p>
      <ButtonIcon
        Icon={MdChevronRight}
        alignIcon="right"
        text="Página siguiente"
        disable={disableNext}
        onClick={next}
      />
    </div>
  );
};

export default Pagination;
