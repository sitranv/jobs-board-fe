import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/user/action.applied-job';
import * as actionCreators from '../../actions/user/applied-job.action';
import * as progressAction from '../../actions/progress/progress.action';
import { getAppliedJobs, deleteAppliedJob } from "../../services/user/applied-job.service";

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


function* onDeleteAppliedJob({ jobId }: actionTypes.UserDeleteAppliedJobAction) {
  try {
    yield put(progressAction.beginProgress());
    const { data } = yield call(deleteAppliedJob, jobId);
    console.log(data);
    if(data) {
      yield put(actionCreators.deleteAppliedJobSuccess(data))
      yield put(actionCreators.getAppliedJob())
    } else {
      yield put(actionCreators.deleteAppliedJobFailed())
    }
  } catch (e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}


function* watchOnGetAppliedJobs() {
  yield takeEvery(actionTypes.USER_GET_APPLIED_JOB, onGetAppliedJobs);
  yield takeEvery(actionTypes.USER_DELETE_APPLIED_JOB, onDeleteAppliedJob);
}

export default function* appliedJobSaga() {
  yield (all([fork(watchOnGetAppliedJobs)]))
}