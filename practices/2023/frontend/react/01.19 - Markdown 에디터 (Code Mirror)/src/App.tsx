import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { atomone, atomoneInit } from '@uiw/codemirror-theme-atomone';

function App() {
  const [value, setValue] = useState<string>('');
  const ref = useRef<ReactCodeMirrorRef>(null);

  const onChange = (v: string) => {
    setValue(v);
  };

  const handleClick = () => {
    console.log(ref.current);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, borderRight: '1px solid #eee' }}>
        <input type="text" className="text-red-400" />
        <ReactCodeMirror
          ref={ref}
          value={value}
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
          placeholder="내용을 적어주세요..."
          height="100vh"
          onChange={(v, vm) => {
            console.log(vm);
            setValue(v);
          }}
          theme={atomone}
        />
      </div>
      <div style={{ flex: 1 }}>
        <button onClick={handleClick}>클릭</button>
      </div>
    </div>
  );
}

export default App;
