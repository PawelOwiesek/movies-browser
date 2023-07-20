import { takeLatest, call, put, select, delay } from "redux-saga/effects";
import {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMoviesListError,
  getMovieId,
  selectMovieId,
} from "./movieDetailsSlice";
import { getMovieCredits, getMovieDetails } from "../getDataApi";

function* fetchMovieDetailsHandler() {
  try {
    yield delay(500);
    const id = yield select(selectMovieId);
    const details = yield call(getMovieDetails, { movieId: id });
    const credits = yield call(getMovieCredits, { movieId: id });
    yield put(fetchMovieDetails(details, credits));
    yield put(fetchMovieDetailsSuccess());
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
}
