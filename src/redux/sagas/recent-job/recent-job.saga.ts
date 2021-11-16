import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.recent-job';
import * as actionCreators from '../../actions/recent-job/recent-job.action';
import * as progressAction from '../../actions/progress/progress.action';

import { fetchJobsRecent } from "../../services/recent-job/recent-job.service";

function* onLoadJobsRecent() {
  try {
    // yield put(actionCreators.getJobGridRequest());
    yield put(progressAction.beginProgress());
    const {data} = yield call(fetchJobsRecent);
    console.log(data);
    yield put(actionCreators.getJobRecentSuccess(data))
  } catch(e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnLoadJobsRecent() {
  yield takeEvery(actionTypes.GET_RECENT_JOB, onLoadJobsRecent);
}

export default function* jobsRecentSaga() {
  yield(all([fork(watchOnLoadJobsRecent)]))
}