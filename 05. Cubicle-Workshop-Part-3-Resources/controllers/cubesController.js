const router = require('express').Router();
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const {
  create,
  details,
  getCube,
  deleteCube,
  updateCube,
} = require('../service/cubeService');
const { optionsViewData } = require('../util/optionsViewData');

router.get('/create', isAuthenticated, (req, res) => {
  res.render('create', {
    title: 'Create Cube Page',
  });
});

router.post('/create', (req, res) => {
  const creatorId = req.user.id;
  create(req.body, creatorId);

  res.redirect('/');
});

router.get('/:idCube/details', async (req, res) => {
  const id = req.params.idCube;
  const cube = await details(id).lean();

  const isCreator = cube.creatorId?.toString() === req.user.id;

  //console.log(cube.creatorId.toString(), req.user.id);

  res.render('details', {
    title: 'Cubicle',
    cube,
    isCreator,
  });
});

router.get('/:idCube/edit', async (req, res) => {
  const editCube = await getCube(req.params.idCube);

  //console.log(editCube.difficultyLevel);

  const options = optionsViewData(editCube.difficultyLevel);

  res.render('editCube', {
    title: 'Edit Cube',
    cube: editCube,
    options,
  });
});

router.post('/:idCube/edit', async (req, res) => {
  const id = req.params.idCube;
  const cubeData = req.body;

  await updateCube(id, cubeData);

  res.redirect(`/cubes/${req.params.idCube}/details`);
});

router.get('/:idCube/delete', async (req, res) => {
  const deleteCube = await getCube(req.params.idCube);

  const options = optionsViewData(deleteCube.difficultyLevel);

  res.render('deleteCube', {
    title: 'Delete Cube',
    cube: deleteCube,
    options,
  });
});

router.post('/:idCube/delete', async (req, res) => {
  await deleteCube(req.params.idCube);

  res.redirect('/');
});

module.exports = router;
