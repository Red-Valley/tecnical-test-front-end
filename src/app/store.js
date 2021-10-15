import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "../features/characters/characters-slice";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import paginationSlice from "../features/characters/pagination-slice";
import searchSlice from "../features/characters/search-slice";

const rootReducer = combineReducers({
  [charactersApi.reducerPath]: charactersApi.reducer,
  pagination: paginationSlice,
  search: searchSlice,
});

const persistConfig = {
  storage,
  key: "root",
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(charactersApi.middleware),
});
