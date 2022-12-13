// 최상의 성능을 위한 Preload (SSR)
// https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Inter-roman.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);
};
