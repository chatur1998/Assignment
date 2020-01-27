import { SEARCH, DETAILS, REFRESH } from '../actions/types';

const INITIAL_STATE = {
  results: [],
  details: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, results: action.payload };
    case DETAILS:
      return { ...state, details: action.payload };
    case REFRESH:
      return { ...state, results: action.payload, refreshing: false };
    default:
        return state;
  }
};
