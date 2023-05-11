const { Router } = require('express');

const router = Router();

router.get('/catalog', (req, res) => {
  res.send('Catalog page');
});

router.post(
  '/catalog',
  (req, res, next) => {
    console.log('Hendling POST request');
    console.log('Logging from middleware');
    next();
  },
  (req, res) => {
    res.redirect('/catalog');
  }
);

router.get('/catalog/:productId', (req, res) => {
  console.log(req.params.productId);
  res.send('Product');
});

router.get('/catalog/:category/:Id', (req, res) => {
  console.log(req.params);
  res.send('Product');
});

module.exports = router;
