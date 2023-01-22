import React, { useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

interface AddLinkProps {
  position: { bottom: number; left: number };
  onAdd: (url: string) => void;
  onClose: () => void;
}

const AddLink = ({ position, onAdd, onClose }: AddLinkProps) => {
  const [url, setUrl] = useState('');
  const block = useRef<HTMLDivElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onAdd(url);
    console.dir(block.current);
  };

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <div
        ref={block}
        className="absolute p-4 bg-white shadow-md z-10"
        style={{ top: position.bottom, left: position.left }}
      >
        <h3 className="text-base font-medium mb-2">링크 등록</h3>
        <form onSubmit={onSubmit}>
          <input
            className="text-base border-b mr-4 text-gray-900 outline-none"
            placeholder="URL을 입력하세요"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="px-3 py-[2px] text-white font-bold text-sm rounded-full bg-gray-500 hover:bg-gray-400">
            확인
          </button>
        </form>
      </div>
    </OutsideClickHandler>
  );
};

export default AddLink;
