import React from 'react';
import sty from './Sidebar.module.css';

import {
  StickyNote2,
  Edit,
  Explore,
  People,
  Person,
} from '@styled-icons/material';

import { NavLink } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { context } from '../../store/store';
import { useContext } from 'react';

const Sidebar = () => {
  const { authState: state } = useContext(context);
  const navigate = useNavigate();
  const onselectProfileHandler = () => {
    navigate('/profile', { state: state });
  };
  return (
    <div className={sty.sidebar}>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${sty.active} ${sty.option}` : sty.option
          }
        >
          <StickyNote2 className={sty.icon} />
          <label>Notebooks</label>
        </NavLink>
      </div>
      <NavLink
        to="editor"
        className={({ isActive }) =>
          isActive ? `${sty.active} ${sty.option}` : sty.option
        }
      >
        <Edit className={sty.icon} />
        <label>Editor</label>
      </NavLink>
      <NavLink
        to="explore"
        className={({ isActive }) =>
          isActive ? `${sty.active} ${sty.option}` : sty.option
        }
      >
        <Explore className={sty.icon} />
        <label>Explore</label>
      </NavLink>
      <NavLink
        to="members"
        className={({ isActive }) =>
          isActive ? `${sty.active} ${sty.option}` : sty.option
        }
      >
        <People className={sty.icon} />
        <label>Members</label>
      </NavLink>
      <div
        onClick={() => onselectProfileHandler()}
        className={({ isActive }) =>
          isActive ? `${sty.active} ${sty.option}` : sty.option
        }
      >
        <Person className={sty.icon} />
        <label>My Profile</label>
      </div>
    </div>
  );
};

export default Sidebar;
