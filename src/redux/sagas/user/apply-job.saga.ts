import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/user/action.apply-job';
import * as actionCreators from '../../actions/user/apply-job.action';
import * as progressAction from '../../actions/progress/progress.action';
import { applyJob } from "../../services/user/apply-job.service";

function* onApplyJob({userCv, jobId}: actionTypes.UserApplyJobAction) {
  try {
    yield put(progressAction.beginProgress());
    const { data } = yield call(applyJob, userCv, jobId);
    console.log(data);
    yield put(actionCreators.applyJobSuccess(data))
  } catch (e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnApplyJob() {
  yield takeEvery(actionTypes.USER_APPLY_JOB, onApplyJob);
}

export default function* applyJobSaga() {
  yield (all([fork(watchOnApplyJob)]))
}