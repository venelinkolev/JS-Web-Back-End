const express = require('express');
const expressConfig = require('./config/express');

const router = require('./config/routes');

const app = express();
const PORT = 3000;

expressConfig(app);
app.use(router);

app.listen(PORT, () => console.log(`Server started ot Port:${PORT} ....`));
