import React, { useState } from 'react';
import { MarkdownEditor, MarkdownPreview, WriteHeader } from './components/write';

function App() {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');

  return (
    <React.Fragment>
      <WriteHeader />
      <main className="w-full h-screen flex pt-[60px]">
        <div className="w-full flex flex-col md:w-1/2">
          <div className="pt-8 px-12">
            <input
              className="text-3xl font-bold text-gray-900 border-0 outline-0 placeholder:text-gray-400"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="w-16 h-1 my-6 bg-gray-900" />
            <div className="flex items-center gap-4 mb-4">
              <p className="text-lg font-medium text-gray-900">카테고리</p>
              <select name="category" className="text-lg pr-1 outline-0 text-blue-500 font-medium">
                <option value="notice">공지사항</option>
                <option value="terms">약관</option>
              </select>
            </div>
          </div>
          <MarkdownEditor value={markdown} onChange={(value) => setMarkdown(value)} />
        </div>
        <div className="hidden flex-col md:w-1/2 md:flex">
          <MarkdownPreview title={title} markdown={markdown} background />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
