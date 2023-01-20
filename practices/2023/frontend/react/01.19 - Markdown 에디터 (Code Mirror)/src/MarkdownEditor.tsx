import React, { forwardRef } from 'react';
import ReactCodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import createTheme from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import styled from 'styled-components';

interface MarkdownEditorProps {
  value: string;
  onChange?: (value: string) => void;
}

const customTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#FFFFFF',
    selection: '#D6D6D6',
    // fontFamily: 'Noto Sans KR',
    fontFamily: 'Fira Mono',
  },
  styles: [
    // 코드 블럭
    { tag: t.keyword, color: '#0184bc' },
    { tag: t.labelName, color: '#9d9d9f', fontStyle: 'italic' }, // 코드 블럭 언어
    { tag: t.meta, color: '#9d9d9d', fontStyle: 'italic' },
    { tag: t.monospace, color: '#9d9d9f', fontStyle: 'italic' },
    // { tag: t.processingInstruction, color: '#212529' },
    { tag: t.variableName, color: '#212529' },
    { tag: t.className, color: '#cf9d41' },
    { tag: t.propertyName, color: '#986801' },
    { tag: t.name, color: '#e45649' },
    { tag: t.bool, color: '#0184bc' },
    { tag: t.number, color: '#986801' },
    { tag: t.string, color: '#50a14f' },
    { tag: t.regexp, color: '#50a14f' },
    { tag: t.logicOperator, color: '#56b6c2' }, // 논리 연산자
    { tag: t.compareOperator, color: '#56b6c2' }, // 비교 연산자
    { tag: t.bitwiseOperator, color: '#56b6c2' }, // 비트 연산자
    { tag: t.comment, color: '#9d9d9d', fontStyle: 'italic' },
    { tag: t.lineComment, color: '#9d9d9d', fontStyle: 'italic' },
    { tag: t.documentMeta, color: '#808080' }, // Doctype
    { tag: t.color, color: '#212529' }, // CSS 색상

    // 모든 컨텐츠
    { tag: t.content, color: '#212529' },
    { tag: t.contentSeparator, color: '#212529' }, // 수평 구분선

    { tag: t.atom, color: '#3182f6' },
    { tag: t.link, color: '#3182f6' },
    { tag: t.url, color: '#3182f6' },

    // 특수문자
    { tag: t.character, color: '#212529' },

    // 폰트 스타일 (Bold, Italic)
    { tag: t.strong, color: '#212529', fontWeight: 'bold' },
    { tag: t.emphasis, color: '#212529', fontStyle: 'italic' },

    // 인용
    { tag: t.quote, color: '#9d9d9d', fontStyle: 'italic' },

    // 제목
    { tag: t.heading1, color: '#212529', fontSize: '2.5rem', fontWeight: 'bold' },
    { tag: t.heading2, color: '#212529', fontSize: '2rem', fontWeight: 'bold' },
    { tag: t.heading3, color: '#212529', fontSize: '1.5rem', fontWeight: 'bold' },
    { tag: t.heading4, color: '#212529', fontSize: '1.3125rem', fontWeight: 'bold' },
    { tag: t.heading5, color: '#212529', fontSize: '1.125rem', fontWeight: 'bold' },
    { tag: t.heading6, color: '#212529', fontSize: '1.125rem', fontWeight: 'bold' },
  ],
});

const MarkdownEditor = forwardRef<ReactCodeMirrorRef, MarkdownEditorProps>(({ value, onChange }, ref) => {
  return (
    <MarkdownEditorBlock>
      <ReactCodeMirror
        ref={ref}
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
      />
    </MarkdownEditorBlock>
  );
});

export default MarkdownEditor;

const MarkdownEditorBlock = styled.div`
  padding: 0 3rem 3rem;
  font-size: 1.125rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.375rem; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background: #589eff; /* 스크롤바의 색상 */
  }

  .cm-editor {
    outline: 0;
  }

  .cm-content,
  .cm-line {
    padding: 0;
  }
`;
