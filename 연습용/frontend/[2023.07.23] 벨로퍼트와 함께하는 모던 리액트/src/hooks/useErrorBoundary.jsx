import { useEffect, useState } from 'react';

const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const onError = (e) => {
      console.log(e);
      setHasError(true);
    };
    window.addEventListener('error', onError);
    return () => {
      window.removeEventListener('error', onError);
    };
  }, []);

  return { hasError };
};

export default useErrorBoundary;
