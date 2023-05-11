const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);

    //Test Golbal Error Handling
    // app.get('/error', (req, res, next) => {
    //     next(new Error('propagating error'));
    // });

    // app.use((err, req, res, next) => {
    //     console.log('Golbal error handling');
    //     console.log(err.message);
    //     res.redirect('/');
    // }); 
};