import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rickAndMortyService = createApi({
  reducerPath: 'rickAndMorty',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: builder => ({
    getCharacterList: builder.query<
      { results: Array<any>; info: { pages: number } },
      { page: number; search?: string }
    >({
      query: ({ page = 0, search = '' }) => {
        return `/?page=${page}${search ? `&name=${search}` : ''}`;
      }
    }),
    getCharacterById: builder.query<any, { id: number }>({
      query: ({ id }) => {
        return `/${id}`;
      }
    })
  })
});

export const { useGetCharacterListQuery, useGetCharacterByIdQuery } = rickAndMortyService;
