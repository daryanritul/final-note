import React from 'react';
import sty from './Home.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';

const Home = () => {
  return (
    <div className={sty.home}>
      <p>i am Home</p>
    </div>
  );
};

export default Home;
