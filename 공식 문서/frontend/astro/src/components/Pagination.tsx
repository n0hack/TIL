import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onClick: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onClick }: PaginationProps) => {
  const handlePrevClick = () => {
    if (currentPage === 1) return;
    onClick(currentPage - 1);

    const url = new URL(window.location.href);
    url.searchParams.set('page', String(currentPage - 1));
    window.history.pushState({}, '', url.href);
  };

  const handleNextClick = () => {
    if (currentPage === totalPages) return;
    onClick(currentPage + 1);

    const url = new URL(window.location.href);
    url.searchParams.set('page', String(currentPage + 1));
    window.history.pushState({}, '', url.href);
  };

  return (
    <div>
      <button onClick={handlePrevClick}>이전</button>
      <span>{currentPage}</span>
      <button onClick={handleNextClick}>다음</button>
    </div>
  );
};

export default Pagination;
