import React, { useContext, useEffect } from 'react';
import sty from './Home.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import { fetchNotebooks } from '../../firebase/notebook';
import { context } from '../../store/store';
import { fetchNotebookHandler } from '../../store/actions/notebook';

const Home = () => {
  const {
    authState: state,
    notebookState: nState,
    notebookDispatch: dispatch,
  } = useContext(context);
  useEffect(() => {
    fetchNotebookHandler(state.data.uid)(dispatch);
  }, []);
  console.log(nState);
  return (
    <div className={sty.home}>
      {nState.loading && <p>Loading...</p>}
      <p>i am Home</p>
    </div>
  );
};

export default Home;
