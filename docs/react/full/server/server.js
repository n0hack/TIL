const path = require('path');
const express = require('express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { DB } = require('./db');

const app = express();
DB.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
