import React, { memo, useDeferredValue, useState } from 'react';

const UseDeferredValue = () => {
  const [text, setText] = useState('');
  const deferredValue = useDeferredValue(text);

  console.log(deferredValue);

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredValue} />
    </>
  );
};

const SlowList = memo(function SlowList({ text }: { text: string }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowItem({ text }: { text: string }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Text: {text}</li>;
}

export default UseDeferredValue;
