// 인덱스 시그니처
type TDict = { [key: string]: string };
interface IDict {
  [key: string]: string;
}

// 프로젝트 내부적으로 사용되는 타입에 선언 병합이 발생하면 잘못된 설계
