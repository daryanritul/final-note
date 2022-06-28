import React from 'react';
import { useState } from 'react';
import Member from '../../components/Member/Member';
import sty from './Members.module.css';

const fakeList = [];

const Members = () => {
  const [listFilter, setListFilter] = useState('member');
  return (
    <div className={sty.members}>
      <div className={sty.search}>
        <div className={sty.searchBox}>
          <h1>Search / Invite Members</h1>
          <p>(Share & Create notes togather)</p>
          <input placeholder="Search Members with Names & Email Address" />
        </div>
        <div className={sty.memberList}>
          {fakeList.map(member => (
            <Member member={member} />
          ))}
        </div>
      </div>
      <div className={sty.list}>
        <h3 className={sty.title}>My Notebook Members</h3>
        <div className={sty.listOption}>
          <div
            className={listFilter == 'member' && sty.active}
            onClick={() => setListFilter('member')}
          >
            My Members
          </div>
          <div
            className={listFilter == 'recived' && sty.active}
            onClick={() => setListFilter('recived')}
          >
            Request Recived
          </div>
          <div
            className={listFilter == 'send' && sty.active}
            onClick={() => setListFilter('send')}
          >
            Request Send
          </div>
        </div>
        <input className={sty.input} placeholder="Search Members here" />
        <div className={sty.memberList}>
          {fakeList.map(member => (
            <Member member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
