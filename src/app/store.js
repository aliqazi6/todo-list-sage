import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from "../features/todoApplication/todoSlice"
import rootSaga from "../features/sagas/index"
let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todo:todoReducer 
  },
  middleware:[sagaMiddleware],
});
sagaMiddleware.run(rootSaga)
 