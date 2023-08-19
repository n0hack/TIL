const express = require('express');

const PORT = 52273;

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
