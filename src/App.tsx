import * as React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import Router from 'components/Router';

function App() {
  return (
    <Container bgColor="dark" minW="full" minH="100vh" p="0 0 20px 0">
      <Box display="flex" justifyContent="center" alignItems="center" minW="full" h="xs" bgColor="whiteGrey">
        <Heading as="h1" variant="bigTitle" fontSize="9xl">
          Rick and Morty
        </Heading>
      </Box>
      <Router />
    </Container>
  );
}

export default App;
