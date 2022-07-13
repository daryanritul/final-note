import React, { useContext } from 'react';
import { useState } from 'react';
import Member from '../../components/Member/Member';
import Spinner from '../../components/Spinner/Spinner';
import { fetchSearchResult } from '../../store/actions/search';
import { context } from '../../store/store';
import sty from './Members.module.css';

const fakeList = [];

const Members = () => {
  const [listFilter, setListFilter] = useState('member');
  const [search, setSearch] = useState('');
  const { searchState: state, searchDispatch: dispatch } = useContext(context);
  console.log(state);
  return (
    <div className={sty.members}>
      <div className={sty.search}>
        <div className={sty.searchBox}>
          <h1>Search / Invite Members</h1>
          <p>(Share & Create notes togather)</p>
          <input
            placeholder="Search Members with Names & Email Address"
            value={search}
            onChange={event => setSearch(event.target.value)}
            onKeyDown={event => {
              if (event.key == 'Enter' && search != '') {
                fetchSearchResult(search)(dispatch);
              }
            }}
          />
        </div>
        {state.loading ? (
          <Spinner />
        ) : (
          <div className={sty.memberList}>
            {state.searchResult.map(member => (
              <Member member={member} />
            ))}
          </div>
        )}
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
