import {
  SAVE_NOTEBOOK_ERROR,
  SAVE_NOTEBOOK_LOADING,
  SAVE_NOTEBOOK_SUCCESS,
} from '../actions.types';

const notebook = (state, { payload, type }) => {
  switch (type) {
    case SAVE_NOTEBOOK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SAVE_NOTEBOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
        error: false,
        activeNotebook: payload,
      };
    case SAVE_NOTEBOOK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
  }
};

export default notebook;
