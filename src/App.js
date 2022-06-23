import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { onAuthStateChange } from './firebase/auth';
import { auth } from './firebase/firebaseconfig';

import Auth from './Screens/Auth/Auth';
import {
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
} from './store/actions.types';
import { context } from './store/store';

const App = () => {
  const { authDispatch: dispatch } = useContext(context);
  useEffect(() => {
    dispatch({
      type: SIGNIN_LOADING,
    });
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: user,
        });
      } else {
        dispatch({
          type: SIGNIN_ERROR,
          payload: false,
        });
      }
    });
  }, []);
  return (
    <div>
      <Auth />
    </div>
  );
};

export default App;
