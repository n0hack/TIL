const log = console.log;

Function.prototype.partial = function () {
  const fn = this,
    args = Array.prototype.slice.call(arguments);

  return function () {
    let arg = 0;
    for (let i = 0; i < args.length && arg < args.length; i++) {
      if (args[i] === undefined) args[i] = arguments[arg++];
    }
    return fn.apply(this, args);
  };
};

function abc(a, b, c) {
  log(a, b, c);
}
