Function.prototype.partial = function () {
  let fn = this;
  let _args = arguments;

  return function () {
    let args = Array.prototype.slice.call(_args);
    var arg = 0;

    for (var i = 0; i < args.length && arg < arguments.length; i++) {
      if (args[i] === undefined) args[i] = arguments[arg++];
    }
    return fn.apply(this, args);
  };
};

function abc(a, b, c) {
  console.log(a, b, c);
}

var ac = abc.partial(undefined, 'll', undefined);
ac('a', 'c');
