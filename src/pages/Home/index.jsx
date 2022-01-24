import React from "react";

import CharacterList from "../../containers/CharacterList";

import "./Home.scss";

const Home = () => {
  return (
    <section className="Home">
      <div className="big-title">Rick and Morty Characters</div>
      <CharacterList />
    </section>
  );
};

export default Home;
