export interface IState {
  card: {
    id: number;
    title: string;
    content: string;
    img: string;
    price: number;
    count: number;
  };
}

export interface IAddOrder {
  type: actionType.ADD_ORDER;
  payload: IState["card"];
}

export interface IShowOrder {
  type: actionType.SHOW_ORDER;
}
export interface IDelOrder {
  type: actionType.DEL_ORDER;
  payload: number;
}

export interface IUpdateOrder {
  type: actionType.UPDATE_ORDER;
  payload: IState["card"];
}
export interface IIncrement {
  type: actionType.INCREMENT;
  payload: any;
}
export interface IDecrement {
  type: actionType.DECREMENT;
  payload: any;
}

export type IAction =
  | IAddOrder
  | IShowOrder
  | IDelOrder
  | IUpdateOrder
  | IIncrement
  | IDecrement;

export enum actionType {
  RQ_ADD_ORDER = "RQ_ADD_ORDER",
  RQ_DEL_ORDER = "RQ_DEL_ORDER",
  RQ_UPDATE_ORDER = "RQ_UPDATE_ORDER",
  RQ_INCREMENT_ORDER = "RQ_INCREMENT_ORDER",
  RQ_DECREMENT_ORDER = "RQ_DECREMENT_ORDER",
  ADD_ORDER = "ADD_ORDER",
  SHOW_ORDER = "SHOW_ORDER",
  DEL_ORDER = "DEL_ORDER",
  UPDATE_ORDER = "UPDATE_ORDER",
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}
