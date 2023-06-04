const mongoose = require('mongoose');


const connectionString = 'mongodb://127.0.0.1:27017/cubicle';

async function connectDB() {
    await mongoose.connect(connectionString);

    console.log('DB connected ...');

}
module.exports = { connectDB };