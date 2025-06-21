import {all, takeLatest, delay} from 'redux-saga/effects';
import {updateFormData} from './slice';

function* logSubmit(action: ReturnType<typeof updateFormData>) {
  yield delay(300);
  console.log('Saga Submitted:', action.payload);
}

export function* onboardingSaga() {
  yield all([takeLatest(updateFormData.type, logSubmit)]);
}
