import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import MarkdownEditor from './MarkdownEditor';
import MarkdownRenderer from './MarkdownRenderer';
import MarkdownPreview from '@uiw/react-markdown-preview';

function App() {
  const [markdown, setMarkdown] = useState<string>('');
  const editor = useRef<ReactCodeMirrorRef>(null);

  const onChange = (value: string) => {
    setMarkdown(value);
  };

  useEffect(() => {}, []);

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
          </div>
          {/* 툴바 */}
          <div className="flex flex-wrap items-center mb-4 px-12">
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <div className="w-[1px] h-5 mx-2 bg-gray-200" />
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <div className="w-[1px] h-5 mx-2 bg-gray-200" />
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
            <button className="w-12 h-12 shrink-0 bg-gray-50 text-sm">툴바</button>
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
