import React, { useContext } from 'react';

import sty from './NotebookBrowser.module.css';

import {
  Close,
  StickyNote2,
  Search,
  Add,
  Delete,
  Description,
  SnippetFolder,
} from '@styled-icons/material';
import { context } from '../../store/store';
import { useState } from 'react';
import { v4 } from 'uuid';
import {
  saveNotebookHandler,
  selectNotebook,
} from '../../store/actions/notebook';
import Spinner from '../Spinner/Spinner';
const NotebookBrowser = ({ pageData = [], close }) => {
  const {
    notebookState: nState,
    authState: state,
    notebookDispatch: dispatch,
  } = useContext(context);
  const [notebook, setNotebook] = useState({
    pages: [],
  });
  const [nName, setNName] = useState('');
  const [pName, setPName] = useState(pageData.length ? pageData[0].name : '');

  const selectNotebookHandler = noteBook => {
    setNotebook(noteBook);
    setNName(noteBook.title);
    !pageData.length && setPName('');
  };
  const createNewHandler = () => {
    const data = {
      uid: v4(),
      title: nName,
      lastUpdated: Date.now(),
      pages: pageData,
    };
    const saveNote = {
      ...notebook,
      pages: [
        ...notebook.pages,
        {
          ...pageData[0],
          name: pName,
        },
      ],
    };
    saveNotebookHandler(state.data.uid, data)(dispatch);
  };
  const openNotebook = () => {
    selectNotebook(notebook)(dispatch);
    close(false);
  };
  return (
    <div className={sty.modal}>
      <div className={sty.header}>
        <label>Notebooks</label>
        <div className={sty.icon} onClick={() => close(false)}>
          <Close />
        </div>
      </div>
      <div className={sty.body}>
        {nState.loading ? (
          <div className={sty.spinner}>
            <Spinner />
          </div>
        ) : (
          <>
            <div className={sty.notes}>
              <label>Notebooks ({nState.data.length})</label>
              <div className={sty.list}>
                {nState.data.map(noteBook => (
                  <div
                    className={`${sty.item} ${
                      noteBook?.uid === notebook?.uid && sty.active
                    }`}
                    onClick={() => selectNotebookHandler(noteBook)}
                  >
                    <div className={sty.icon}>
                      <SnippetFolder />
                    </div>
                    <p>{noteBook.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={sty.pages}>
              <label>Pages ({notebook?.pages.length})</label>
              {
                <div className={sty.list}>
                  {notebook?.pages.map(page => (
                    <div
                      className={`${sty.item} ${
                        page?.name === pName && !pageData.length && sty.active
                      } ${pageData.length && sty.noSelect}`}
                      onClick={() => setPName(page.name)}
                    >
                      <div className={sty.icon}>
                        <Description />
                      </div>
                      <p>{page.name}</p>
                    </div>
                  ))}
                </div>
              }
            </div>
          </>
        )}
      </div>
      <div className={sty.footer}>
        <div className={sty.inputs}>
          <div className={sty.input}>
            <label>Page: </label>
            <input
              placeholder="Page Name"
              value={pName}
              onChange={e => setPName(e.target.value)}
            />
          </div>
          <div className={sty.input}>
            <label>Notebook: </label>
            <input
              placeholder="Notebook Name"
              value={nName}
              onChange={e => setNName(e.target.value)}
            />
          </div>
        </div>
        <div className={sty.buttons}>
          {nName === notebook?.title && !pageData.length ? (
            <button onClick={() => openNotebook()}>Open</button>
          ) : (
            <button onClick={() => createNewHandler('ss')}>Save</button>
          )}
          <button
            onClick={() => close(false)}
            className={`${!nName === notebook?.title && sty.disable} ${
              sty.cancel
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotebookBrowser;
