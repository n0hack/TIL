function withTest(WrappedComponent) {
  function Component() {
    return <WrappedComponent />;
  }

  return Component;
}

export default withTest;
