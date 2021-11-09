console.log(`hello ${{ foo: 'bar' }} ${() => 'world!'}`);

function tagged(...args) {
  console.log(args);
}
tagged`hello ${{ foo: 'bar' }} ${() => 'world!'}`;
