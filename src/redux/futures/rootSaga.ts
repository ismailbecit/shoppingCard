import { all } from "redux-saga/effects";
import { rootOrderSaga } from "./order/orderSaga";

export function* rootSaga() {
  yield all([rootOrderSaga()]);
}
