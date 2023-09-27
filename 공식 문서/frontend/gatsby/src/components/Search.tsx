import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import * as Fuse from 'react-use-fusejs';

type SearchProps = {};

const Search = ({}: SearchProps) => {
  const data = useStaticQuery<Queries.SearchIndexQuery>(graphql`
    query SearchIndex {
      fusejs {
        index
        data
      }
    }
  `);
  const [query, setQuery] = useState('');
  const result = (Fuse as any).useGatsbyPluginFusejs(query, data.fusejs);

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {result.map(({ item }: any) => (
          <li key={item?.id}>{item?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export { Search };
