import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginatorState {
  value: number;
}

const initialState = { value: 1 } as PaginatorState;

const paginatorSlice = createSlice({
  name: 'paginator',
  initialState,
  reducers: {
    nextPage(state) {
      state.value++;
    },
    prevPage(state) {
      state.value--;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.value = action.payload;
    }
  }
});

export const { nextPage, prevPage, setCurrentPage } = paginatorSlice.actions;
export default paginatorSlice;
