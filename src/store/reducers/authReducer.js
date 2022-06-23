import {
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from '../actions.types';

const auth = (state, { payload, type }) => {
  switch (type) {
    case SIGNUP_LOADING:
    case SIGNIN_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case SIGNUP_ERROR:
    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
  }
};

export default auth;
