import {
  SEARCH_CLEAR,
  SEARCH_ERROR,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  ADD_RECENT_SEARCH,
} from '../actions.types';

const search = (state, { payload, type }) => {
  switch (type) {
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResult: payload,
      };
    case ADD_RECENT_SEARCH:
      return {
        ...state,
        recentSearch: [...state.recentSearch, payload],
      };
    case SEARCH_CLEAR:
      return {
        loading: false,
        error: null,
        searchResult: [],
        recentSearch: [],
      };
    case SEARCH_ERROR:
      return {
        loading: false,
        error: payload,
      };
  }
};
export default search;
