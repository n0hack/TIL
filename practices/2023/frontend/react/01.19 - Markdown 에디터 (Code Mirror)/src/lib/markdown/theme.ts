import createTheme from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export default createTheme({
  theme: 'light',
  settings: {
    background: '#FFFFFF',
    selection: '#D6D6D6',
    fontFamily: 'Fira Mono',
  },
  styles: [
    // 코드 블럭
    { tag: t.labelName, color: '#212529' }, // 언어
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
