const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./controllers/homeController');
const catsController = require('./controllers/catsController');

const app = express();

app.engine(
  '.hbs',
  hbs.engine({
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.use(homeController);
app.use('/cats', catsController);

app.listen(3000, () => {
  console.log('Server started!');
});
