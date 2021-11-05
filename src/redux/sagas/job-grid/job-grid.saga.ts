import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.job-grid';
import * as actionCreators from '../../actions/job-grid/job.action';
import { fetchJobs } from "../../services/job-grid/job-grid.service";

function* onLoadJobs() {
  try {
    yield put(actionCreators.getJobGridRequest());
    const {data} = yield call(fetchJobs);
    yield put(actionCreators.getJobGridSuccess(data))
  } catch(e) {

  }
}

function* watchOnLoadJobs() {
  yield takeEvery(actionTypes.GET_JOBS_GRID, onLoadJobs);
}

export default function* jobsSaga() {
  yield(all([fork(watchOnLoadJobs)]))
}