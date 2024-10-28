import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Skeleton } from './components/Skeleton';
import { Image } from './components/Image';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Photo />
      </div>
      <ReactQueryDevtools initialIsOpen={false} errorTypes={[]} />
    </QueryClientProvider>
  );
}

const Photo = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['photos'],
    queryFn: ({ signal }) => axios.get<Array[]>('https://jsonplaceholder.typicode.com/photos', { signal }),
  });

  if (isLoading) {
    return (
      <ul>
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </ul>
    );
  }

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          queryClient.cancelQueries({ queryKey: ['photos'] });
          queryClient.invalidateQueries({ queryKey: ['photos'] });
        }}
      >
        취소
      </button>
      {data && (
        <ul>
          {data?.data.slice(6, 11).map((d) => (
            <Image src={d.thumbnailUrl} />
          ))}
        </ul>
      )}
    </div>
  );

  // return (
  //   <>
  //     <button
  //       onClick={(e) => {
  //         e.preventDefault();
  //         queryClient.cancelQueries({ queryKey: ['photos'] });
  //         queryClient.invalidateQueries({ queryKey: ['photos'] });
  //       }}
  //     >
  //       취소
  //     </button>
  //     {query.data?.data && (
  //       <ul>
  //         {query.data.data.slice(0, 10).map((d) => (
  //           <img src={d.thumbnailUrl} />
  //         ))}
  //       </ul>
  //     )}
  //   </>
  // );
};

export default App;
