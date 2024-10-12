import React from 'react';

import sty from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={sty.ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
