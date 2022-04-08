import { all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { actionType, IAction, IState } from "./orderType";

function* addOrderHandler(data: any) {
  yield put({ type: actionType.ADD_ORDER, payload: data.payload });
}

function* dellOrderHandler(data: any) {
  yield put({ type: actionType.DEL_ORDER, payload: data.payload });
}

function* incrementHandler(data: any) {
  yield put({ type: actionType.INCREMENT, payload: data.payload });
}

function* decrementHandler(data: any) {
  yield put({
    type: actionType.DECREMENT,
    payload: data.payload,
  });
}

export function* rootOrderSaga() {
  yield all([
    takeEvery(actionType.RQ_ADD_ORDER, addOrderHandler),
    takeEvery(actionType.RQ_DEL_ORDER, dellOrderHandler),
    takeLatest(actionType.RQ_INCREMENT_ORDER, incrementHandler),
    takeLatest(actionType.RQ_DECREMENT_ORDER, decrementHandler),
  ]);
}
