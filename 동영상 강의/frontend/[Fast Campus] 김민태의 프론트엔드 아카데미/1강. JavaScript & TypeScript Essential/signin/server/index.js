const express = require('express');
const morgan = require('morgan');
const { v4 } = require('uuid');
const axios = require('axios');
const app = express();

app.use(express.static('dist'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/user/:id', (req, res) => {
  if (!req.headers['token']) {
    return res.status(403).send({
      status: 'Error',
    });
  }

  axios
    .get('https://randomuser.me/api')
    .then((result) => {
      const [userProfile] = result.data.results;
      const { name, picture, phone, email, country } = userProfile;

      res.status(200).send({
        status: 'OK',
        result: {
          name,
          picture,
          phone,
          email,
          country,
        },
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: 'Error',
      });
    });
});

app.get('/api/user/:id/posts', (req, res) => {
  if (!req.headers['token']) {
    return res.status(403).send({
      status: 'Error',
    });
  }

  axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${req.params.id}`)
    .then((result) => {
      res.status(200).send({
        status: 'OK',
        results: result.data,
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: 'Error',
      });
    });
});

app.post('/api/authentication', (req, res) => {
  if (Math.floor(Math.random() * 10) % 2 === 0) {
    res.status(200).send({
      status: 'OK',
      result: {
        id: Math.floor(Math.random() * 10),
        token: v4(),
      },
    });
  } else {
    res.status(400).send({
      status: 'Error',
    });
  }
});

app.listen(8080, () => {
  console.log('ready to dumy signup server');
});
