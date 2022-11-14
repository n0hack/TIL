import fs from 'fs';

// Sync
const data = fs.readFileSync('package.json', 'utf-8');

// Async
fs.readFile('package.json', 'utf-8', (err, data) => {
  console.log(data);
});

const text = 'hello world';

fs.writeFile('output.txt', text, (err) => {
  console.log('데이터 쓰기 완료');
});
