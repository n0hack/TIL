var add = function (a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
};

var sub = function (a, b, callback) {
  setTimeout(function () {
    callback(a - b);
  }, 1000);
};

var div = function (a, b, callback) {
  setTimeout(function () {
    callback(a / b);
  }, 1000);
};

// add(10, 15, function (a) {
//   sub(a, 5, function (a) {
//     div(a, 10, function (r) {
//       console.log(r);
//     });
//   });
// });

function _async(func) {
  return function () {
    arguments[arguments.length++] = function (result) {
      _callback(result);
    };
    func.apply(null, arguments);

    var _callback;
    function _async_cb_receiver(callback) {
      _callback = callback;
    }

    return _async_cb_receiver;
  };
}

var add = _async((a, b, callback) => {
  setTimeout(() => callback(a + b), 1000);
});

add(20, 30)(console.log);
