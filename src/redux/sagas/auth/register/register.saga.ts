import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../../constants/action-types/action.register';
import * as actionCreators from '../../../actions/auth/register/register.action';
import * as progressAction from '../../../actions/progress/progress.action';
import * as profileAction from '../../../actions/profile/profile.action';
import { register, confirm } from "../../../services/auth/register.service";

function* onRegister({userRequest}: actionTypes.UserRegisterAction) {
  try {
    // yield put(actionCreators.loginRequest());
    yield put(progressAction.beginProgress());
    const { data } = yield call(register, userRequest);
    console.log(data);
    yield put(actionCreators.registerSuccess(data))
    if(data.token) {
      yield put(profileAction.getProfileSuccess(data.user))
    }
  } catch (e: any) {
    yield put(actionCreators.registerFailed(e.response.data))
    console.log(e, e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}


function* onConfirm({token}: actionTypes.UserConfirmEmailAction) {
  try {
    // yield put(actionCreators.loginRequest());
    yield put(progressAction.beginProgress());
    const { data } = yield call(confirm, token);
    console.log(data);
    yield put(actionCreators.confirmSuccess(data))
  } catch (e: any) {
    yield put(actionCreators.confirmFailed(e.response.data))
    console.log(e, e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnRegister() {
  yield takeEvery(actionTypes.USER_REGISTER, onRegister);
  yield takeEvery(actionTypes.USER_CONFIRM_EMAIL, onConfirm);
}

export default function* registerSaga() {
  yield (all([fork(watchOnRegister)]))
}