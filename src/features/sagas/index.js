import { all } from "redux-saga/effects";
import saga  from './saga'
function* rootSaga() {
  yield all([...saga]);
}
export default rootSaga;