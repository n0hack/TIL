// 비밀번호 암호화, 토큰 생성 등 함수들을 모아둔 파일
import crypto from 'crypto';

const SECRET = 'LUCID-REST-API';

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (salt: string, password: string) => {
  // NOTE 해시 기반 메시지 인증 (HMAC)
  // - md5, sha 등의 암호화 해시 함수를 사용하여, 클라이언트가 보내는 메시지를 인증하는 방식
  // - 구현 용이하며, 가볍고 속도가 빨라, REST API 인증의 필수 요소로 자리 잡고 있음

  // 1. sha256 알고리즘을 사용
  // 2. salt와 password를 합친 HMAC key를 생성
  // 3. sha256으로 암호화된 값에 SECRET을 추가하여, 최종적으로 hex 방식의 암호 표현
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
