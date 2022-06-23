import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase/firebaseconfig';

import {
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
} from './store/actions.types';
import { context } from './store/store';

import { Route, Routes, useNavigate } from 'react-router-dom';

import Auth from './Screens/Auth/Auth';
import Home from './Screens/Home/Home';

const App = () => {
  const { authDispatch: dispatch } = useContext(context);
  let navigate = useNavigate();
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
        navigate('', { replace: true });
      } else {
        dispatch({
          type: SIGNIN_ERROR,
          payload: false,
        });
        navigate('/auth', { replace: true });
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
