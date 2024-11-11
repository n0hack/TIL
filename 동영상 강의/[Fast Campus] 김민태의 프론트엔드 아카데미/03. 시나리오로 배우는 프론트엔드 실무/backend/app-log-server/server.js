const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1205;

app.use(morgan('common'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const AppLogs = mongoose.model('AppLogs', { 
  service: String,
  application: String,
  screen: String,
  event: String,
  user: String,
  extraData: String,
  clientTimestamp: Number,
});

app.get('/api/logs', async (req, res) => {
  const appLogs = await AppLogs.find();

  res.send(appLogs);
});

app.post('/api/logs', async (req, res) => {
  const appLogs = new AppLogs({ 
    service: req.body.service,
    application: req.body.application,
    screen: req.body.screen,
    event: req.body.event,
    user: req.body.user,
    extraData: req.body.extraData,
    clientTimestamp: req.body.clientTimestamp,
  });

  await appLogs.save();
  res.status(201).send({
    status: 'OK',
    statusCode: 201,
  });
});

app.listen(port, async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/12shop-app-log');

    console.log(`ready to ${port}`);
  } catch(e) {
    console.error(e);
    process.exit(-1);
  }
});
