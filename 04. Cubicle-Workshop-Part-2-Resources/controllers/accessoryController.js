const { createAccessory, attachAccessory, getAllAccessory } = require('../service/accessoryService');

const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('createAccessory', {
        title: 'Create Accessory'
    });
});

router.post('/create', (req, res) => {
    // const data = req.body;
    // console.log(data);

    createAccessory(req.body);

    res.redirect('/');
});

router.get('/:idCube/attach', async (req, res) => {
    const accessories = await getAllAccessory();
    console.log(accessories);
    
    res.render('attachAccessory', {
        title: 'Attach a new accessory',
        accessories,
    });

});

router.post('/:idCube/attach', (req, res) => {
    attachAccessory();
});

module.exports = router;