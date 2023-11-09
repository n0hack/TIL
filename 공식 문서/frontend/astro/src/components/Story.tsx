import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { twMerge } from 'tailwind-merge';

type StoryProps = {
  list: {
    title: string;
    slug: string;
    thumbnail: {
      url: {
        src: string;
      };
    };
    summary: string;
    date: Date;
    category: string;
  }[];
  categories: {
    name: string;
    count: number;
  }[];
};

const Story = ({ list, categories }: StoryProps) => {
  const [page, setPage] = useState(1);
  const [c, setC] = useState('all');
  const fItems =
    c === 'all' ? list : list.filter((item) => item.category === c);

  const handleCategoryChange = (name: string) => {
    setC(name);
    const url = new URL(window.location.href);
    url.searchParams.set('category', name);

    window.location.assign(url);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const categoryFromUrl = url.searchParams.get('category');

    if (
      !categoryFromUrl ||
      !categories.some((category) => category.name === categoryFromUrl)
    ) {
      setC('all');
      url.searchParams.set('category', 'all');
    } else {
      setC(categoryFromUrl);
    }

    // window.location.assign(url);
  }, []);

  return (
    <div className="p-10">
      <div className="flex gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className={twMerge(
              'px-3 py-2 border rounded-md hover:bg-red-400 hover:text-white',
              category.name === c && 'bg-red-400 text-white'
            )}
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>
      <div>
        {fItems.slice((page - 1) * 2, page * 2).map((item) => (
          <li key={item.slug}>
            <img
              src={item.thumbnail.url.src}
              className="w-[320px] h-[200px] object-cover"
            />
            {item.title}
          </li>
        ))}
      </div>
      {/* <Pagination /> */}
    </div>
  );
};

export default Story;
