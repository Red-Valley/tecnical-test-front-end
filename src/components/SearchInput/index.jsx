import React from "react";

import { MdSearch } from "react-icons/md";

import "./SearchInput.scss";

const SearchInput = ({ searchValue, setSearchValue }) => {
  const handleOnSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="SearchInput">
      <MdSearch size="32px" className="SearchInput__icon" />
      <input
        className="SearchInput__input"
        type="text"
        placeholder="Busca a tu personaje favorito"
        value={searchValue}
        onChange={handleOnSearchValueChange}
      />
    </div>
  );
};

export default SearchInput;
