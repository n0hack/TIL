const express = require('express');
const cors = require('cors');
const commonConfig = require('./config.common');
const developConfig = require('./config.develop');
const prodConfig = require('./config.prod');

const app = express();
const port = process.env.PORT || 1200;

app.use(cors());

app.all('/', (req, res) => {
  res.status(200).send({
    status: '12shop remote config server',
    eg: '/config/[env]',
  })
});

app.get('/config/develop', (req, res) => {
  res.status(200).send({
    status: 'OK',
    statusCode: 200,
    data: {
      config: {
        ...commonConfig, ...developConfig
      }
    }
  });
});

app.get('/config/production', (req, res) => {
  res.status(200).send({
    status: 'OK',
    statusCode: 200,
    data: {
      config: {
        ...commonConfig, ...prodConfig
      }
    }
  });
});

app.listen(port, () => {
  console.log(`ready to ${port}`);
});
