import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rickAndMortyService = createApi({
  reducerPath: 'rickAndMorty',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: builder => ({
    getCharacterList: builder.query<{ results: Array<any>; info: { pages: number } }, number | string>({
      query: (page = 0) => `/?page=${page}`
    })
  })
});

export const { useGetCharacterListQuery } = rickAndMortyService;
