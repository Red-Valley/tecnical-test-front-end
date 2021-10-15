import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConfig } from "../../app/apiConfig";

const initialState = {
  data: {
    info: {},
    results: [],
  },
  error: false,
  loading: false,
};

export const fetchCharacters = createAsyncThunk(
  "api/fetchAll",
  async ({ page = 1, name = "" }) => {
    let url = `${apiConfig.base_url}/character/?page=${page}`;

    if (name) {
      url += `&name=${name}`;
    }
    const response = await fetch(url).then((res) => res.json());
    return response;
  }
);

const apiSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.loading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchCharacters.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const selectLoading = ({ loading }) => loading;
export const selectData = ({ api: { data } }) => data.results;
export const selectCharacter = (state, id) => {
  return state.api.data.results.find((item) => item.id === id);
};
export const selectDataInfoCount = ({ api: { data } }) => data.info?.count;

export const { setLoading, setData, setError } = apiSlice.actions;
export default apiSlice.reducer;
