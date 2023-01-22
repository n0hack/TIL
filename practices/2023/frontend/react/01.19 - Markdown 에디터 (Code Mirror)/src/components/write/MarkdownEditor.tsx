import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactCodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { EditorState, StateField } from '@codemirror/state';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import createTheme from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import styled from 'styled-components';
import Toolbar from './Toolbar';
import AddLink from './AddLink';

export type Mode =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'bold'
  | 'italic'
  | 'strike'
  | 'quote'
  | 'link'
  | 'photo'
  | 'code';

interface MarkdownEditorProps {
  value: string;
  onChange?: (value: string) => void;
}

const customTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#FFFFFF',
    selection: '#D6D6D6',
    fontFamily: 'Fira Mono',
  },
  styles: [
    // 코드 블럭
    { tag: t.labelName, color: '#212529' }, // 언어
    { tag: t.macroName, color: 'red', fontSize: '1.5em' },
    { tag: t.keyword, color: '#0184bc' },
    { tag: t.monospace, color: '#9d9d9f' },
    { tag: t.variableName, color: '#212529' },
    { tag: t.className, color: '#cf9d41' },
    { tag: t.propertyName, color: '#986801' },
    { tag: t.name, color: '#e45649' },
    { tag: t.bool, color: '#0184bc' },
    { tag: t.number, color: '#986801' },
    { tag: t.string, color: '#50a14f' },
    { tag: t.regexp, color: '#50a14f' },
    { tag: t.logicOperator, color: '#56b6c2' },
    { tag: t.compareOperator, color: '#56b6c2' },
    { tag: t.bitwiseOperator, color: '#56b6c2' },
    { tag: t.comment, color: '#9d9d9d', fontStyle: 'italic' },
    { tag: t.lineComment, color: '#9d9d9d', fontStyle: 'italic' },
    { tag: t.documentMeta, color: '#808080' },
    { tag: t.color, color: '#212529' },

    // 컨텐츠 (Content)
    { tag: t.content, color: '#212529' },
    { tag: t.character, color: '#212529' }, // 특수문자
    { tag: t.contentSeparator, color: '#212529' }, // 수평 구분선
    // 제목 (Headline)
    { tag: t.heading1, color: '#212529', fontSize: '2rem', fontWeight: 'bold' },
    { tag: t.heading2, color: '#212529', fontSize: '1.75rem', fontWeight: 'bold' },
    { tag: t.heading3, color: '#212529', fontSize: '1.5rem', fontWeight: 'bold' },
    { tag: t.heading4, color: '#212529', fontSize: '1.25rem', fontWeight: 'bold' },
    // 폰트 스타일 (Font Style)
    { tag: t.strong, color: '#212529', fontWeight: 'bold' },
    { tag: t.emphasis, color: '#212529', fontWeight: 'normal', fontStyle: 'italic' },
    { tag: t.strikethrough, color: '#9d9d9d', fontWeight: 'normal' },
    // 링크 (Link)
    // { tag: t.url, color: '#3182f6' },
    { tag: t.link, color: '#3182f6' },
    // 인용 (Quote)
    { tag: t.quote, color: '#9d9d9d', fontStyle: 'italic' },
    // 테이블 (Table)
    { tag: t.heading, color: '#212529', fontStyle: 'normal' },
  ],
});

