import React, { useState } from 'react';
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
} from '@styled-icons/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './Quill.css';
import BrowseModal from '../../components/BrowseModal/BrowseModal';
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
  const [selectedNotebook, SelectedNotebook] = useState({});
  const [data, setData] = useState('');
  const [fullScreen, setFullScreen] = useState(false);
  const [explorer, setExplorer] = useState(false);
  const [menuOption, setMenuOption] = useState(false);
  const [pageName, setPageName] = useState('Untitled-01');
  const [nameStatus, setNameStatus] = useState(false);

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

  const onSaveHandler = () => {};
  return (
    <div className={sty.editorContainer}>
      {menuOption && <BrowseModal type={menuOption} close={setMenuOption} />}
      {
        <div
          className={`${sty.pages} ${
            fullScreen ? sty.sortPage : sty.fullPage
          } ${explorer ? sty.showPage : sty.hidePage}`}
        >
          <div className={sty.note}>
            <p>Notebook Name</p>
            <div
              className={`${sty.headButton} ${sty.closeBtn}`}
              onClick={() => setExplorer(true)}
            >
              <Minimize className={sty.icon} />
            </div>
          </div>
          <div className={sty.pagesHead}>
            <div>Pages (10)</div>
            <button className={sty.sortButton}>New</button>
          </div>
          {pageData.map((item, index) => (
            <div key={index} className={sty.pageName}>
              <Article className={sty.pageIcon} />
              <p>{item}</p>
              <Delete className={sty.delete} />
            </div>
          ))}
        </div>
      }
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
                <div className={sty.dropItem}>Save</div>
                <div
                  className={sty.dropItem}
                  onClick={() => setMenuOption('Save To')}
                >
                  Save To
                </div>
              </div>
            </div>
          </div>
          {nameStatus ? (
            <div
              className={sty.pageName}
              onClick={() => setNameStatus(!nameStatus)}
            >
              {pageName}
            </div>
          ) : (
            <input
              className={sty.pageName}
              value={pageName}
              onChange={e => setPageName(e.target.value)}
              onBlur={() => setNameStatus(false)}
            />
          )}
          <div className={sty.headBtnBox}>
            <div className={sty.headButton}>
              <Publish className={sty.icon} />
            </div>
            <div className={sty.headButton}>
              <Save className={sty.icon} />
            </div>
            <div className={sty.headButton}>
              <DeleteOutline className={sty.icon} />
            </div>
            <div className={sty.headButton} onClick={() => fullScreenHandler()}>
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
    </div>
  );
};

export default Editor;
