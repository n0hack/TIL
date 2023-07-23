import useCounter from '../hooks/useCounter';
import useErrorBoundary from '../hooks/useErrorBoundary';

const ErrorComponent = ({ children }) => {
  const { hasError } = useErrorBoundary();
  const { count } = useCounter();

  if (hasError) {
    return (
      <div>
        <h1>에러 발생여</h1>
        <span>{count}</span>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default ErrorComponent;
