import fs from 'fs';
import path from 'path';

namespace Ch03Stream {
  // const stream = fs.createReadStream(path.resolve(__dirname, 'readme.txt'), { highWaterMark: 16 });
  // const data: Uint8Array[] = [];
  // stream.on('data', (chunk) => {
  //   data.push(Buffer.from(chunk));
  //   console.log(chunk, chunk.length);
  // });
  // stream.on('end', () => {
  //   console.log(Buffer.concat(data).toString());
  // });
  // const file = fs.createWriteStream(path.resolve(__dirname, 'big.txt'));
  // for (let i = 0; i < 100000; i++) {
  //   file.write('안녕하세요. 엄청나게 큰 파일을 만들어 볼거에요!\n');
  // }
  // file.end();
}
