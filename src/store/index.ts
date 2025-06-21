import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {onboardingReducer} from './onboarding/slice';
import {onboardingSaga} from './onboarding/sega';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  onboarding: persistReducer(
    {key: 'onboarding', storage: AsyncStorage},
    onboardingReducer,
  ),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(
      sagaMiddleware,
    ),
});

sagaMiddleware.run(onboardingSaga);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
