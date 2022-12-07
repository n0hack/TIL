import React from 'react';

interface ISEOProps {
  title: string;
}

export default function SEO({ title }: ISEOProps) {
  return <title>{title} | DevStickers!</title>;
}
