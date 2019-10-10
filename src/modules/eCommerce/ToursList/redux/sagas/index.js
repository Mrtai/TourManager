import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from '../constants';
import { getToursListSuccess  } from "../actions";
import {showLoader, hideLoader} from "base/redux/General/GeneralAction";
import { getTourListFromApi } from "./api";

function* onGetToursList() {
  yield put(showLoader())
  try {
    yield delay(500, true);
    const response = yield call(getTourListFromApi);
    if (response.data.status_code === 200) {
      yield put(getToursListSuccess(response.data.data));
      yield put(hideLoader())
    }
  } catch (error) {
    console.log("List Product", error);
  }
}

function* watchOnGetToursList() {
  yield takeLatest(Types.GET_TOURS_LIST, onGetToursList);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetToursList)
  ]);
}
