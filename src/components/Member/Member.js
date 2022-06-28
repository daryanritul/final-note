import React from 'react';
import sty from './Member.module.css';
const Member = ({ member }) => {
  return (
    <div className={sty.item}>
      <img src={member.profileUrl} />
      <div>
        <h3>{member.name}</h3>
        <span>
          <p>{member.email}</p>
          <p>{member.designation}</p>
        </span>
      </div>
      <div className={sty.button}>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Member;
