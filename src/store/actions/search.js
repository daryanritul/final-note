import { search } from '../../firebase/search';
import {
  ADD_RECENT_SEARCH,
  SEARCH_CLEAR,
  SEARCH_ERROR,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
} from '../actions.types';

export const fetchSearchResult = input => dispatch => {
  dispatch({
    type: SEARCH_LOADING,
  });
  let result = [];
  search(input)
    .then(resp => {
      resp.forEach(doc => {
        result.push(doc.data());
      });
      dispatch({
        type: SEARCH_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      dispatch({
        type: SEARCH_ERROR,
        payload: err,
      });
    });
};
