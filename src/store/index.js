import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: false,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "reset") {
    return {
      ...state,
      counter: 0,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.payload,
      //or counter: state.counter + action.amount, //any name consistent name
    };
  }
  if (action.type === "decrease") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  }
  if (action.type === "toggle_counter") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};
const store = createStore(counterReducer);

export default store;

