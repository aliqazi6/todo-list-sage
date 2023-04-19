import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_TODO_LIST,
  DELETE_TODI_LIST,
  UPDATE_TODO_LIST,
} from "../sagas/action";
import { addTask, deleteTask } from "../todoApplication/todoSlice";

function* addTaskTodo({ payload }) {
  yield put(addTask(payload));
}

function* deleteTaskTodo({ payload }) {
  yield put(deleteTask(payload));
}

function* updateTaskTodo({ payload }) {
  yield put(deleteTask(payload));
}

function* watchAddTask() {
  yield takeEvery(ADD_TODO_LIST, addTaskTodo);
}

function* watchDeleteTask() {
  yield takeEvery(DELETE_TODI_LIST, deleteTaskTodo); 
}
function* watchUpdateTask() {
  yield takeEvery(UPDATE_TODO_LIST, updateTaskTodo);
}

export default [watchAddTask(), watchDeleteTask(), watchUpdateTask()];
