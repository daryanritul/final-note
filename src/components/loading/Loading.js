import React from 'react';

import sty from './Loading.module.css';
import { StickyNote2 } from '@styled-icons/material';

const Loading = () => {
  return (
    <div className={sty.loading}>
      <h2 className={sty.loading__title}>
        Loading<span>... </span>
      </h2>
      <div className={sty.loading__line} />
    </div>
  );
};

export default Loading;
