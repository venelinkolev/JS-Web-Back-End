const express = require('express');
const expressConfig = require('./config/express');
const { connectDB } = require('./config/configDB');

const router = require('./config/routes');

connectDB(); 

const app = express();
const PORT = 3000;

expressConfig(app);
app.use(router);

app.listen(PORT, () => console.log(`Server started ot Port:${PORT} ....`));
