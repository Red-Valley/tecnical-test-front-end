import { Container, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import CharacterCard from 'components/CharacterCard';
import Paginator from 'components/Paginator';
import { Search2Icon } from '@chakra-ui/icons';
import { debounce } from 'utils/debouce';
import { useGetCharacterListQuery } from 'services/rickAndMortyService';
import { Link } from 'react-router-dom';
import React from 'react';

function ChararterCollection() {
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');

  const handleSetQuery = (queryParam: string) => {
    setSearch(queryParam);
  };

  const handleSearchDebouce = debounce(handleSetQuery);

  const handleSearch = (e: React.FormEvent) => {
    let { value } = e.target as HTMLInputElement;
    handleSearchDebouce(value);
  };

  const { data, error, isLoading } = useGetCharacterListQuery({ page, search });

  if (isLoading) return <p>cargndo...</p>;

  if (error) throw new Error('Fetching Error');

  return (
    <Container minW="100vw">
      <Container centerContent my={2}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search at Rick and mory" onChange={handleSearch} color="white" />
        </InputGroup>
      </Container>
      <Container
        maxW="7xl"
        centerContent
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(600px, 1fr))"
        gap={2}
        p={3}
      >
        {data?.results?.map(({ image, name, location, origin, status, species, id }) => (
          <Link key={id} to={`/${id}`}>
            <CharacterCard
              key={id}
              image={image}
              name={name}
              lastLocation={location?.name}
              origin={origin.name}
              status={status}
              species={species}
            />
          </Link>
        ))}
      </Container>
      <Container centerContent mb={4}>
        <Paginator currentPage={page} lastPage={data?.info?.pages || 0} setCurrentPage={setPage} />
      </Container>
    </Container>
  );
}

export default ChararterCollection;
