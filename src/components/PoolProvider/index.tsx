import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'config/store';
import { theme } from 'config/theme';

interface Props {
  children: React.ReactNode;
}

function PoolProvider({ children }: Props) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default PoolProvider;
