import { saveNotebook } from '../../firebase/notebook';
import {
  SAVE_NOTEBOOK_ERROR,
  SAVE_NOTEBOOK_LOADING,
  SAVE_NOTEBOOK_SUCCESS,
} from '../actions.types';

export const saveNotebookHandler = (uid, data) => dispatch => {
  dispatch({
    type: SAVE_NOTEBOOK_LOADING,
  });
  saveNotebook(uid, data)
    .then(resp => {
      dispatch({
        type: SAVE_NOTEBOOK_SUCCESS,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: SAVE_NOTEBOOK_ERROR,
        payload: err,
      });
    });
};
