const express = require('express');
const router = express.Router();
const { DB } = require('../db');

router.get('/', function (req, res, next) {
  res.send({ id: 1, name: 'NoHack' });
});

router.post('/', function (req, res, next) {
  const { username } = req.body;
  console.log(req.query);
  DB.query('select * from react_swtool', (err, result, fields) => {
    res.send({ message: 'node post success', result });
  });
});

module.exports = router;
