import { Heading } from '@chakra-ui/react';
import * as React from 'react';
import { useGetCharacterListQuery } from 'services/rickAndMortyService';

function App() {
  const [page, setPage] = React.useState(1)
  const { data, error, isLoading } = useGetCharacterListQuery(page);


  console.log('isLoading', isLoading);
  if(isLoading) return <p>cargndo...</p>

  if(error) return <p>algo malo paso</p>

  console.log('data', data);


  return (
    <div className="App">
      <h1>Hola mundo</h1>
      {data?.results?.map(c => (
        <Heading as="h6" variant="h1" key={c.id}>
          {c.name}
        </Heading>
      ))}
      <hr />

      <div>
        <button onClick={() => setPage(prev => prev + 1)}>next page</button>
      </div>
      
      <div>
        <button onClick={() => setPage(prev => prev - 1)}>prev page</button>
      </div>
    </div>
  );
}

export default App;
