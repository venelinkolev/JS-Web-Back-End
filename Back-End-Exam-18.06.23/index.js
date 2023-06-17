const express = require('express');
const expressConfig = require('./config/express');
const { connectDB } = require('./config/configDB');

const router = require('./config/routes');
const PORT = 3000;

connectDB();

const app = express();

expressConfig(app);
app.use(router);

app.listen(PORT, () => console.log(`Server started ot Port:${PORT} ....`));
