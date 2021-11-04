import { all, fork } from 'redux-saga/effects';
import panelsSaga from './panel/panel.saga';

export default function* rootSaga() {
  yield all([fork(panelsSaga)])
}