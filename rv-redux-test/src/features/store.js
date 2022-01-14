import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characters/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});
