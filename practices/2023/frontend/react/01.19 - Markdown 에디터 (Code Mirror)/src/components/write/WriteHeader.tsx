import React from 'react';
import { MdArrowBack } from 'react-icons/md';

interface WriteHeaderProps {
  onExit?: () => void;
  onPublish?: () => void;
}

const WriteHeader = ({ onExit, onPublish }: WriteHeaderProps) => {
  return (
    <div className="w-full h-[60px] fixed top-0 left-0 flex justify-between items-center px-12 bg-white shadow-md">
      <button className="flex items-center gap-1 font-medium text-gray-700 select-none" onClick={onExit}>
        <MdArrowBack />
        <span>나가기</span>
      </button>
      <button
        className="py-[6px] px-3 font-medium text-white bg-blue-500 rounded-[4px] transition hover:bg-blue-600"
        onClick={onPublish}
      >
        게시하기
      </button>
    </div>
  );
};

export default WriteHeader;
