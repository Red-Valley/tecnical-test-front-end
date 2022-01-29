import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from 'components/CharacterCard';
import { useGetCharacterByIdQuery } from 'services/rickAndMortyService';
import { Container, Text } from '@chakra-ui/react';

function ChararcterDetail() {
  const { characterId } = useParams();
  const { data, error, isLoading, isFetching } = useGetCharacterByIdQuery({ id: Number(characterId) });

  if (isLoading) return <Text color="white">isLoading esta cargndo...</Text>;

  if (isFetching) return <Text color="white">isFetching esta cargndo...</Text>;

  if (error) return <Text color="white">algo malo paso</Text>;

  return (
    <Container
      w="full"
      height="calc(100vh - 320px);"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CharacterCard
        key={data.id}
        image={data.image}
        name={data.name}
        lastLocation={data.location?.name}
        origin={data.origin.name}
        status={data.status}
        species={data.species}
      />
    </Container>
  );
}

export default ChararcterDetail;
