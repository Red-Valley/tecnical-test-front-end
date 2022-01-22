import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setDarkModeAction } from "../../actions";

import "./Home.scss";

const Home = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    setDarkMode(false);
  }, []);

  useEffect(() => {
    console.log("darkMode", darkMode);
  }, [darkMode]);

  return (
    <section className="Home">
      <h1>tecnical-test-front-end</h1>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

const mapDispatchToProps = {
  setDarkMode: (payload) => setDarkModeAction(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
