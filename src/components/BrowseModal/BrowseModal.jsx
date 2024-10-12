import React, { useContext, useState } from 'react';

import sty from './BrowseModal.module.css';

import {
  Close,
  StickyNote2,
  Search,
  Add,
  Delete,
} from '@styled-icons/material';
import { v4 } from 'uuid';
import { context } from '../../store/store';
import {
  saveNotebookHandler,
  selectNotebook,
} from '../../store/actions/notebook';
const BrowseModal = ({ type, close, pageData }) => {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState(false);
  const [desc, setDesc] = useState('');
  const {
    authState: state,
    notebookState: nState,
    notebookDispatch: dispatch,
  } = useContext(context);
  console.log(' =>', nState);
  const onSelecthandler = notebook => {
    setSelected(notebook);
    setInput(notebook.title);
  };
  const openNotebook = () => {
    selectNotebook(selected)(dispatch);
    close(false);
  };
  const createNewHandler = uid => {
    const data = {
      uid: v4(),
      title: input,
      lastUpdated: Date.now(),
      pages: [
        {
          uid: v4(),
          ...pageData,
        },
      ],
    };
    saveNotebookHandler(uid, data)(dispatch);
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
        {nState.loading && <div>Loading...</div>}
        {type !== 'Save' ? (
          nState.data.map((note, index) => (
            <div className={sty.item} onClick={() => onSelecthandler(note)}>
              <div>
                <StickyNote2 className={sty.icon} />
                {note.title}
              </div>
              {type !== 'Pages' && (
                <div className={sty.subtitle}>{note.pages.length}</div>
              )}
              <div className={sty.iconBox} onClick={() => close(false)}>
                <Delete className={sty.icon} />
              </div>
            </div>
          ))
        ) : (
          <div className={sty.desc}>
            <label>Notebook Description</label>
            <textarea
              placeholder="Notebook Description Here"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className={sty.footer}>
        <div className={sty.inputBox}>
          <input
            placeholder={`Notebook Name `}
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
        {type !== 'Save' && (
          <div className={sty.btn}>
            <div>Search</div>
          </div>
        )}
        <div className={sty.btn}>
          {selected ? (
            type === 'Save To' ? (
              <div>Save</div>
            ) : (
              <div onClick={() => openNotebook()}>Open</div>
            )
          ) : (
            <div onClick={() => createNewHandler(state.data.uid)}>
              Create New {type === 'Save' && '& Save'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseModal;
