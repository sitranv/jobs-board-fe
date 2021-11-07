import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../../constants/action-types/action.login';
import * as actionCreators from '../../../actions/auth/login/login.action';
import { login } from "../../../services/auth/login.service";

function* onLogin({userRequest}: actionTypes.UserLoginAction) {
  try {
    yield put(actionCreators.loginRequest());
    const { data } = yield call(login, userRequest);
    console.log(data);
    yield put(actionCreators.loginSuccess())
  } catch (e: any) {
    console.log(e.response.data);
  }
}

function* watchOnLogin() {
  yield takeEvery(actionTypes.USER_LOGIN, onLogin);
}

export default function* loginSaga() {
  yield (all([fork(watchOnLogin)]))
}