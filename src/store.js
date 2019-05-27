import { createStore } from "redux";

const initialState = {
  currentValue: 0
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, currentValue: state.currentValue + action.payload };
    case DECREMENT:
      return Object.assign({}, state, {
        currentValue: state.currentValue - action.payload
      });
    default:
      return state;
  }
}

export default createStore(reducer);
