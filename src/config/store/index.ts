import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { rickAndMortyService } from 'services/rickAndMortyService';

import paginator from './paginator';

export const store = configureStore({
  reducer: {
    [rickAndMortyService.reducerPath]: rickAndMortyService.reducer,
    [paginator.name]: paginator.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rickAndMortyService.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
