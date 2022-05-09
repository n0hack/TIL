import * as crypto from 'crypto-js';
let nonce = 0;

function generateHash(input: string) {
  const hash = crypto.SHA256(input);
  return hash.toString(crypto.enc.Hex);
}

function calculateHashWithNonce(nonce: number): string {
  const data = 'Hello World' + nonce;
  return generateHash(data);
}

function mine() {
  let hash: string;
  do {
    hash = calculateHashWithNonce(++nonce);
  } while (!hash.startsWith('0000'));
  console.log(`Hash: ${hash}, nonce: ${nonce}`);
}
mine();
