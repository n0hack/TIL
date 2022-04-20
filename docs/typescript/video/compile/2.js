"use strict";
// readonly
const namesRO1 = ['1', '2'];
const namesRO2 = ['1', '2'];
// tuple
const tuplePlayer = ['1', 1, true];
// undefined
const undefined1 = undefined;
// null
const null1 = null;
// void
// 주로 아무것도 리턴하지 않는 함수를 대상으로 작성
// 보통 명시하지는 않음
const void1 = undefined;
function voidF() { }
// unknown
// ex. API를 요청했는데 타입을 모를 때 (변수의 타입을 모를 때)
// 이후 타입을 체크(typeof)해서 사용해야 함
let unknownA = 123;
if (typeof unknownA === 'number') {
    // 타입 체크 이후에만 사용 가능
    // typeof를 통해 타입 추론
}
// never
// 함수의 끝에 도달할 수 없음 (에러 발생이라든가)
function neverF(name) {
    if (typeof name === 'number') {
    }
    else if (typeof name === 'string') {
    }
    else {
        // 타입이 제대로 들어온다면 이 블록은 실행되지 않음
        // never
        name;
    }
}
