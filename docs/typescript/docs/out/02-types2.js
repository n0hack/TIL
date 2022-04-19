"use strict";
const x = 'hello';
console.log(x);
let x2 = 'hello';
x2 = 'hello';
function configure(x) {
    console.log(x);
}
configure({ width: 100 });
configure('auto');
function handleRequest(url, mehtod) { }
// method가 string으로 추론되기 때문에 as "GET"을 해 주거나,
// as const로 변하지 않는 리터럴임을 표시
const req = { url: 'https://example.com', method: 'GET' };
// const req = { url: 'https://example.com', method: 'GET' } as const;
// const req = { url: 'https://example.com', method: 'GET' as "GET" };
handleRequest(req.url, req.method);
// handleRequest(req.url, req.method);
// ?.는 옵셔널
function liveDangerously(x) {
    // !.은 null 또는 undefined가 아님을 단언하는 것
    console.log(x.toFixed());
}
liveDangerously(2);
//# sourceMappingURL=02-types2.js.map