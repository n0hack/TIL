import React, { useMemo } from 'react';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'rehype-slug';
import remarkRehype from 'remark-rehype';
import remarkEmoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import tw, { styled } from 'twin.macro';
import PrismPlugin from '@lib/markdown/prismPlugin';
import prismThemes from '@lib/markdown/prismThemes';
import Typography from '@components/common/Typography';

interface Props {
  title?: string;
  markdown: string;
  background?: boolean;
}

const MarkdownPreview = ({ title, markdown, background }: Props) => {
  const html = useMemo(() => {
    // TODO: Sanitize 처리
    return remark()
      .use(remarkBreaks)
      .use(remarkParse)
      .use(remarkSlug)
      .use(remarkEmoji)
      .use(PrismPlugin as any)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .processSync(markdown)
      .toString();
  }, [markdown]);

  return (
    <MarkdownPreviewBlock background={background}>
      {title && <h1 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-300">{title}</h1>}
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Typography>
    </MarkdownPreviewBlock>
  );
};

export default MarkdownPreview;

const MarkdownPreviewBlock = styled.div<{ background?: boolean }>`
  flex: 1;
  padding: 3rem;
  background: ${(props) => (props.background ? '#fbfdfc' : 'white')};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    ${tw`bg-blue-400`}
  }

  .katex-mathml {
    display: none;
  }

  ${prismThemes}
`;
