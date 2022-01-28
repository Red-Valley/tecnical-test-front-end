import * as React from "react";
import { Routes, Route } from "react-router-dom";
import List from "./components/pages/list";
import Detail from "./components/pages/detail";
import "./App.scss";
import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>The Rick and Morty App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
               <span className="nav-span">By: Jose Miguel Mejia Chaverra</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
