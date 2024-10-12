import { fetchNotebooks, saveNotebook } from '../../firebase/notebook';
import {
  GET_NOTEBOOK_ERROR,
  GET_NOTEBOOK_LOADING,
  GET_NOTEBOOK_SUCCESS,
  SAVE_NOTEBOOK_ERROR,
  SAVE_NOTEBOOK_LOADING,
  SAVE_NOTEBOOK_SUCCESS,
  SELECT_NOTEBOOK,
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

export const fetchNotebookHandler = uid => dispatch => {
  dispatch({
    type: GET_NOTEBOOK_LOADING,
  });
  fetchNotebooks(uid)
    .then(async resp => {
      var noteArray = [];
      await resp.forEach(data => {
        noteArray.push(data.data());
      });
      dispatch({
        type: GET_NOTEBOOK_SUCCESS,
        payload: noteArray,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_NOTEBOOK_ERROR,
        payload: err,
      });
    });
};

export const selectNotebook = data => dispatch => {
  dispatch({
    type: SELECT_NOTEBOOK,
    payload: data,
  });
};
