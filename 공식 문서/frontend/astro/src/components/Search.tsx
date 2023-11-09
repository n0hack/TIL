import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

type SearchProps = {
  data: {
    slug: string;
    title: string;
    summary: string;
    thumbnail: {
      url: { src: string };
    };
    date: Date;
  }[];
};

const Search = ({ data }: SearchProps) => {
  const [page, setPage] = useState(1);
  const [beforePage, setBeforePage] = useState(1);
  const totalPages = Math.ceil(data.length / 1);

  useEffect(() => {
    const url = new URL(window.location.href);
    const pageFromUrl = Number(url.searchParams.get('page'));

    if (
      Number.isNaN(pageFromUrl) ||
      pageFromUrl < 1 ||
      pageFromUrl > totalPages
    ) {
      setPage(1);
      url.searchParams.set('page', '1');
    } else {
      setPage(pageFromUrl);
      url.searchParams.set('page', String(pageFromUrl));
    }

    window.history.pushState({}, '', url.toString());

    window.addEventListener('popstate', () => {
      // console.log(history.state);
      // const url = new URL(window.location.href);
      const pageFromUrl = Number(url.searchParams.get('page'));
      console.log('뒤로가기 페이지 번호:', pageFromUrl);

      // console.log(url, history.state);

      // if (5
      //   Number.isNaN(pageFromUrl) ||
      //   pageFromUrl < 1 ||
      //   pageFromUrl > totalPages
      // ) {
      //   setPage(1);
      //   url.searchParams.set('page', '1');
      // } else {
      //   setPage(pageFromUrl);
      //   url.searchParams.set('page', String(pageFromUrl));
      // }
    });
  }, []);

  return (
    <div>
      <ul>
        {data?.slice((page - 1) * 1, page * 1).map((post) => (
          <li key={post.slug}>
            <img
              src={post.thumbnail.url.src}
              className="w-[500px] object-cover"
            />
            {post.title}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        onClick={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Search;
