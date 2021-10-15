import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalCount: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
    changeTotalCount(state, action) {
      state.totalCount = action.payload;
    },
  },
});

export const { changePage, changeTotalCount } = paginationSlice.actions;
export default paginationSlice.reducer;
