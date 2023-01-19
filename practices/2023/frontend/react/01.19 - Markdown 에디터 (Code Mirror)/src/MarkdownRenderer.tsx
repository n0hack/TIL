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
import remarkStringify from 'rehype-stringify';
import styled from 'styled-components';
import Typography from './Typography';

interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer = ({ markdown }: MarkdownRendererProps) => {
  const timer = useRef<NodeJS.Timer>();

  const html = useMemo(() => {
    return (
      remark()
        // .use(remarkBreaks)
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkSlug)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(remarkMath)
        .use(rehypeKatex)
        .use(remarkStringify)
        .processSync(markdown)
        .toString()
    );
  }, [markdown]);

  // .use(prismPlugin)
  //           .use(embedPlugin)

  return (
    <MarkdownRendererBlock>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Typography>
    </MarkdownRendererBlock>
  );
};

export default MarkdownRenderer;

const MarkdownRendererBlock = styled.div`
  flex: 1;
  padding: 3rem;
  background: #fbfdfc;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.375rem; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background: #589eff; /* 스크롤바의 색상 */
  }
`;
