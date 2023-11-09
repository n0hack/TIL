import { useEffect, useRef, useState } from 'react';

type SearchProps = {
  datas: {
    slug: string;
    title: string;
    summary: string;
    thumbnail: {
      url: { src: string };
    };
    date: Date;
  }[];
};

const Search = ({ datas }: SearchProps) => {
  const [page, setPage] = useState(1);
  const ref = useRef<HTMLUListElement>(null);
  const sliced = datas.slice(0, page * 9);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;
      console.log(page);
      setPage((page) => page + 1);
      observer.disconnect();
    });
  }, []);

  useEffect(() => {
    if (
      !ref.current ||
      page * 9 >= datas.length ||
      ref.current.children.length === 0
    )
      return;

    if (observer && observer.current) {
      observer.current.observe(
        ref.current.children[ref.current.children.length - 1]
      );
    }
  }, [page]);

  return (
    <ul ref={ref} className="grid grid-cols-3 gap-6">
      {sliced?.map((data) => (
        <li key={data.slug} className="animate-[showSearchItem_1s_forwards]">
          <img
            src={data.thumbnail.url.src}
            className="w-[700px] h-[500px] object-cover"
          />
          <p>{data.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Search;
