import * as React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { StatusContainer } from './StatusContainer';

interface Props {
  image: string;
  name: string;
  lastLocation: string;
  origin: string;
  status: string;
  species: string;
}

function CharacterCard({ image, name, lastLocation, origin, status, species }: Props) {
  return (
    <Container
      as="article"
      display="flex"
      minW={600}
      height={200}
      borderRadius="md"
      bgColor="blackAccent"
      boxShadow="lg"
      mb={4}
      padding={0}
    >
      <Image
        src={image}
        alt={name}
        objectFit="cover"
        w={230}
        borderBottomLeftRadius="md"
        borderTopLeftRadius="md"
      />
      <Box padding={3} w="100%">
        <Box mb={2}>
          <Heading as="h2" variant="h2" color="white">
            {name}
          </Heading>
          <StatusContainer status={status}>
            <Text as="span" textTransform="capitalize">
              {status}
            </Text>
            <Text mx={2}>{'-'}</Text>
            <Text as="span" textTransform="capitalize">
              {species}
            </Text>
          </StatusContainer>
        </Box>
        <Box mb={2}>
          <Heading as="h5" variant="h5" color="grey">
            Last known location:
          </Heading>
          <Text color="white" fontSize="lg">
            {lastLocation}
          </Text>
        </Box>
        <Box>
          <Heading as="h5" variant="h5" color="grey">
            First seen in:
          </Heading>
          <Text color="white" fontSize="lg">
            {origin}
          </Text>
        </Box>
      </Box>
    </Container>
  );
}

export default CharacterCard;
