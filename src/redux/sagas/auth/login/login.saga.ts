import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../../constants/action-types/action.login';
import * as actionCreators from '../../../actions/auth/login/login.action';
import * as progressAction from '../../../actions/progress/progress.action';
import * as profileAction from '../../../actions/profile/profile.action';
import { login } from "../../../services/auth/login.service";

function* onLogin({userRequest}: actionTypes.UserLoginAction) {
  try {
    // yield put(actionCreators.loginRequest());
    yield put(progressAction.beginProgress());
    const { data } = yield call(login, userRequest);
    console.log(data);
    yield put(actionCreators.loginSuccess(data))
    if(data.token) {
      yield put(profileAction.getProfileSuccess(data.user))
    }
  } catch (e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnLogin() {
  yield takeEvery(actionTypes.USER_LOGIN, onLogin);
}

export default function* loginSaga() {
  yield (all([fork(watchOnLogin)]))
}