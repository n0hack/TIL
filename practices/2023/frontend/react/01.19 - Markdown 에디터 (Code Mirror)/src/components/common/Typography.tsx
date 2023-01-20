import React from 'react';
import styled from 'styled-components';
// import prismThemes from './prismThemes';

interface TypographyProps {
  children?: React.ReactNode;
}

const Typography = ({ children }: TypographyProps) => {
  return <TypographyBlock>{children}</TypographyBlock>;
};

export default Typography;

const TypographyBlock = styled.div`
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.5;

    a {
      transition: all 0.2s ease-in;
      color: #3182f6;
      &:hover {
        color: #3576d0;
      }
    }
  }

  ul,
  ol {
    margin: 1.125rem 0;
    padding-left: 2.5rem;
    list-style-type: disc;
  }

  ul,
  ol {
    ul,
    ol {
      li {
        list-style: circle;
      }
      margin: 0;
    }
  }

  li {
    line-height: 1.7;
  }

  p {
    margin: 1.125rem 0;
  }

  ul,
  ol,
  p {
    b {
      font-weight: 400;
    }

    code {
      background: #e9ecef;
      padding: 0.2em 0.4em;
      font-size: 85%;
      border-radius: 3px;
    }

    a {
      transition: all 0.2s ease-in;
      color: #3182f6;
      &:hover {
        color: #3576d0;
      }
    }
  }

  p + h1,
  p + h2,
  p + h3,
  p + h4 {
    margin-top: 2.5rem;
  }

  p {
    img {
      display: block;
      /* margin: 0 auto; */
      max-width: 100%;
      margin: 1.5rem auto;
    }
  }

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background: #4d4d4d;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  table {
    margin: 1.125rem 0;
    min-width: 40%;
    max-width: 100%;
    border: 1px solid #adb5bd;
    border-collapse: collapse;
    font-size: 0.875rem;
    thead > tr > th {
      /* text-align: left; */
      border-bottom: 4px solid #adb5bd;
    }
    th,
    td {
      word-break: break-word;
      padding: 0.5rem;
    }

    td + td,
    th + th {
      border-left: 1px solid #adb5bd;
    }

    tr:nth-child(even) {
      background: #f8f9fa;
    }
    tr:nth-child(odd) {
      background: #f8f9fa;
    }
  }

  pre {
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: 0.875rem;
    padding: 1rem;
    border-radius: 4px;
    line-height: 1.5;
    overflow-x: auto;
    letter-spacing: 0px;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  blockquote {
    margin-top: 2rem;
    margin-bottom: 2rem;
    /* border-bottom: 2px solid #3576d0; */
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-radius: 4px;
    background: #f0f0f0;
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
    padding-left: 1rem;
    color: #626262;
    ul,
    ol {
      padding-left: 1rem;
    }
    *:first-child {
      margin-top: 0;
    }
    *:last-child {
      margin-bottom: 0;
    }
  }

  .katex-mathml {
    display: none;
  }

  iframe {
    width: 768px;
    height: 430px;
    max-width: 100%;
    background: black;
    display: block;
    margin: auto;
    border: none;
    border-radius: 4px;
    overflow: hidden;
  }
`;
/* ${prismThemes['github']} */
