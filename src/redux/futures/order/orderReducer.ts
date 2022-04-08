import { actionType, IAction, IState } from "./orderType";

const initialState: IState["card"][] = [];

export const orderReducer = (
  state: IState["card"][] = initialState,
  action: IAction
): IState["card"][] => {
  switch (action.type) {
    case actionType.SHOW_ORDER:
      return state;
    case actionType.ADD_ORDER:
      const addIndex = state.findIndex((el) => el.id === action.payload.id);
      if (addIndex !== -1) {
        state[addIndex].price =
          state[addIndex].price + action.payload.price / state[addIndex].count;
        state[addIndex].count = state[addIndex].count + 1;
        state = [...state];
        return state;
      } else {
        return (state = [
          ...state,
          {
            content: action.payload.content,
            count: action.payload.count,
            id: action.payload.id,
            img: action.payload.img,
            price: action.payload.price,
            title: action.payload.title,
          },
        ]);
      }

    case actionType.DEL_ORDER:
      const filtered = state.filter((el) => el.id !== action.payload);
      return filtered;
    case actionType.INCREMENT:
      const incrementIndex = state.findIndex(
        (el) => el.id === action.payload.id
      );
      state[incrementIndex].price =
        state[incrementIndex].price +
        action.payload.price / state[incrementIndex].count;
      state[incrementIndex].count = state[incrementIndex].count + 1;
      state = [...state];
      return state;
    case actionType.DECREMENT:
      const decrementIndex = state.findIndex(
        (el) => el.id === action.payload.id
      );
      if (state[decrementIndex].count > 1) {
        state[decrementIndex].price =
          state[decrementIndex].price -
          action.payload.price / state[decrementIndex].count;
        state[decrementIndex].count = state[decrementIndex].count - 1;
      } else {
        state.splice(decrementIndex, 1);
      }
      state = [...state];
      return state;
    // case actionType.DEL_ORDER:
    //   const delIndex = state.findIndex((el) => el.id === action.payload);
    //   state.splice(delIndex, 1);
    //   return state;
    // case actionType.UPDATE_ORDER:
    //   const updateIndex = state.findIndex((el) => el.id === action.payload.id);
    //   state[updateIndex] = {
    //     id: action.payload.id,
    //     content: action.payload.content,
    //     count: action.payload.count,
    //     img: action.payload.img,
    //     price: action.payload.price,
    //     title: action.payload.title,
    //   };
    //   return state;
    default:
      return state;
  }
};
