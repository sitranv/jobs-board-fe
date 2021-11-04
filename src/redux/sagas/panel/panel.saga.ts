import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.panels';
import * as actionCreators from '../../actions/panel/panel.action';
import { fetchPanels } from "../../services/panel/panel.service";


function* onLoadPanels() {
  try {
    yield put(actionCreators.getPanelsRequest());
    const {data} = yield call(fetchPanels);
    yield put(actionCreators.getPanelsSuccess(data))
  } catch(e) {
    console.log(e);
  }
}

function* watchOnLoadPanels() {
  yield takeEvery(actionTypes.GET_PANELS, onLoadPanels);
}

export default function* panelsSaga() {
  yield all([fork(watchOnLoadPanels)]);
}