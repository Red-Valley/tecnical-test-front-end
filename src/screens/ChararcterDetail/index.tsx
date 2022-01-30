import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from 'components/CharacterCard';
import { useGetCharacterByIdQuery } from 'services/rickAndMortyService';
import { Container, Heading } from '@chakra-ui/react';

function ChararcterDetail() {
  const { characterId } = useParams();
  const { data, error, isLoading } = useGetCharacterByIdQuery({ id: Number(characterId) });

  if (isLoading)
    return (
      <Heading as="h1" variant="bigTitle" color="white">
        cargndo...
      </Heading>
    );

  if (error)
    return (
      <Heading as="h1" variant="bigTitle" color="white">
        algo malo paso
      </Heading>
    );

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
