// 체인을 너무 깊숙하게 연결하면 성능에 좋지 않다.
var primate = {
  stereoscopicVision: true,
};

// 프로토타입을 물려 받음
var ape = Object.create(primate);
ape.hasThumbs = true;
ape.hasTail = false;
ape.swing = function () {
  return '매달리기';
};

// 프로토타입을 물려 받음
var chimp = Object.create(ape);
var bonobo = Object.create(ape);

bonobo.habitat = '중앙 아프리카';

console.log(bonobo.habitat);
console.log(bonobo.hasTail);
console.log(chimp.swing());

ape.hasThumbs = false;
console.log(chimp.hasThumbs);
console.log(bonobo.hasThumbs);
