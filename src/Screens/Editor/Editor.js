import React, { useContext, useState } from 'react';
import sty from './Editor.module.css';

import {
  Article,
  Delete,
  Add,
  Close,
  FullscreenExit,
  Fullscreen,
  Save,
  DeleteOutline,
  Minimize,
  Publish,
  Autorenew,
} from '@styled-icons/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './Quill.css';
import BrowseModal from '../../components/BrowseModal/BrowseModal';
import { context } from '../../store/store';
import { saveNotebookHandler } from '../../store/actions/notebook';
import { v4 } from 'uuid';
const pageData = ['PageONe', 'Page2', 'asdasda', 'asas'];

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    // [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    // [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
    ['link', 'image', 'video'],
    // ['spanblock'],
  ],
};
const Editor = () => {
  const { notebookState: state, notebookDispatch: dispatch } =
    useContext(context);
  const [data, setData] = useState('');
  const [fullScreen, setFullScreen] = useState(false);
  const [explorer, setExplorer] = useState(false);
  const [menuOption, setMenuOption] = useState(false);
  const [pageName, setPageName] = useState(
    `Untitled-${state.activeNotebook.pages.length + 1}`
  );
  const [activePage, setActivePage] = useState(v4());
  console.log(state.activeNotebook);

  const fullScreenHandler = () => {
    setFullScreen(!fullScreen);
    var doc = window.document;
    var docEl = doc.documentElement;
    var requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    var cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
    } else {
      cancelFullScreen.call(doc);
    }
  };

  const onSaveHandler = () => {
    if (state.activeNotebook.uid === 'none') {
      setMenuOption('Save');
    } else {
      var noteData = {};
      if (typeof activePage === 'string') {
        noteData = {
          ...state.activeNotebook,
          pages: [
            ...state.activeNotebook.pages,
            {
              uid: v4(),
              name: pageName,
              data: data,
            },
          ],
        };
      } else {
        noteData = state.activeNotebook;
        noteData.pages[activePage].data = data;
      }
      saveNotebookHandler(state.activeNotebook.uid, noteData)(dispatch);
    }
  };
  const onNewHandler = () => {
    setData('');
    setPageName(`Untitled-${state.activeNotebook.pages.length + 1}`);
    setActivePage(v4());
  };

  const onDeleteHandler = id => {
    onNewHandler();
    var noteData = {
      ...state.activeNotebook,
      pages: state.activeNotebook.pages.filter(page => page.uid !== id),
    };
    saveNotebookHandler(state.activeNotebook.uid, noteData)(dispatch);
  };
  return (
    <div className={sty.editorContainer}>
      {menuOption && (
        <BrowseModal
          type={menuOption}
          close={setMenuOption}
          pageData={
            menuOption === 'Save' && {
              name: pageName,
              data: data,
            }
          }
        />
      )}
      {
        <div
          className={`${sty.pages} ${
            fullScreen ? sty.sortPage : sty.fullPage
          } ${explorer ? sty.showPage : sty.hidePage}`}
        >
          <div className={sty.note}>
            <p>{state.activeNotebook.title}</p>
            <div
              className={`${sty.headButton} ${sty.closeBtn}`}
              onClick={() => setExplorer(true)}
            >
              <Close className={sty.icon} />
            </div>
          </div>
          <div className={sty.pagesHead}>
            <div>Pages ({state.activeNotebook.pages.length})</div>
            <div
              className={`${sty.headButton} ${sty.addBtn}`}
              onClick={() => onNewHandler()}
            >
              <Add className={sty.icon} />
            </div>
          </div>
          {state.activeNotebook.pages.map((item, index) => (
            <div
              key={index}
              className={sty.pageName}
              onClick={() => (
                setData(item.data), setPageName(item.name), setActivePage(index)
              )}
            >
              <Article className={sty.pageIcon} />
              <p>{item.name}</p>
              <Delete
                className={sty.delete}
                onClick={() => onDeleteHandler(item.uid)}
              />
            </div>
          ))}
        </div>
      }
      {state.activeNotebook ? (
        <div className={`${sty.editor} ${fullScreen && sty.fullScreen}`}>
          <div className={sty.editorHead}>
            <div className={sty.headBox}>
              <div onClick={() => setMenuOption('Notebooks')}>Notebooks</div>
              <div onClick={() => setMenuOption('Pages')}>Pages</div>
              <div
                className={`${!explorer && sty.activeHead}`}
                onClick={() => setExplorer(!explorer)}
              >
                Explorer
              </div>
              <div>Preview</div>
              <div className={sty.save}>
                Save
                <div className={sty.dropDown}>
                  <div className={sty.dropItem} onClick={() => onSaveHandler()}>
                    Save
                  </div>
                  <div
                    className={sty.dropItem}
                    onClick={() => setMenuOption('Save To')}
                  >
                    Save To
                  </div>
                </div>
              </div>
            </div>

            <input
              className={sty.pageTitle}
              value={pageName}
              onChange={e => setPageName(e.target.value)}
            />

            <div className={sty.headBtnBox}>
              <div className={sty.headButton}>
                <Publish className={sty.icon} />
              </div>
              <div className={sty.headButton} onClick={() => onSaveHandler()}>
                {state.loading ? (
                  <Autorenew className={sty.icon} />
                ) : (
                  <Save className={sty.icon} />
                )}
              </div>
              <div className={sty.headButton}>
                <DeleteOutline className={sty.icon} />
              </div>
              <div
                className={sty.headButton}
                onClick={() => fullScreenHandler()}
              >
                {fullScreen ? (
                  <Fullscreen className={sty.icon} />
                ) : (
                  <FullscreenExit className={sty.icon} />
                )}
              </div>
              <div className={sty.headButton}>
                <Close className={sty.icon} />
              </div>
            </div>
          </div>
          <div className={`${sty.myQuill} `}>
            <ReactQuill
              theme="snow"
              value={data}
              onChange={setData}
              modules={modules}
              className={sty.myEditor}
            />
          </div>
        </div>
      ) : (
        <div className={sty.welcome}>
          <h1>Welcome to Final Note Editor!</h1>
          <div className={sty.welcomeBtn}>
            <div>Open Notebook</div>
            <div>Create New Notebook</div>
            <div>Jump To Editor</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editor;
