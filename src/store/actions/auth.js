import {
  authenticationSignIn,
  authenticationSignOut,
  authenticationSignUp,
} from '../../firebase/auth';
import {
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGN_OUT,
} from '../actions.types';

export const authSignUp = (email, password) => dispatch => {
  dispatch({
    type: SIGNUP_LOADING,
  });

  authenticationSignUp(email, password)
    .then(response => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.user,
      });
    })
    .catch(error => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error,
      });
    });
};

export const authSignIn = (email, password) => dispatch => {
  dispatch({
    type: SIGNIN_LOADING,
  });
  authenticationSignIn(email, password)
    .then(response => {
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: response.user,
      });
    })
    .catch(error => {
      dispatch({
        type: SIGNIN_ERROR,
        payload: error,
      });
    });
};

export const authSignOut = () => dispatch => {
  authenticationSignOut().then(() => {
    dispatch({
      type: SIGN_OUT,
    });
  });
};
