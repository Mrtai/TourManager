import { takeLatest, put , call} from "redux-saga/effects";
import * as types from '../../constants/ActionTypes'
import  API from '../apis/api';


function* SignUpOn({user}) {
  //console.log("user:",user);
  const x = call(API(user));
  yield put({ type: "SIGN_UP_ON", user: user });
}

export function* watchSignUpOn() {
  //yield takeLatest("SIGN_UP", SignUpOn);
  yield takeLatest(types.SIGN_UP, SignUpOn);
}