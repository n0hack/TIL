import React, { useMemo, useRef } from 'react';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'rehype-slug';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import styled from 'styled-components';
// import Typography from './Typography';
import sanitize from 'sanitize-html';
import katexWhitelist from './katexWhitelist';
import prismPlugin from './prismPlugin';
import prismThemes from './prismThemes';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { unified } from 'unified';
import Typography from './components/common/Typography';

interface MarkdownRendererProps {
  markdown: string;
}

function filter(html: string) {
  return sanitize(html, {
    allowedTags: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'p',
      'a',
      'ul',
      'ol',
      'nl',
      'li',
      'b',
      'i',
      'strong',
      'em',
      'strike',
      'code',
      'hr',
      'br',
      'div',
      'table',
      'thead',
      'caption',
      'tbody',
      'tr',
      'th',
      'td',
      'pre',
      'iframe',
      'span',
      'img',
      'del',
      'input',

      ...katexWhitelist.tags,
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      img: ['src'],
      iframe: ['src', 'allow', 'allowfullscreen', 'scrolling', 'class'],
      '*': ['class', 'id', 'aria-hidden'],
      span: ['style'],
      input: ['type'],
      ol: ['start'],
      ...katexWhitelist.attributes,
    },
    allowedStyles: {
      '*': {
        // Match HEX and RGB
        color: [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
        'text-align': [/^left$/, /^right$/, /^center$/],
      },
      span: {
        ...katexWhitelist.styles,
      },
    },
    allowedIframeHostnames: ['www.youtube.com', 'codesandbox.io', 'codepen.io'],
  });
}

const MarkdownRenderer = ({ markdown }: MarkdownRendererProps) => {
  const html = useMemo(() => {
    return filter(
      remark()
        // remark = 마크다운 처리
        .use(remarkBreaks)
        .use(remarkParse)
        .use(remarkSlug)
        .use(prismPlugin as any)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkRehype, { allowDangerousHtml: true })
        // rehype = HTML 처리
        .use(rehypeRaw)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .processSync(markdown)
        .toString()
    );
  }, [markdown]);

  // .use(prismPlugin)
  //           .use(embedPlugin)

  return (
    <MarkdownRendererBlock>
      {/* <Typography> */}
      {/* <MarkdownPreview source={markdown} /> */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/* </Typography> */}
    </MarkdownRendererBlock>
  );
};

export default MarkdownRenderer;

const MarkdownRendererBlock = styled.div`
  /* width: 50%; */
  flex: 1;
  padding: 3rem;
  background: #fbfdfc;
  word-break: break-word;
  overflow-y: auto;

  /* div {
    word-break: keep-all;
    overflow-wrap: break-word;
  } */

  &::-webkit-scrollbar {
    width: 0.375rem; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background: #589eff; /* 스크롤바의 색상 */
  }
`;
