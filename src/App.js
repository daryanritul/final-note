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
import Editor from './Screens/Editor/Editor';
import Loading from './components/Loading/Loading';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './Screens/Profile/Profile';
import Explore from './Screens/Explore/Explore';
import Members from './Screens/Members/Members';
import { getUserProfile } from './firebase/auth';

const App = () => {
  const { authDispatch: dispatch, authState: state } = useContext(context);
  console.log(state);
  let navigate = useNavigate();
  useEffect(() => {
    dispatch({
      type: SIGNIN_LOADING,
    });
    onAuthStateChanged(auth, user => {
      if (user) {
        getUserProfile(user.uid).then(snapshot => {
          dispatch({
            type: SIGNIN_SUCCESS,
            payload: {
              email: user.email,
              uid: user.uid,
              ...snapshot.data(),
            },
          });
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
  if (state.loading) {
    return <Loading />;
  } else
    return (
      <div className="app">
        <div className="header">
          <Topbar />
        </div>
        <div className="mainAppBody">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="editor" element={<Editor />} />
            <Route path="members" element={<Members />} />
            <Route path="profile" element={<Profile />} />
            <Route path="explore" element={<Explore />} />
          </Routes>
        </div>
      </div>
    );
};

export default App;
