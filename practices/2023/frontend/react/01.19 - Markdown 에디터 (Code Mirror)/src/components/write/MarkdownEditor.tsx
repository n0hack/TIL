import React, { useRef, useState } from 'react';
import ReactCodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import Toolbar, { ToolbarMode } from './Toolbar';
import AddLink from './AddLink';
import tw, { styled } from 'twin.macro';
import theme from '@lib/markdown/theme';
import AddImage from './AddImage';

interface MarkdownEditorProps {
  value: string;
  onChange?: (value: string) => void;
}

const MarkdownEditor = ({ value, onChange }: MarkdownEditorProps) => {
  const [link, setLink] = useState({ visible: false, bottom: 0, left: 0, stickToBottom: false, stickToRight: false });
  const [image, setImage] = useState({ visible: false, bottom: 0, left: 0, stickToBottom: false, stickToRight: false });
  const container = useRef<HTMLDivElement>(null);
  const editor = useRef<ReactCodeMirrorRef>(null);

  const handleAddLink = (url: string) => {
    if (!editor.current || !editor.current.view) return;

    const { view } = editor.current;
    const { from } = view.state.selection.ranges[0];

    view.dispatch({
      changes: { from, insert: `[링크 텍스트](${url})` },
      selection: { anchor: from + 1, head: from + 7 },
    });
    handleCloseLink();
    editor.current.view.focus();
  };

  const handleCloseLink = () => {
    setLink({ visible: false, bottom: 0, left: 0, stickToBottom: false, stickToRight: false });
  };

  const handleAddImage = (url: string) => {
    if (!editor.current || !editor.current.view) return;

    const { view } = editor.current;
    const { from } = view.state.selection.ranges[0];

    view.dispatch({
      changes: { from, insert: `![이미지 설명](${url})` },
      selection: { anchor: from + 2, head: from + 8 },
    });
    handleCloseImage();
    editor.current.view.focus();
  };

  const handleCloseImage = () => {
    setImage({ visible: false, bottom: 0, left: 0, stickToBottom: false, stickToRight: false });
  };

  const handleClickToolbar = (mode: ToolbarMode) => {
    if (!editor.current || !editor.current.view) return;

    const { view } = editor.current;
    // 커서가 위치한 행의 정보
    const line = view.state.doc.lineAt(view.state.selection.main.head);
    const text = line.text;
    // 선택한 영역에 대한 포지션 정보
    const { from, to } = view.state.selection.ranges[0];
    // 커서가 위치한 곳의 좌표 정보
    const coords = view.coordsAtPos(to);

    // 기본 문구
    const placeholderCommon = '텍스트';
    const placeholderHeader = '제목';
    const placeholderCode = '코드를 입력하세요';

    if (mode === 'heading1') {
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
            changes: { from: line.from, insert: `# ${placeholderHeader}` },
            selection: { anchor: line.from + 2, head: line.from + 2 + placeholderHeader.length },
          });
        } else {
          view.dispatch({
            changes: { from: line.from, insert: '# ' },
            selection: { anchor: line.from + 2, head: line.from + 2 + text.length },
          });
        }
      }
    } else if (mode === 'heading2') {
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
            changes: { from: line.from, insert: `## ${placeholderHeader}` },
            selection: { anchor: line.from + 3, head: line.from + 3 + placeholderHeader.length },
          });
        } else {
          view.dispatch({
            changes: { from: line.from, insert: '## ' },
            selection: { anchor: line.from + 3, head: line.from + 3 + text.length },
          });
        }
      }
    } else if (mode === 'heading3') {
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
            changes: { from: line.from, insert: `### ${placeholderHeader}` },
            selection: { anchor: line.from + 4, head: line.from + 4 + placeholderHeader.length },
          });
        } else {
          view.dispatch({
            changes: { from: line.from, insert: '### ' },
            selection: { anchor: line.from + 4, head: line.from + 4 + text.length },
          });
        }
      }
    } else if (mode === 'heading4') {
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
            changes: { from: line.from, insert: `#### ${placeholderHeader}` },
            selection: { anchor: line.from + 5, head: line.from + 5 + placeholderHeader.length },
          });
        } else {
          view.dispatch({
            changes: { from: line.from, insert: '#### ' },
            selection: { anchor: line.from + 5, head: line.from + 5 + text.length },
          });
        }
      }
    } else if (mode === 'bold') {
      if (from === to) {
        // 선택 영역이 없는 경우
        view.dispatch({
          changes: { from: from, insert: `**${placeholderCommon}**` },
          selection: { anchor: from + 2, head: from + 2 + placeholderCommon.length },
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
    } else if (mode === 'italic') {
      if (from === to) {
        // 선택 영역이 없는 경우
        view.dispatch({
          changes: { from: from, insert: `*${placeholderCommon}*` },
          selection: { anchor: from + 1, head: from + 1 + placeholderCommon.length },
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
    } else if (mode === 'strike') {
      if (from === to) {
        // 선택 영역이 없는 경우
        view.dispatch({
          changes: { from: from, insert: `~~${placeholderCommon}~~` },
          selection: { anchor: from + 2, head: from + 2 + placeholderCommon.length },
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
    } else if (mode === 'quote') {
      if (/^> /.test(text)) {
        view.dispatch({
          changes: { from: line.from, to: line.to, insert: text.replace(/^> /, '') },
          selection: { anchor: line.from, head: line.from + text.length - 2 },
        });
      } else {
        if (text === '') {
          view.dispatch({
            changes: { from: line.from, insert: `> ${placeholderCommon}` },
            selection: { anchor: line.from + 2, head: line.from + 2 + placeholderCommon.length },
          });
        } else {
          view.dispatch({
            changes: { from: line.from, insert: '> ' },
            selection: { anchor: line.from + 2, head: line.from + 2 + text.length },
          });
        }
      }
    } else if (mode === 'link' || mode === 'photo') {
      if (!coords) return;

      const stickToRight = coords.left + 320 >= view.dom.offsetLeft + view.dom.offsetWidth;
      const stickToBottom = coords.bottom + 139 >= window.innerHeight - 48;
      mode === 'link'
        ? setLink({ visible: true, bottom: coords.bottom - 224, left: coords.left, stickToBottom, stickToRight })
        : setImage({ visible: true, bottom: coords.bottom - 224, left: coords.left, stickToBottom, stickToRight });
    } else if (mode === 'code') {
      if (text === '') {
        view.dispatch({
          changes: { from: line.to, insert: '```\n' + placeholderCode + '\n```' },
          selection: { anchor: line.to + 4, head: line.to + 4 + placeholderCode.length },
        });
      } else {
        view.dispatch({
          changes: { from: line.to, insert: '\n```\n' + placeholderCode + '\n```' },
          selection: { anchor: line.to + 5, head: line.to + 5 + placeholderCode.length },
        });
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.metaKey && e.code === 'KeyB') handleClickToolbar('bold');
  };

  return (
    <MarkdownEditorBlock ref={container}>
      <Toolbar onClick={handleClickToolbar} />
      <WriteBlock>
        {link.visible && <AddLink position={{ ...link }} onAdd={handleAddLink} onClose={handleCloseLink} />}
        {image.visible && <AddImage position={{ ...image }} onAdd={handleAddImage} onClose={handleCloseImage} />}
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
          theme={theme}
          onKeyDown={onKeyDown}
        />
      </WriteBlock>
    </MarkdownEditorBlock>
  );
};

const MarkdownEditorBlock = tw.div`relative flex flex-col flex-1 pb-12 text-lg overflow-y-auto`;

const WriteBlock = styled.div`
  ${tw`px-12 overflow-y-scroll`}

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    ${tw`bg-blue-400`}
  }

  .cm-editor {
    outline: 0;
  }

  .cm-content,
  .cm-line {
    padding: 0;
  }
`;

export default MarkdownEditor;
