import React, { useState } from 'react';

import sty from './BrowseModal.module.css';

import {
  Close,
  StickyNote2,
  Search,
  Add,
  Delete,
} from '@styled-icons/material';
const BrowseModal = ({ type, close }) => {
  const fakeNames = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState(false);

  const onSelecthandler = index => {
    setSelected(`${type} ${index + 1}`);
    setInput(`${type} ${index + 1}`);
  };

  return (
    <div className={sty.modal}>
      <div className={sty.modalHeader}>
        <div>{type}</div>
        <div className={sty.iconBox} onClick={() => close(false)}>
          <Close className={sty.icon} />
        </div>
      </div>
      <div className={sty.list}>
        {fakeNames.map((note, index) => (
          <div className={sty.item} onClick={() => onSelecthandler(index)}>
            <div>
              <StickyNote2 className={sty.icon} />
              {type} {index + 1}
            </div>
            {type !== 'Pages' && <div className={sty.subtitle}>Pages 10</div>}
            <div className={sty.iconBox} onClick={() => close(false)}>
              <Delete className={sty.icon} />
            </div>
          </div>
        ))}
      </div>
      <div className={sty.footer}>
        <div className={sty.inputBox}>
          <input
            placeholder={`Search or Create New`}
            className={sty.input}
            value={input}
            onChange={event => setInput(event.target.value)}
            onFocus={() => setSelected(false)}
          />
          <Close
            className={sty.clearInput}
            onClick={() => (setInput(''), setSelected(false))}
          />
        </div>
        <div className={sty.btn}>
          <div>Search</div>
        </div>
        <div className={sty.btn}>
          {selected ? (
            type === 'Save To' ? (
              <div>Save</div>
            ) : (
              <div>Open</div>
            )
          ) : (
            <div>Create New</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseModal;
