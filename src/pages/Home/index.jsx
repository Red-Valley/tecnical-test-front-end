import React, { useState, useEffect } from "react";

import CharacterList from "../../containers/CharacterList";
import SearchInput from "../../components/SearchInput";

import "./Home.scss";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="Home">
      <div className="big-title">Rick and Morty Characters</div>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <CharacterList searchValue={searchValue} />
    </section>
  );
};

export default Home;
