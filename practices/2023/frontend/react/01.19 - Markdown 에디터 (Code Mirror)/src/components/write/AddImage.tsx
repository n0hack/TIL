import React, { useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

interface AddImageProps {
  position: { bottom: number; left: number; stickToRight: boolean; stickToBottom: boolean };
  onAdd: (url: string) => void;
  onClose: () => void;
}

const AddImage = ({ position, onAdd, onClose }: AddImageProps) => {
  const { bottom, left, stickToBottom, stickToRight } = position;
  const [url, setUrl] = useState('');
  const block = useRef<HTMLDivElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(url);
    // console.dir(block.current);
  };

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <div
        ref={block}
        style={{
          position: 'absolute',
          top: stickToBottom ? 'initial' : bottom,
          bottom: stickToBottom ? '3rem' : 'initial',
          left: stickToRight ? 'initial' : left,
          right: stickToRight ? '3rem' : 'initial',
          zIndex: 5,
          width: '20rem',
        }}
      >
        <div className="p-4 bg-white shadow-md border border-gray-200 rounded-sm">
          <h3 className="text-base font-medium mb-2">이미지 링크 등록</h3>
          <form onSubmit={onSubmit} className="flex">
            <input
              className="text-base border-b mr-4 text-gray-900 outline-none flex-1"
              placeholder="URL을 입력하세요"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="px-3 py-[2px] text-white font-bold text-sm rounded-md bg-gray-500 hover:bg-gray-400">
              확인
            </button>
          </form>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default AddImage;
