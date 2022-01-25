import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Character from "../pages/Character";
import NotFound from "../pages/NotFound";

import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/character/:id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
