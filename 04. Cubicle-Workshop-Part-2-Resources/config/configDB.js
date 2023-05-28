const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const { readData } = require('../util/fileManage');


const connectionString = 'mongodb://127.0.0.1:27017/cubicle';

async function connectDB() {
    await mongoose.connect(connectionString);

    console.log('DB connected ...');
/*
    const database = await readData();
    //console.log(database);

    async function newCube(cube) {
        await Cube.create(cube);
    }

    database.forEach(cube => newCube(cube));
    */
}
module.exports = { connectDB };