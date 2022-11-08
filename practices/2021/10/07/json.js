// 클라이언트가 서버에 객체를 전송하려면 문자열화해야 함 (Serialize)
const obj = {
  name: 'NoHack',
  age: 20,
  alive: true,
  hobby: ['Game', 'Exercise'],
};

// JSON.stringify(객체, 필터, 들여쓰기)
// 객체를 JSON 형식의 문자열로 변환
const json = JSON.stringify(obj);
console.log(typeof json, json);

const json2 = JSON.stringify(obj, null, 2);
console.log(typeof json2, json2);

// value가 number면 stringify 변환 시 제외하도록 함
function filter(key, value) {
  return typeof value === 'number' ? undefined : value;
}
const json3 = JSON.stringify(obj, filter, 2);
console.log(typeof json3, json3);

// 전달받은 Json 문자열을 다시 객체로 변환하는 작업 (Deserialize)
console.log(JSON.parse(json3));
