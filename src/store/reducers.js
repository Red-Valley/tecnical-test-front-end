import {
  getData,
  getDataSuccess,
  getDataError,
  getDetail,
  getDetailSuccess,
  getDetailError,
} from "./actions";

const initialState = {
  list: {
    info: {},
    results: [],
    currentPage: 1,
    filter: "",
  },
  detail: {},
  loading: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getData:
      state.loading = true;
      break;
    case getDataSuccess:
      state.list = { ...payload };
      state.loading = false;
      break;
    case getDataError:
      state.loading = false;
      break;
    case getDetail:
      state.loading = true;
      break;
    case getDetailSuccess:
      state.detail = { ...payload };
      state.loading = false;
      break;
    case getDetailError:
      state.loading = false;
      break;
    default:
      break;
  }
  return { ...state };
};

export default reducer;
