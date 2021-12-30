import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.rs';
import * as actionCreators from '../../actions/rs/rs.action';
import { getRS } from "../../services/rs/rs.service";


function* onLoadRS({userCv}: actionTypes.GetRSAction) {
  try {
    // yield put(actionCreators.getRsRequest());
    const {data} = yield call(getRS, userCv);
    yield put(actionCreators.getRsSuccess(data))
  } catch(e) {
    console.log(e);
  }
}

function* watchOnLoadRS() {
  yield takeEvery(actionTypes.GET_RS, onLoadRS);
}

export default function* rsSaga() {
  yield all([fork(watchOnLoadRS)]);
}