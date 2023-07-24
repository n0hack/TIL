import React from 'react';

type ErrorBoundaryProps = {
  children?: React.ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
};

class RootErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error);
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <h1>에러가 발생했어요!</h1>;
    }

    return this.props.children;
  }
}

export default RootErrorBoundary;
