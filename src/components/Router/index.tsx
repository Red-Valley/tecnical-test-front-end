import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'screens';
import ChararterCollection from 'screens/ChararterCollection';
import ChararcterDetail from 'screens/ChararcterDetail';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<ChararterCollection />} />
        <Route path=":characterId" element={<ChararcterDetail />} />
        <Route path="*" element={<ChararterCollection />} />
      </Route>
    </Routes>
  );
}

export default Router;
