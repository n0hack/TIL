import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todosReducer from './todos';
import sampleReducer from './sample';
import { createLogger } from 'redux-logger';
import { all } from 'redux-saga/effects';
import { counterSaga } from './counterSaga';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();

function* rootSaga() {
  yield all([counterSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    sample: sampleReducer,
  },
  devTools: true,
  middleware: [logger, sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
