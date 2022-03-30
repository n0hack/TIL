const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send({ id: 1, name: 'NoHack' });
});

router.post('/', function (req, res, next) {
  const { username } = req.body;
  res.send({ message: 'node post success', username });
});

module.exports = router;
