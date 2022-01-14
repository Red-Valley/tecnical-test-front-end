import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../common/API/charactersApi";

const fetchAsyncCharacters = createAsyncThunk(
  "characters/fetchAsyncCharacters",
  async () => {
    try {
      const { data } = await api.get();
      dispatch(addCharacters(data.results));
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  characters: [],
  loading: false,
  error: null,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: {},
});

export const { addCharacters } = characterSlice.actions;
// Get all characters
export const getCharacters = (state) => state.characters.characters;

export default characterSlice.reducer;
