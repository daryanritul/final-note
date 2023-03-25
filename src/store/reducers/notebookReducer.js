import {
  GET_NOTEBOOK_ERROR,
  GET_NOTEBOOK_LOADING,
  GET_NOTEBOOK_SUCCESS,
  SAVE_NOTEBOOK_ERROR,
  SAVE_NOTEBOOK_LOADING,
  SAVE_NOTEBOOK_SUCCESS,
  SELECT_NOTEBOOK,
} from '../actions.types';

const notebook = (state, { payload, type }) => {
  switch (type) {
    case GET_NOTEBOOK_LOADING:
    case SAVE_NOTEBOOK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SAVE_NOTEBOOK_SUCCESS:
      var notebook = state.data.filter(note => note.id === payload.id);
      if (notebook) {
        console.log({ notebook });
      } else console.log('its New');
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
        error: false,
        activeNotebook: payload,
      };
    case GET_NOTEBOOK_ERROR:
    case SAVE_NOTEBOOK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_NOTEBOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      };
    case SELECT_NOTEBOOK:
      return {
        ...state,
        activeNotebook: payload,
      };
  }
};

export default notebook;
