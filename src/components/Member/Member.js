import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import sty from './Member.module.css';

const Member = ({ member }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(member);
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
        <button
          onClick={() =>
            navigate('/profile', {
              state: { data: member, prevPath: location.pathname },
            })
          }
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Member;
