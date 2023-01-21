import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import MarkdownEditor, { MarkdownEditorRef } from './MarkdownEditor';
import MarkdownRenderer from './MarkdownRenderer';
import Toolbar, { ToolbarMode } from './components/write/Toolbar';
import { EditorSelection } from '@codemirror/state';

function App() {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');
  const editor = useRef<MarkdownEditorRef>(null);

  const onChange = (value: string) => {
    setMarkdown(value);
  };

  const handleClickToolbar = (mode: ToolbarMode) => {
    switch (mode) {
      case 'bold':
        editor.current?.bold();
    }
    // 현재 커서 구하기
    // console.log(editor.current?.view?.state.selection.ranges[0]);

    // 현재 선택 중인 영역
    // const range = editor.current?.view?.state.selection.ranges[0];
    // if (!range) return;
    // const { from, to } = range;
    // editor.current?.view?.dispatch({ changes: {  from: 0, insert: '**' } });

    // editor.current.view?.dispatch(editor.current.view.state.update({ selection: { anchor: 1, head: 2 } }));

    // ..changeByRange((range) => ({
    //   changes: [
    //     { from: range.from, insert: '**' },
    //     { from: range.to, insert: '**' },
    //   ],
    //   range: EditorSelection.range(range.from + 2, range.to + 2),
    // }));
    // editor.current?.view?.state.doc
    // console.log(mode);
    // console.log(editor.current);
  };

  return (
    <React.Fragment>
      <div className="fixed h-[60px] top-0 left-0 w-full bg-white flex justify-between items-center px-12 shadow-md">
        <p className="text-gray-700 font-medium">◀︎ 나가기</p>
        <button className="py-2 px-3 rounded-[4px] bg-blue-500 text-white font-medium">등록하기</button>
      </div>
      <div className="flex w-full h-screen pt-[60px]">
        <div className="w-full flex flex-col md:w-1/2">
          <div className="flex flex-col pt-8 px-12 grow-0">
            <input
              className="text-gray-900 text-4xl font-bold border-0 outline-0 placeholder:text-gray-400"
              placeholder="제목을 입력하세요"
            />
            <div className="w-16 h-[6px] mt-6 mb-4 bg-[rgb(73,80,87)]" />
            <div className="flex items-center gap-4 mb-3">
              <p className="">카테고리</p>
              <select name="category" className="pr-1 outline-0">
                <option value="notice">공지사항</option>
                <option value="terms">약관</option>
              </select>
            </div>
            {/* <Toolbar onClick={handleClickToolbar} /> */}
          </div>
          <MarkdownEditor ref={editor} value={markdown} onChange={onChange} />
        </div>
        <div className="flex-col w-[50%] hidden md:flex">
          <MarkdownRenderer markdown={markdown} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
