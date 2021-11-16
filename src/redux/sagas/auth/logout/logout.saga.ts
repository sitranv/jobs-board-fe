import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../../constants/action-types/action.login';
import * as progressAction from '../../../actions/progress/progress.action';
import * as profileAction from '../../../actions/profile/profile.action';

function* onLogout() {
  try {
    yield put(progressAction.beginProgress());
    yield put(profileAction.clearProfile());
  } catch (e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnLogout() {
  yield takeEvery(actionTypes.USER_LOGOUT, onLogout);
}

export default function* logoutSaga() {
  yield (all([fork(watchOnLogout)]))
}