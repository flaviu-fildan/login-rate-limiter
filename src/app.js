const express = require('express');

const loginController = require('./controllers/loginController');

const PORT = process.env.PORT || '8080';

const app = express();

app.set('port', PORT);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/login', loginController.post);

module.exports = app;
