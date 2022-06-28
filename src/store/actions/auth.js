import {
  authenticationSignIn,
  authenticationSignOut,
  authenticationSignUp,
  updateUserData,
} from '../../firebase/auth';
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

export const authSignUp = (email, password) => dispatch => {
  dispatch({
    type: SIGNUP_LOADING,
  });

  authenticationSignUp(email, password)
    .then(response => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: {
          email: response.user.email,
          uid: response.user.uid,
        },
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
        payload: {
          email: response.user.email,
          uid: response.user.uid,
        },
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
  dispatch({
    type: SIGN_OUT_LOADING,
  });
  authenticationSignOut().then(() => {
    dispatch({
      type: SIGN_OUT,
    });
  });
};

export const updateUserProfile = data => dispatch => {
  dispatch({
    type: UPDATE_PROFILE_LOADING,
  });
  updateUserData(data)
    .then(res => {
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_PROFILE_ERROR,
        payload: err,
      });
    });
};
