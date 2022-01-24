import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.rs';
import * as actionCreators from '../../actions/rs/rs.action';
import { getRS } from "../../services/rs/rs.service";
import * as progressAction from '../../actions/progress/progress.action';

function* onLoadRS({userCv}: actionTypes.GetRSAction) {
  try {
    // yield put(actionCreators.getRsRequest());
    yield put(progressAction.beginProgress());
    const {data} = yield call(getRS, userCv);
    yield put(actionCreators.getRsSuccess(data))
  } catch(e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnLoadRS() {
  yield takeEvery(actionTypes.GET_RS, onLoadRS);
}

export default function* rsSaga() {
  yield all([fork(watchOnLoadRS)]);
}