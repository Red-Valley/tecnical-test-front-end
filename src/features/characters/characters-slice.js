import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API }),
  endpoints: (builder) => ({
    getCharactersList: builder.query({
      query: () => `/character/`,
      transformResponse: (res) => res.results,
    }),
    getCharacterById: builder.query({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetCharactersListQuery } =
  charactersApi;
