import { AxiosError } from 'axios';
import React from 'react';
import NetworkError from './NetworkError';

type P = {
  children?: React.ReactNode;
};

type S = {
  error: Error | null;
  shouldRethrow: boolean;
  shouldHandleError: boolean;
};

class ApiErrorBoundary extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { error: null, shouldRethrow: false, shouldHandleError: false };
  }

  static getDerivedStateFromError(error: Error): S {
    if (error instanceof AxiosError) {
      console.log('AxiosError');
      return {
        error,
        shouldRethrow: false,
        shouldHandleError: true,
      };
    }
    return {
      error,
      shouldRethrow: true,
      shouldHandleError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('didCatch', error, errorInfo);
  }

  render() {
    console.log(this.state);
    if (this.state.shouldRethrow) {
      throw this.state.error;
    }

    if (!this.state.shouldHandleError) {
      return this.props.children;
    }

    if (this.state.error) {
      return <NetworkError onClickRetry={() => this.setState({ shouldHandleError: false })} />;
    }

    // return this.props.children;
    return null;
  }
}

export default ApiErrorBoundary;
