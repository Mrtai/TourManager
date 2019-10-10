import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import {
  signUpSuccess,
  loginSuccess,
  forgotPasswordSuccess,
  resetPasswordSuccess,
  getOCSuccess
} from "../actions";
import { showLoader, hideLoader } from "base/redux/General/GeneralAction";
import { setCookie, getCookie } from "base/helper/cookie";
import { signUpFromApi, loginFromApi, forgotPasswordFromApi, resetPasswordFromApi, getInfoUserFromAPI } from "./api";

const MESS_ERR = "Lỗi hệ thống";

const getAddressDefault = data => {
  let address = {};
  if(data.length > 0){
    data.forEach(element => {
      if(element.default_checkout === 1) address = element;
    });
  }
  return address;
}

function* onSignUp(action) {
  const { info, callback, errorCallback } = action.payload;
  yield put(showLoader());
  try {
    yield delay(500, true);
    const response = yield call(signUpFromApi, info);
    if (response.data.status_code === 200) {
      yield put(signUpSuccess(response.data.data));
      yield callback(response.data.message);
    } else {
      yield errorCallback(response.data.data.email);
    }
    yield put(hideLoader());
  } catch (error) {
    yield errorCallback(MESS_ERR);
    yield put(hideLoader());
  }
}

function* onLogin(action) {
  const { account, callback, errorCallback } = action.payload;
  yield put(showLoader());
  try {
    yield delay(500, true);
    const response = yield call(loginFromApi, account);
    switch (response.data.status_code) {
      case 200: {
          yield put(loginSuccess(response.data.data));
          yield put(getOCSuccess(response.data.data.pointOc));
          sessionStorage.setItem("USER", JSON.stringify(response.data.data));
          localStorage.setItem("ADDRESS", JSON.stringify(getAddressDefault(response.data.data.address)));
          setCookie("token", response.data.data.access_token, 1);
          yield callback(response.data.message, response.data.status_code);
          break;
      }
      case 0: {
          yield callback(response.data.message, response.data.status_code);
          break;
      }
      default: {
          yield errorCallback(response.data.message);
          yield put(hideLoader());
      }
    }
  } catch (error) {
    yield errorCallback(MESS_ERR);
    yield put(hideLoader());
  }
}

function* getInfoUser({callback}) {
  const { errorCallback } = callback;
  try {
    yield delay(500, true);
    const response = yield call(getInfoUserFromAPI, getCookie("token"));
    if (response.data.status_code === 200) {
      yield put(loginSuccess(response.data.data));
      yield put(getOCSuccess(response.data.data.pointOc));
      sessionStorage.setItem("USER", JSON.stringify(response.data.data));
    } else {
      yield errorCallback(response.data.message);
    }
  } catch (error) {
    yield errorCallback(MESS_ERR);
    yield put(hideLoader());
  }
}

function* onForgotPassword(action) {
  const { email, callback, errorCallback } = action.payload;
  yield put(showLoader());
  try {
    yield delay(500, true);
    const response = yield call(forgotPasswordFromApi, email);
    if (response.data.status_code === 200) {
      yield put(forgotPasswordSuccess());
      yield callback(response.data.message);
    } else {
      yield errorCallback(response.data.message);
    }
    yield put(hideLoader());
  } catch (error) {
    yield errorCallback(MESS_ERR);
    yield put(hideLoader());
  }
}

function* onResetPassword(action) {
  const { info, callback, errorCallback } = action.payload;
  yield put(showLoader());
  try {
    yield delay(500, true);
    const response = yield call(resetPasswordFromApi, info);
    if (response.data.status_code === 200) {
      yield put(resetPasswordSuccess());
      yield callback(response.data.message);
    } else {
      yield errorCallback(response.data.message);
    }
    yield put(hideLoader());
  } catch (error) {
    yield errorCallback(MESS_ERR);
    yield put(hideLoader());
  }
}
/********************************* Watcher *********************************/
function* watchOnSignUp() {
  yield takeLatest(Types.SIGNUP, onSignUp);
}

function* watchOnLogin() {
  yield takeLatest(Types.LOGIN, onLogin);
}

function* watchOnForgotPassword() {
  yield takeLatest(Types.FORGOT_PASSWORD, onForgotPassword);
}

function* watchOnResetPassword() {
  yield takeLatest(Types.RESET_PASSWORD, onResetPassword);
}

function* watchOnGetInfoUser() {
  yield takeLatest(Types.GET_OC, getInfoUser);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnSignUp),
    fork(watchOnLogin),
    fork(watchOnForgotPassword),
    fork(watchOnResetPassword),
    fork(watchOnGetInfoUser)
  ]);
}
