const board = [
  ['N', 'N', 'N', 'N', 'S'],
  ['N', 'E', 'E', 'E', 'N'],
  ['N', 'E', 'Y', 'E', 'N'],
  ['N', 'E', 'E', 'E', 'N'],
  ['N', 'N', 'N', 'N', 'N'],
];

const dx = [-1, -1, -1, 1, 1, 1, 0, 0];
const dy = [-1, 0, 1, -1, 0, 1, -1, 1];

const inRange = (x, y) => {
  return !(x < 0 || y < 0 || x >= board.length || y >= board.length);
};

const hasWord = (x, y, word) => {
  if (!inRange(x, y)) return false;
  if (board[y][x] !== word[0]) return false;
  if (word.length === 1) return true;
  for (let direction = 0; direction < 8; direction++) {
    const [nextX, nextY] = [x + dx[direction], y + dy[direction]];
    if (hasWord(nextX, nextY, word.substring(1))) {
      return true;
    }
  }

  return false;
};

console.log(hasWord(2, 2, 'YES'));
