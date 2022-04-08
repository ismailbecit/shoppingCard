import { combineReducers } from "redux";
import { orderReducer } from "./futures/order/orderReducer";

const reducers = combineReducers({
  order: orderReducer,
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;
