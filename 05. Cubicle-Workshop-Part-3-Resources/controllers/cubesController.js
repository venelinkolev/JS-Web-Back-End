const router = require('express').Router();
const { create, details } = require('../service/cubeService');

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create Cube Page',
  });
});

router.post('/create', (req, res) => {
  create(req.body);

  res.redirect('/');
});

router.get('/:idCube/details', async (req, res) => {
  const id = req.params.idCube;
  const cube = await details(id);
  
  //console.log('Second', cube.accessories);
  
  res.render('details', {
    title: 'Cubicle',
    cube,
  });
});
module.exports = router;
