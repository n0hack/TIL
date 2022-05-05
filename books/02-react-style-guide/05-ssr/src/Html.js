import React from 'react';

const Html = (props) => {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <title>Server Side Rendering</title>
      </head>
      <body>
        <div id="root">{props.children}</div>
        <script type="text/javascript" src="bundle.js" />
      </body>
    </html>
  );
};

export default Html;
