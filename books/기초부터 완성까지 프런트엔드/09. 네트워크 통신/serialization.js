const log = console.log;

log(JSON.stringify({}));
log(JSON.stringify(false));
log(JSON.stringify(100));
log(JSON.stringify([1, NaN, () => console.log('hi')]));
log(JSON.parse(JSON.stringify({ a: 1, b: NaN, c: () => console.log('hi') })));
