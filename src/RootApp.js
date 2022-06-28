import React, { useReducer } from 'react';
import App from './App';
import { context } from './store/store';

import authReducer from './store/reducers/authReducer';
import notebookReducer from './store/reducers/notebookReducer';
import { BrowserRouter } from 'react-router-dom';

const authInitialState = {
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

const notebookInitialState = {
  loading: false,
  error: null,
  data: [],
};

const RootApp = () => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [notebookState, notebookDispatch] = useReducer(
    notebookReducer,
    notebookInitialState
  );
  return (
    <BrowserRouter>
      <context.Provider
        value={{ authState, notebookState, authDispatch, notebookDispatch }}
      >
        <App />
      </context.Provider>
    </BrowserRouter>
  );
};

export default RootApp;
