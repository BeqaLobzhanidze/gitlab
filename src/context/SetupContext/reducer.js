import {
  ERROR_WHILE_FETCH_DATA,
  FINISH_FETCH_DATA,
  START_FETCH_DATA,
} from "./constants";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCH_DATA:
      return { ...state, loading: true };
    case FINISH_FETCH_DATA:
      return { ...state, data: action.payload, loading: false };
    case ERROR_WHILE_FETCH_DATA:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}

export { reducer, initialState };
