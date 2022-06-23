import React, { useReducer } from 'react';
import App from './App';
import { context } from './store/store';

import authReducer from './store/reducers/authReducer';
import notebookReducer from './store/reducers/notebookReducer';

const authInitialState = {
  loading: false,
  error: null,
  data: {},
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
    <context.Provider
      value={{ authState, notebookState, authDispatch, notebookDispatch }}
    >
      <App />
    </context.Provider>
  );
};

export default RootApp;
