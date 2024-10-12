import {
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_LOADING,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
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
        data: {
          ...state.data,
          ...payload,
        },
      };
    case SIGNUP_ERROR:
    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SIGN_OUT_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SIGN_OUT:
      return {
        loading: false,
        error: null,
        data: {
          name: null,
          email: null,
          profileUrl: null,
          bio: null,
          designation: null,
          gender: null,
          dob: null,
        },
      };
    case UPDATE_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...payload,
        },
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
  }
};

export default auth;
