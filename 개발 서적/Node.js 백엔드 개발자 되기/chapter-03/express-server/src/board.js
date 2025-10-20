const express = require('express');
const app = express();

let posts = [];

// req.body를 사용하기 위해 JSON 미들웨어 사용
app.use(express.json());

// JSON 미들웨어와 함께 사용하며, POST 요청 시 콘텐츠 타입이 application/x-www-form-urlencoded인 경우 자동으로 파싱
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { title, name, text } = req.body;

  posts.push({
    id: posts.length + 1,
    title,
    name,
    text,
    createdAt: Date(),
  });
  res.json({ title, name, text });
});

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;

  const filteredPosts = posts.filter((post) => post.id !== +id);
  const isLengthChanged = posts.length !== filteredPosts.length;

  posts = filteredPosts;

  if (isLengthChanged) {
    res.json('OK');
    return;
  }

  res.json('NOT CHANGED');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
