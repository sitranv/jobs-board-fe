import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/user/action.change-password';
import * as actionCreators from '../../actions/user/change-password.action';
import * as progressAction from '../../actions/progress/progress.action';
import { changePassword } from "../../services/user/change-password.service";

function* onChangePassword({request}: actionTypes.UserChangePasswordAction) {
  try {
    yield put(progressAction.beginProgress());
    const { data } = yield call(changePassword,request);
    console.log(data);
    yield put(actionCreators.changePassword(data))
  } catch (e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnChangePW() {
  yield takeEvery(actionTypes.USER_CHANGE_PASSWORD, onChangePassword);
}

export default function* changePasswordSaga() {
  yield (all([fork(watchOnChangePW)]))
}