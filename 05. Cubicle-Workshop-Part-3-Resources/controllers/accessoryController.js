const {
  createAccessory,
  attachAccessory,
  getCurrnetAccessories,
} = require('../service/accessoryService');
const { getCube } = require('../service/cubeService');

const router = require('express').Router();

router.get('/create', (req, res) => {
  res.render('createAccessory', {
    title: 'Create Accessory',
  });
});

router.post('/create', (req, res) => {
  // const data = req.body;
  // console.log(data);

  createAccessory(req.body);

  res.redirect('/');
});

router.get('/:idCube/attach', async (req, res) => {
  const id = req.params.idCube;

  const currentCube = await getCube(id);
  const accessoriesId = currentCube.accessories;
  const accessories = await getCurrnetAccessories(accessoriesId);

  //console.log(id, currentCube);

  res.render('attachAccessory', {
    title: 'Attach a new accessory',
    accessories,
    currentCube,
  });
});

router.post('/:idCube/attach', async (req, res) => {
  const { accessory } = req.body;
  const id = req.params.idCube;

  //console.log(accessory, id);
  await attachAccessory(accessory, id);

  res.redirect(`/cubes/${id}/details`);
});

module.exports = router;
