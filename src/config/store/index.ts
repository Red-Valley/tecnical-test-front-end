import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { rickAndMortyService } from 'services/rickAndMortyService';

export const store = configureStore({
  reducer: {
    [rickAndMortyService.reducerPath]: rickAndMortyService.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rickAndMortyService.middleware)
});

setupListeners(store.dispatch);
