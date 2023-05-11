const express = require('express');
const hbr = require('express-handlebars');

const app = express();

const handlebars = hbr.create({
  extname: '.hbs',
});

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('home', {
    username: 'Ven',
    message: 'Hello World',
    response: 'Venelin',
    product: {
      name: 'Sky',
      price: 34,
    },
    contacts: [
      {
        name: 'Peter',
        email: 'peter@abv.bg',
      },
      {
        name: 'Maria',
        email: 'maria@abv.bg',
      },
      {
        name: 'Ven',
        email: 'ven@abv.bg',
      },
      {
        name: 'Mimi',
        email: 'mimi@abv.bg',
      },
    ],
  });
});

app.listen(3000);
