import { produce } from "immer";

export const createSlice = (slice) => {
  let name = slice.name;
  let reducers = slice.reducers;
  let actions = {};
  const ReducerArray = Object.keys(reducers);
  ReducerArray.forEach((key) => {
    actions[key] = function actionCreator(payload) {
      return { type: `${name}/${key}`, payload };
    };
  });

  function reducer(orignalState, action) {
    return produce(orignalState, (state) => {
      const key = action.type.split("/")[1];
      const caseReducer = reducers[key];
      if (typeof caseReducer === "function") {
        return caseReducer(state, action);
      }
      return state;
    });
  }

  return { actions, reducer };
};
