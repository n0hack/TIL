// 네임스페이스 생성
var rj3 = {};

rj3.svg = {};

rj3.svg.line = function () {
  var getX = function (point) {
    return point[0];
  };
  var getY = function (point) {
    return point[1];
  };
  var interpolate = function (points) {
    return points.join('L');
  };

  function line(data) {
    var segments = [],
      points = [],
      i = -1,
      n = data.length,
      d;

    function segment() {
      segments.push('M', interpolate(points));
    }

    while (++i < n) {
      d = data[i];
      points.push([+getX.call(this, d, i), +getY.call(this, d, i)]);
    }

    if (points.length) {
      segment();
    }

    return segments.length ? segments.join('') : null;
  }

  line.x = function (funcToGetX) {
    if (!arguments.length) return getX;
    getX = funcToGetX;
    return line;
  };

  line.y = function (funcToGetY) {
    if (!arguments.length) return getY;
    getY = funcToGetY;
    return line;
  };

  return line;
};

var arrayData = [
  [10, 130],
  [100, 60],
  [190, 160],
  [280, 10],
];
lineGenerator = rj3.svg.line();
path = lineGenerator(arrayData);

console.log(path);
