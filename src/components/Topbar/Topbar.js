import React, { useContext } from 'react';
import sty from './Topbar.module.css';

import Logo from '../Logo/Logo';

import { Search, ExpandMore } from '@styled-icons/material';

import { NavLink } from 'react-router-dom';
import { context } from '../../store/store';
const Topbar = () => {
  const { authDispatch: dispatch, authState: state } = useContext(context);
  return (
    <div className={sty.bar}>
      <div className={sty.logo}>
        <Logo />
      </div>
      <div className={sty.searchBar}>
        <div className={sty.searchBox}>
          <input placeholder="Search here" className={sty.input} />
          <div className={sty.sIcon}>
            <Search className={sty.icon} />
          </div>
        </div>
      </div>
      <NavLink to={'profile'} className={sty.profile}>
        <div className={sty.proBox}>
          <img
            src={
              state.data.profileUrl
                ? state.data.profileUrl
                : 'https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
            }
            className={sty.img}
          />
          <div className={sty.username}>{state.data.name}</div>
        </div>
        <ExpandMore className={sty.profileIcon} />
      </NavLink>
    </div>
  );
};

export default Topbar;
