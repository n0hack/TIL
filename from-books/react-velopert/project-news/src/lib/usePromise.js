import { useEffect, useState } from 'react';

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}

// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const query = category === 'all' ? '' : `&category=${category}`;
//       const response = await axios.get(
//         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a575813e7bb44d58bf7b16f57cba651d`
//       );
//       setArticles(response.data.articles);
//     } catch (e) {
//       console.log(e);
//     }
//     setLoading(false);
//   };
//   fetchData();
// }, [category]);