const MarkdownEditor = ({ value, onChange }: MarkdownEditorProps) => {
  const [link, setLink] = useState({ visible: false, bottom: 0, left: 0 });
  const editor = useRef<ReactCodeMirrorRef>(null);
  // const [position, setPosition] = useState({top: editor.current?.editor., left: 0})

  const handleCloseLink = () => {
    setLink({ visible: false, bottom: 0, left: 0 });
  };

  const handleAddLink = (url: string) => {};

  const handleClickToolbar = (mode: Mode) => {
    if (!editor.current || !editor.current.view) return;

    // 에디터 인스턴스
    const { view } = editor.current;
    // 커서가 가리키고 있는 행의 정보
    const line = view.state.doc.lineAt(view.state.selection.main.head);
    const text = line.text;
    // 선택한 영역에 대한 포지션 정보
    const { from, to } = view.state.selection.ranges[0];

    switch (mode) {
      case 'heading1':
        if (/^# /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^# /, '') },
            selection: { anchor: line.from, head: line.from + text.length - 2 },
          });
        } else if (/^#+ /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^#+ /, '# ') },
            selection: { anchor: line.from + 2, head: line.from + text.replace(/^#+ /, '').length + 2 },
          });
        } else {
          if (text === '') {
            view.dispatch({
              changes: { from: line.from, insert: '# 제목' },
              selection: { anchor: line.from + 2, head: line.from + 4 },
            });
          } else {
            view.dispatch({
              changes: { from: line.from, insert: '# ' },
              selection: { anchor: line.from + 2, head: line.from + 2 + text.length },
            });
          }
        }
        break;
      case 'heading2':
        if (/^## /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^## /, '') },
            selection: { anchor: line.from, head: line.from + text.length - 3 },
          });
        } else if (/^#+ /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^#+ /, '## ') },
            selection: { anchor: line.from + 3, head: line.from + text.replace(/^#+ /, '').length + 3 },
          });
        } else {
          if (text === '') {
            view.dispatch({
              changes: { from: line.from, insert: '## 제목' },
              selection: { anchor: line.from + 3, head: line.from + 5 },
            });
          } else {
            view.dispatch({
              changes: { from: line.from, insert: '## ' },
              selection: { anchor: line.from + 3, head: line.from + 3 + text.length },
            });
          }
        }
        break;
      case 'heading3':
        if (/^### /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^### /, '') },
            selection: { anchor: line.from, head: line.from + text.length - 4 },
          });
        } else if (/^#+ /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^#+ /, '### ') },
            selection: { anchor: line.from + 4, head: line.from + text.replace(/^#+ /, '').length + 4 },
          });
        } else {
          if (text === '') {
            view.dispatch({
              changes: { from: line.from, insert: '### 제목' },
              selection: { anchor: line.from + 4, head: line.from + 6 },
            });
          } else {
            view.dispatch({
              changes: { from: line.from, insert: '### ' },
              selection: { anchor: line.from + 4, head: line.from + 4 + text.length },
            });
          }
        }
        break;
      case 'heading4':
        if (/^#### /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^#### /, '') },
            selection: { anchor: line.from, head: line.from + text.length - 5 },
          });
        } else if (/^#+ /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^#+ /, '#### ') },
            selection: { anchor: line.from + 5, head: line.from + text.replace(/^#+ /, '').length + 5 },
          });
        } else {
          if (text === '') {
            view.dispatch({
              changes: { from: line.from, insert: '#### 제목' },
              selection: { anchor: line.from + 5, head: line.from + 7 },
            });
          } else {
            view.dispatch({
              changes: { from: line.from, insert: '#### ' },
              selection: { anchor: line.from + 5, head: line.from + 5 + text.length },
            });
          }
        }
        break;
      case 'bold':
        if (from === to) {
          // 선택 영역이 없는 경우
          view.dispatch({
            changes: { from: from, insert: '**텍스트**' },
            selection: { anchor: from + 2, head: from + 5 },
          });
        } else {
          // 선택 영역이 있는 경우
          const front = view.state.doc.sliceString(from - 2, from) === '**';
          const rear = view.state.doc.sliceString(to, to + 2) === '**';
          if (front && rear) {
            view.dispatch({ changes: { from: to, to: to + 2, empty: true } });
            view.dispatch({ changes: { from: from - 2, to: from, empty: true } });
          } else {
            const originalText = view.state.doc.sliceString(from, to);
            view.dispatch({ changes: { from, to, empty: true } });
            view.dispatch({
              changes: { from, insert: `**${originalText}**` },
              selection: { anchor: from + 2, head: from + 2 + originalText.length },
            });
          }
        }
        break;
      case 'italic':
        if (from === to) {
          // 선택 영역이 없는 경우
          view.dispatch({
            changes: { from: from, insert: '*텍스트*' },
            selection: { anchor: from + 1, head: from + 4 },
          });
        } else {
          // 선택 영역이 있는 경우
          const front = view.state.doc.sliceString(from - 1, from) === '*';
          const rear = view.state.doc.sliceString(to, to + 1) === '*';
          if (front && rear) {
            view.dispatch({ changes: { from: to, to: to + 1, empty: true } });
            view.dispatch({ changes: { from: from - 1, to: from, empty: true } });
          } else {
            const originalText = view.state.doc.sliceString(from, to);
            view.dispatch({ changes: { from, to, empty: true } });
            view.dispatch({
              changes: { from, insert: `*${originalText}*` },
              selection: { anchor: from + 1, head: from + 1 + originalText.length },
            });
          }
        }
        break;
      case 'strike':
        if (from === to) {
          // 선택 영역이 없는 경우
          view.dispatch({
            changes: { from: from, insert: '~~텍스트~~' },
            selection: { anchor: from + 2, head: from + 5 },
          });
        } else {
          // 선택 영역이 있는 경우
          const front = view.state.doc.sliceString(from - 2, from) === '~~';
          const rear = view.state.doc.sliceString(to, to + 2) === '~~';
          if (front && rear) {
            view.dispatch({ changes: { from: to, to: to + 2, empty: true } });
            view.dispatch({ changes: { from: from - 2, to: from, empty: true } });
          } else {
            const originalText = view.state.doc.sliceString(from, to);
            view.dispatch({ changes: { from, to, empty: true } });
            view.dispatch({
              changes: { from, insert: `~~${originalText}~~` },
              selection: { anchor: from + 2, head: from + 2 + originalText.length },
            });
          }
        }
        break;
      case 'quote':
        if (/^> /.test(text)) {
          view.dispatch({
            changes: { from: line.from, to: line.to, insert: text.replace(/^> /, '') },
            selection: { anchor: line.from, head: line.from + text.length - 2 },
          });
        } else {
          if (text === '') {
            view.dispatch({
              changes: { from: line.from, insert: '> 텍스트' },
              selection: { anchor: line.from + 2, head: line.from + 5 },
            });
          } else {
            view.dispatch({
              changes: { from: line.from, insert: '> ' },
              selection: { anchor: line.from + 2, head: line.from + 2 + text.length },
            });
          }
        }
        break;
      case 'link':
        const coords = view.coordsAtPos(to);
        // console.log(line);
        // TODO: 오프셋으로 계산하면 될 듯
        console.log(coords);
        console.dir(view.dom);
        if (!coords) return;
        setLink({ visible: true, bottom: coords.bottom, left: coords.left });
        // console.dir(view.coordsAtPos(line.to));
        // document.elementFromPoint(view.)
        // view.dispatch({
        //   changes: { from: line.to, insert: '[링크텍스트](https://vonaer.com/)' },
        //   selection: { anchor: line.to + 8, head: line.to + 8 + 'https://vonaer.com/'.length },
        // });
        break;
      case 'photo':
        view.dispatch({
          changes: { from: line.to, insert: '![사진텍스트](이미지 주소)' },
          selection: { anchor: line.to + 9, head: line.to + 9 + '이미지 주소'.length },
        });
        break;
      case 'code':
        const placeholder = '코드를 입력하세요';
        if (text === '') {
          view.dispatch({
            changes: { from: line.to, insert: '```\n' + placeholder + '\n```' },
            selection: { anchor: line.to + 4, head: line.to + 4 + placeholder.length },
          });
        } else {
          view.dispatch({
            changes: { from: line.to, insert: '\n```\n' + placeholder + '\n```' },
            selection: { anchor: line.to + 5, head: line.to + 5 + placeholder.length },
          });
        }
        break;
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    // 필요한 경우 추가
    if (e.metaKey && e.code === 'KeyB') handleClickToolbar('bold');
  };
  // console.log(link);

  return (
    <React.Fragment>
      <Toolbar onClick={handleClickToolbar} />
      <MarkdownEditorBlock>
        {true && <AddLink position={{ ...link }} onAdd={handleAddLink} onClose={handleCloseLink} />}
        <ReactCodeMirror
          ref={editor}
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages }), EditorView.lineWrapping]}
          placeholder="내용을 입력하세요..."
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
            highlightActiveLine: false,
            highlightSelectionMatches: false,
            tabSize: 2,
          }}
          value={value}
          onChange={onChange}
          theme={customTheme}
          onKeyDown={onKeyDown}
        />
      </MarkdownEditorBlock>
    </React.Fragment>
  );
};

export default MarkdownEditor;

const MarkdownEditorBlock = styled.div`
  padding: 0 3rem 3rem;
  font-size: 1.125rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #589eff;
  }

  .cm-editor {
    outline: 0;
  }

  .cm-content,
  .cm-line {
    padding: 0;
  }
`;
