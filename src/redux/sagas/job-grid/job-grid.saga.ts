import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.job-grid';
import * as actionCreators from '../../actions/job-grid/job.action';
import * as progressAction from '../../actions/progress/progress.action';

import { fetchJobs } from "../../services/job-grid/job-grid.service";

function* onLoadJobs({numOfJobs, search}: actionTypes.GetJobGridAction) {
  try {
    // yield put(actionCreators.getJobGridRequest());
    yield put(progressAction.beginProgress());
    const {data} = yield call(fetchJobs, numOfJobs, search);
    yield put(actionCreators.getJobGridSuccess(data))
  } catch(e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnLoadJobs() {
  yield takeEvery(actionTypes.GET_JOBS_GRID, onLoadJobs);
}

export default function* jobsSaga() {
  yield(all([fork(watchOnLoadJobs)]))
}