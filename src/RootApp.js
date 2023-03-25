import React, { useReducer } from 'react';
import App from './App';
import { context } from './store/store';

import authReducer from './store/reducers/authReducer';
import searchReducer from './store/reducers/searchReducer';
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
const searchInitialState = {
  loading: false,   
  error: null,
  searchResult: [],
  recentSearch: [],
};

const notebookInitialState = {
  loading: false,
  error: null,
  data: [],
  activeNotebook: {
    uid: 'none',
    title: 'Untitled Notebook',
    pages: [],
  },
};

const RootApp = () => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [notebookState, notebookDispatch] = useReducer(
    notebookReducer,
    notebookInitialState
  );
  const [searchState, searchDispatch] = useReducer(
    searchReducer,
    searchInitialState
  );
  return (
    <BrowserRouter>
      <context.Provider
        value={{
          authState,
          notebookState,
          searchState,
          authDispatch,
          searchDispatch,
          notebookDispatch,
        }}
      >
        <App />
      </context.Provider>
    </BrowserRouter>
  );
};

export default RootApp;
