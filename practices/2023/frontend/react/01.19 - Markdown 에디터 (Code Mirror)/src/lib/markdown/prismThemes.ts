import { css } from 'twin.macro';

const prismThemes = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #272822;
  }

  pre {
    color: #f8f8f2;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    background: #272822;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #778090;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #f92672;
  }

  .token.boolean,
  .token.number {
    color: #ae81ff;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a6e22e;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function {
    color: #e6db74;
  }

  .token.keyword {
    color: #f92672;
  }

  .token.regex,
  .token.important {
    color: #fd971f;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

export default prismThemes;
