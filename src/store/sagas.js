import { all, call, put, select, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import RickAndMortyApi from "../services/rickMorty.api";
import { getListSelector } from "./selectors";

export function* getDataTrigger({ payload = {} }) {
  try {
    const currentValues = yield select(getListSelector);
    const { page = currentValues.currentPage, filter = currentValues.filter } =
      payload;
    const res = yield call(RickAndMortyApi.getAllCharacters, page, filter);
    yield put({
      type: actions.getDataSuccess,
      payload: { ...res, filter, currentPage: page },
    });
  } catch (error) {
    console.error(error);
    yield put({ type: actions.getDataError, payload: { error } });
  }
}

export function* getDetailTrigger({ payload = {} }) {
  try {
    const { id } = payload;
    const res = yield call(RickAndMortyApi.getCharacter, id);
    yield put({ type: actions.getDetailSuccess, payload: res });
  } catch (error) {
    console.error(error);
    yield put({ type: actions.getDetailError, payload: { error } });
  }
}

export function* watchActions() {
  yield takeEvery(actions.getData, getDataTrigger);
  yield takeEvery(actions.getDetail, getDetailTrigger);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(watchActions)]);
}
