import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../common/API/charactersApi";

export const fetchAsyncCharacters = createAsyncThunk(
  "characters/fetchAsyncCharacters",
  async () => {
    try {
      const { data } = await api.get();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

// fetch character by id
export const fetchAsyncCharacterById = createAsyncThunk(
  "characters/fetchAsyncCharacterById",
  async (id) => {
    try {
      const { data } = await api.get("/" + id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  characters: [],
  selectedCharacter: {},
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
  extraReducers: {
    [fetchAsyncCharacters.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAsyncCharacters.fulfilled]: (state, action) => {
      state.characters = action.payload;
      state.loading = false;
    },
    [fetchAsyncCharacters.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [fetchAsyncCharacterById.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAsyncCharacterById.fulfilled]: (state, action) => {
      state.selectedCharacter = action.payload;
      state.loading = false;
    },
    [fetchAsyncCharacterById.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { addCharacters } = characterSlice.actions;
// Get all characters
export const getCharacters = (state) => state.characters.characters;

export default characterSlice.reducer;
