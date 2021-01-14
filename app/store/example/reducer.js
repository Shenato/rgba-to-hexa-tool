import types from "./types";

export const initialState = {
  state1: null,
  state2: [],
};

export default function reducer(state = initialState, action) {
  let partialState;

  if (action.type === types.setState1) {
    partialState = { state1: action.payload };
  }

  if (action.type === types.setState2) {
    partialState = { state2: action.payload };
  }

  return partialState != null ? { ...state, ...partialState } : state;
}
