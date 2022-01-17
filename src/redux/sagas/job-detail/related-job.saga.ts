import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.related-job';
import * as actionCreators from '../../actions/job-detail/related-job.action';
import * as progressAction from '../../actions/progress/progress.action';

import { fetchRelatedJobDetail } from "../../services/job-detail/related-job.service";

function* onLoadJob({ hashtags }: actionTypes.GetRelatedJobAction) {
  try {
    yield put(progressAction.beginProgress());
    const {data} = yield call(fetchRelatedJobDetail, hashtags);
    console.log('related', data);
    yield put(actionCreators.getJobRelatedSuccess(data))
  } catch(e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnLoadJob() {
  yield takeEvery(actionTypes.GET_RELATED_JOB, onLoadJob);
}

export default function* relatedJobSaga() {
  yield(all([fork(watchOnLoadJob)]))
}