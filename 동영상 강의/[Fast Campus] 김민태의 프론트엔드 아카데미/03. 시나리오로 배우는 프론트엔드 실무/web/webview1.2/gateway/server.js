const { default: axios } = require('axios');
const express = require('express');
const morgan = require('morgan');
const apiAdapter = require('./api-adapter');
const messageBuilder = require('./message-builder');
const app = express();
const port = process.env.PORT || 1204;
const remoteConfigUrl = `http://config.12shop.com:1200/config/develop`;

let apiServer;
let remoteConfig;

app.use(express.static('build'));
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/config', (req, res) => {
  res.status(200).send(messageBuilder({
    statusCode: 200,
    status: 'OK',
    data: { ...remoteConfig },
  }));
});

app.get('/config/refresh', async (req, res) => {
  try {
    const response = await axios(remoteConfigUrl);
      
    remoteConfig = { ...response.data.data.config };
    
    res.status(200).send({ status: 'OK' });
  } catch(e) {
    res.status(500).send({ status: 'ERROR' });
  }
});

app.use('/api', async (req, res) => {
  const originalUrl = req.originalUrl.substring(5);
  
  try {
    const response = await apiServer({
      method: req.method,
      url: originalUrl,
      headers: req.headers,
      data: req.body,
    });

    res.status(response.status).send(messageBuilder({
      statusCode: response.status,
      status: response.statusText,
      data: response.data,
    }));
  } catch(e) {
    res.status(e.response.data.statusCode).send(messageBuilder({
      statusCode: e.response.data.statusCode,
      status: e.response.data.message,
      error: e.response.data.error,
    }));
  }
});

app.listen(port, async () => {
  try {
    const response = await axios(remoteConfigUrl);
    
    remoteConfig = { ...response.data.data.config };
    apiServer = apiAdapter(remoteConfig.server.b2c);
  
    console.log(`ready to ${port}`);
  } catch(e) {
    console.error(e);
    process.exit(-1);
  }
});
