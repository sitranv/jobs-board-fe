import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/user/action.applied-job';
import * as actionCreators from '../../actions/user/applied-job.action';
import * as progressAction from '../../actions/progress/progress.action';
import { getAppliedJobs } from "../../services/user/applied-job.service";

function* onGetAppliedJobs() {
  try {
    yield put(progressAction.beginProgress());
    const { data } = yield call(getAppliedJobs);
    console.log(data);
    yield put(actionCreators.getAppliedJobSuccess(data))
  } catch (e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnGetAppliedJobs() {
  yield takeEvery(actionTypes.USER_GET_APPLIED_JOB, onGetAppliedJobs);
}

export default function* appliedJobSaga() {
  yield (all([fork(watchOnGetAppliedJobs)]))
}