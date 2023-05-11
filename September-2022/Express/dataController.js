const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Peter',
      age: 25,
    },
    {
      name: 'John',
      age: 30,
    },
  ]);
});

module.exports = router;
