import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.job-detail';
import * as actionCreators from '../../actions/job-detail/job-detail.action';
import * as progressAction from '../../actions/progress/progress.action';

import { fetchJobDetail } from "../../services/job-detail/job-detail.service";

function* onLoadJob({jobId}: actionTypes.GetJobDetailAction) {
  try {
    // yield put(actionCreators.getJobGridRequest());
    yield put(progressAction.beginProgress());
    const {data} = yield call(fetchJobDetail, jobId);
    console.log(data);
    yield put(actionCreators.getJobDetailSuccess(data))
  } catch(e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnLoadJob() {
  yield takeEvery(actionTypes.GET_JOB_DETAIL, onLoadJob);
}

export default function* jobDetailSaga() {
  yield(all([fork(watchOnLoadJob)]))
}