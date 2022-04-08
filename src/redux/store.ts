import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./futures/rootSaga";
import reducers from "./reducers";

const saga = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(saga));
saga.run(rootSaga);
