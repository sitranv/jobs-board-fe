import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/action.profile';
import * as actionCreators from '../../actions/profile/profile.action';
import { fetchProfile, updateProfile } from "../../services/profile/profile.service";


function* onLoadProfile({ token }: actionTypes.GetProfileAction) {
  try {
    // yield put(actionCreators.getProfileRequest());
    const { data } = yield call(fetchProfile, token);
    console.log(data);
    yield put(actionCreators.getProfileSuccess(data))
  } catch (e: any) {
    console.log(e.response.data);
  }
}

function* onUpdateProfile({ userRequest }: actionTypes.UpdateProfileAction) {
  try {
    const { data } = yield call(updateProfile, userRequest);
    console.log(data);
    yield put(actionCreators.updateProfileSuccess(data))
  } catch(e: any) {
    console.log(e.response.data)
  }
}

function* watchOnLoadProfile() {
  yield takeEvery(actionTypes.GET_PROFILE, onLoadProfile);
  yield takeEvery(actionTypes.UPDATE_PROFILE, onUpdateProfile);
}

export default function* profileSaga() {
  yield all([fork(watchOnLoadProfile)]);
}