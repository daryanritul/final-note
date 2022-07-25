import { Article, Delete, Add } from '@styled-icons/material';
import React from 'react';
import sty from './Editor.module.css';

const pageData = ['PageONe', 'Page2', 'asdasda', 'asas'];

const Editor = () => {
  return (
    <div className={sty.editorContainer}>
      <div className={sty.pages}>
        <div className={sty.note}>
          <p>Notebook Name</p>
          <button className={sty.sortButton}>New</button>
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
      <div className={sty.editor}>
        <p>Page Title</p>
      </div>
    </div>
  );
};

export default Editor;
