const Accessory =  require('../models/Accessory');
const Cube = require('../models/Cube');

async function createAccessory(item) {
    const { name, description, imageUrl } = item;

    await Accessory.create({
        name,
        description,
        imageUrl,
    });

}

async function attachAccessory(accessoryId, id) {
    //console.log(id, accessoryId);
    //await Cube.findByIdAndUpdate(id, { $push: { accessories: accessoryId } });

    const currentCube = await Cube.findById(id);
    currentCube.accessories.push(accessoryId); 

    currentCube.save();
}

async function getAllAccessory() {
    return await Accessory.find({}).lean();
}

async function getCurrnetAccessories(accessoryId) {
    return await Accessory.find({ _id: {$nin: accessoryId } }).lean();
}

module.exports = {
    createAccessory,
    attachAccessory,
    getAllAccessory,
    getCurrnetAccessories,
};