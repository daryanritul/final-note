import React from 'react';

import sty from './Logo.module.css';

import { StickyNote2 } from '@styled-icons/material';

const Logo = () => {
  return (
    <div className={sty.logo}>
      <StickyNote2 className={sty.icon} />
      final<span>note</span>
    </div>
  );
};

export default Logo;
