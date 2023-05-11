const express = require('express');

const catalogController = require('./catalogController');
const dataController = require('./dataController');
const logger = require('./logger');

const app = express();

app.use(express.static('static'));

app.use(logger());

app.get('/', (req, res) => {
  //res.send('Hi');
  res.sendFile(__dirname + '/index.html');
});

app.get('/img', (req, res) => {
  res.sendFile(__dirname + '/image.jpg');
  //res.download(__dirname + '/image.jpg');
});

app
  .route('/create')
  .get((req, res) => {
    res.send(
      '<form method="POST"><input name="name"><button>Send</button></form>'
    );
  })
  .post((req, res) => {
    console.log('Henling POST request');
    res.status(201).send('Item Created');
    res.redirect('/create');
  });

app.use(catalogController);
app.use('/data', dataController);

app.listen(3000);
