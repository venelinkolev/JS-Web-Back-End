const Accessory =  require('../models/Accessory');

async function createAccessory(item) {
    const { name, description, imageUrl } = item;

    await Accessory.create({
        name,
        description,
        imageUrl,
    });

}

async function attachAccessory() {

}

async function getAllAccessory() {
    return await Accessory.find({}).lean();
}

module.exports = {
    createAccessory,
    attachAccessory,
    getAllAccessory,
};