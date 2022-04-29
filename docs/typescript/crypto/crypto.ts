interface Block {
  index: number; // 블록 번호
  timestamp: number; // 블록체인에 추가된 시간
  data: string; // 한 번 이상의 거래에 대한 데이터
  nonce: number; // 채굴자들이 알아내야할 숫자
  hash: string; // 이 블록의 해시
  previousBlockHash: string; // 이전 블록의 해시
}

import * as crypto from 'crypto';
let nonce = 0;

async function generateHash(input: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => '00' + b.toString(16))
    .slice(-2)
    .join('');
  return hashHex;
}

async function calculateHashWithNonce(nonce: number): Promise<string> {
  const data = 'Hello World' + nonce;
  return generateHash(data);
}

async function mine(): Promise<void> {
  let hash: string;
  do {
    hash = await calculateHashWithNonce(++nonce);
  } while (hash.startsWith('0000') === false);
  console.log(`Hash: ${hash}, nonce: ${nonce}`);
}
mine();
