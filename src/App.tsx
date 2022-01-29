import { Box, Container } from '@chakra-ui/react';
import CharacterCard from 'components/CharacterCard';
import Paginator from 'components/Paginator';
import * as React from 'react';
import { useGetCharacterListQuery } from 'services/rickAndMortyService';

function App() {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useGetCharacterListQuery(page);

  if (isLoading) return <p>cargndo...</p>;

  if (error) return <p>algo malo paso</p>;

  return (
    <Container bgColor="white" minW="full" p={0}>
      <Box width="full" h="xs" bgColor="whiteGrey">
        Hola mundo
      </Box>
      <input type="text" />
      <Container
        maxW="7xl"
        centerContent
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(600px, 1fr))"
        gap={2}
        p={3}
      >
        {data?.results?.map(({ image, name, location, origin, status, species, id }) => (
          <CharacterCard
            key={id}
            image={image}
            name={name}
            lastLocation={location?.name}
            origin={origin.name}
            status={status}
            species={species}
          />
        ))}
      </Container>
      <Container centerContent mb={4}>
        <Paginator currentPage={page} lastPage={data?.info?.pages || 0} setCurrentPage={setPage} />
      </Container>
    </Container>
  );
}

export default App;
