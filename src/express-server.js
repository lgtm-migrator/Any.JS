const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

exports.setupApp = async function setupApp() {
  app.use(express.json());
  app.use('/api/anyJS/v1', routes);

  mongoose.connect('mongodb://databaseprimary:27017/?replicaSet=anyjs-db', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to DB!'));

  return app;
};
