import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setFilter } = searchSlice.actions;

export default searchSlice.reducer;
