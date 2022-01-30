import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'screens';
import ErrorBoundary from 'components/ErrorBoundary';
import FallbackUI from 'components/FallbackUI';

const ChararterCollection = React.lazy(() => import('screens/ChararterCollection'));
const ChararcterDetail = React.lazy(() => import('screens/ChararcterDetail'));

function Router() {
  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <ChararterCollection />
              </React.Suspense>
            }
          />
          <Route
            path=":characterId"
            element={
              <React.Suspense fallback={<>...</>}>
                <ChararcterDetail />
              </React.Suspense>
            }
          />
          <Route path="*" element={<ChararterCollection />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default Router;
