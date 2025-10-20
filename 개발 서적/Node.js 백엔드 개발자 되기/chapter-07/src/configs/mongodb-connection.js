const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://nohack:121234@cluster0.8dzchks.mongodb.net/board';

module.exports = function () {
  return MongoClient.connect(uri);
};
