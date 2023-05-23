const express = require('express');
const expressConfig = require('./config/express');
const homeController = require('./controllers/homeController');
const cubesController = require('./controllers/cubesControler');

const app = express();
const PORT = 3000;

expressConfig(app);

app.use(homeController);

app.listen(PORT, () => console.log(`Server started ot ${PORT} ....`));
