import fs from 'fs';
import path from 'path';

fs.stat(path.resolve(__dirname, 'test.txt'), (err, stats) => {
  console.log(stats.isFile());
});
