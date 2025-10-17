import { initialState } from "./reducer";

export const createStore = (reducer) => {
  let state = initialState;
  let store = {
    dispatch(action) {
      state = reducer(state, action);
      return state;
    },
    getState() {
      return state;
    },
  };

  return store;
};
